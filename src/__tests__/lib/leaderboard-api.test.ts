import { LeaderboardAPI } from '@/lib/leaderboard-api'

// Mock fetch globally
global.fetch = jest.fn()

// Mock console methods to avoid noise in tests
console.log = jest.fn()
console.error = jest.fn()
console.warn = jest.fn()

describe('LeaderboardAPI', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.clearAllTimers()
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  describe('formatValue', () => {
    it('formats money values correctly', () => {
      expect(LeaderboardAPI.formatValue('money', 1000)).toBe('$1,000')
      expect(LeaderboardAPI.formatValue('money', 1234567)).toBe('$1,234,567')
    })

    it('formats playtime values correctly', () => {
      expect(LeaderboardAPI.formatValue('playtime', 3600)).toBe('1h 0m')
      expect(LeaderboardAPI.formatValue('playtime', 3661)).toBe('1h 1m')
      expect(LeaderboardAPI.formatValue('playtime', 7200)).toBe('2h 0m')
    })

    it('formats time since death correctly', () => {
      expect(LeaderboardAPI.formatValue('timesincedeath', 86400)).toBe('1d 0h')
      expect(LeaderboardAPI.formatValue('timesincedeath', 90000)).toBe('1d 1h')
      expect(LeaderboardAPI.formatValue('timesincedeath', 172800)).toBe('2d 0h')
    })

    it('formats default values correctly', () => {
      expect(LeaderboardAPI.formatValue('kills', 100)).toBe('100')
      expect(LeaderboardAPI.formatValue('deaths', 1234)).toBe('1,234')
    })
  })

  describe('getCategoryInfo', () => {
    it('returns correct info for known categories', () => {
      const moneyInfo = LeaderboardAPI.getCategoryInfo('money')
      expect(moneyInfo.name).toBe('money')
      expect(moneyInfo.displayName).toBe('Top Money')
      expect(moneyInfo.description).toBe('Richest players on the server')
    })

    it('returns default info for unknown categories', () => {
      const unknownInfo = LeaderboardAPI.getCategoryInfo('unknown')
      expect(unknownInfo.name).toBe('unknown')
      expect(unknownInfo.displayName).toBe('Unknown')
      expect(unknownInfo.icon).toBe('📊')
      expect(unknownInfo.description).toBe('Server statistics')
    })
  })

  describe('deduplicatePlayersByUUID', () => {
    it('removes duplicate players and keeps the highest position', () => {
      const rankings = [
        { position: 1, player_name: 'Player1', player_uuid: 'uuid-1', value: '100', formatted_value: '100' },
        { position: 2, player_name: 'Player2', player_uuid: 'uuid-2', value: '90', formatted_value: '90' },
        { position: 3, player_name: 'Player1', player_uuid: 'uuid-1', value: '80', formatted_value: '80' },
      ]

      // Access private method via bracket notation for testing
      const deduplicated = (LeaderboardAPI as any).deduplicatePlayersByUUID(rankings) // eslint-disable-line @typescript-eslint/no-explicit-any
      
      expect(deduplicated).toHaveLength(2)
      expect(deduplicated[0].player_uuid).toBe('uuid-1')
      expect(deduplicated[0].position).toBe(1) // Should keep the higher position (lower number)
      expect(deduplicated[1].player_uuid).toBe('uuid-2')
    })
  })

  describe('calculatePercentileRank', () => {
    it('calculates percentile rank correctly', () => {
      expect(LeaderboardAPI.calculatePercentileRank(1, 100)).toBe(100)
      expect(LeaderboardAPI.calculatePercentileRank(50, 100)).toBe(51)
      expect(LeaderboardAPI.calculatePercentileRank(100, 100)).toBe(0)
    })

    it('handles edge cases', () => {
      expect(LeaderboardAPI.calculatePercentileRank(1, 1)).toBe(100)
      expect(LeaderboardAPI.calculatePercentileRank(1, 0)).toBe(100)
    })
  })

  describe('formatTimeAgo', () => {
    it('formats time correctly', () => {
      // Mock Date.now to return a fixed timestamp
      const mockNow = new Date('2025-08-12T12:00:00Z').getTime()
      jest.spyOn(Date, 'now').mockReturnValue(mockNow)

      expect(LeaderboardAPI.formatTimeAgo('2025-08-12T11:59:30Z')).toBe('Just now')
      expect(LeaderboardAPI.formatTimeAgo('2025-08-12T11:58:00Z')).toBe('2m ago')
      expect(LeaderboardAPI.formatTimeAgo('2025-08-12T10:00:00Z')).toBe('2h ago')
      expect(LeaderboardAPI.formatTimeAgo('2025-08-11T12:00:00Z')).toBe('1d ago')

      // Restore the original implementation
      jest.restoreAllMocks()
    })
  })

  describe('getTierColor', () => {
    it('returns correct colors for tiers', () => {
      expect(LeaderboardAPI.getTierColor('bronze')).toBe('from-orange-400 to-orange-600')
      expect(LeaderboardAPI.getTierColor('silver')).toBe('from-gray-300 to-gray-500')
      expect(LeaderboardAPI.getTierColor('gold')).toBe('from-yellow-400 to-yellow-600')
      expect(LeaderboardAPI.getTierColor('diamond')).toBe('from-cyan-400 to-cyan-600')
      expect(LeaderboardAPI.getTierColor('legend')).toBe('from-purple-400 to-purple-600')
      expect(LeaderboardAPI.getTierColor('unknown')).toBe('from-gray-400 to-gray-600')
    })
  })

  describe('API methods', () => {
    const mockFetch = fetch as jest.MockedFunction<typeof fetch>

    describe('getCategoryLeaderboard', () => {
      it('successfully fetches category leaderboard', async () => {
        const mockResponse = {
          category: 'money',
          display_name: 'Top Money',
          rankings: [
            { position: 1, player_name: 'Player1', player_uuid: 'uuid-1', value: '1000', formatted_value: '$1,000' }
          ],
          last_updated: '2025-08-12T10:00:00Z',
          total_entries: 1
        }

        mockFetch.mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockResponse),
        } as Response)

        const result = await LeaderboardAPI.getCategoryLeaderboard('money')

        expect(result).toEqual(mockResponse)
        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining('/api/leaderboards/money'),
          expect.objectContaining({
            headers: { 'Accept': 'application/json' },
          })
        )
      })

      it('handles network errors', async () => {
        mockFetch.mockRejectedValueOnce(new Error('Network error'))

        await expect(LeaderboardAPI.getCategoryLeaderboard('money'))
          .rejects.toThrow('Unable to connect to server for money leaderboard')
      })

      it('handles HTTP errors', async () => {
        mockFetch.mockResolvedValueOnce({
          ok: false,
          status: 500,
          json: () => Promise.resolve({ message: 'Internal server error' }),
        } as Response)

        await expect(LeaderboardAPI.getCategoryLeaderboard('money'))
          .rejects.toThrow('Failed to fetch money leaderboard: Internal server error')
      })
    })

    describe('getAllLeaderboards', () => {
      it('successfully fetches all leaderboards', async () => {
        const categoriesResponse = { categories: ['money', 'playtime'] }
        const moneyResponse = {
          category: 'money',
          display_name: 'Top Money',
          rankings: [],
          last_updated: '2025-08-12T10:00:00Z',
          total_entries: 0
        }
        const playtimeResponse = {
          category: 'playtime',
          display_name: 'Top Playtime',
          rankings: [],
          last_updated: '2025-08-12T10:00:00Z',
          total_entries: 0
        }

        mockFetch
          .mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(categoriesResponse),
          } as Response)
          .mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(moneyResponse),
          } as Response)
          .mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(playtimeResponse),
          } as Response)

        const result = await LeaderboardAPI.getAllLeaderboards()

        expect(result.leaderboards).toHaveLength(2)
        expect(result.leaderboards[0].category).toBe('money')
        expect(result.leaderboards[1].category).toBe('playtime')
      })

      it('handles individual category failures gracefully', async () => {
        const categoriesResponse = { categories: ['money', 'playtime'] }
        const moneyResponse = {
          category: 'money',
          display_name: 'Top Money',
          rankings: [],
          last_updated: '2025-08-12T10:00:00Z',
          total_entries: 0
        }

        mockFetch
          .mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(categoriesResponse),
          } as Response)
          .mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(moneyResponse),
          } as Response)
          .mockRejectedValueOnce(new Error('Playtime fetch failed'))

        const result = await LeaderboardAPI.getAllLeaderboards()

        expect(result.leaderboards).toHaveLength(2)
        expect(result.leaderboards[0].category).toBe('money')
        expect(result.leaderboards[1].category).toBe('playtime')
        expect(result.leaderboards[1].rankings).toHaveLength(0) // Placeholder for failed category
      })
    })

    // Note: Timeout tests are complex in Jest environment and are covered by integration tests
  })
})