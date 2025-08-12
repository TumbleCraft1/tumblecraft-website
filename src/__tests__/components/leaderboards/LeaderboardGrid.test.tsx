import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import LeaderboardGrid from '@/components/leaderboards/LeaderboardGrid'
import { LeaderboardsResponse } from '@/lib/leaderboard-api'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

const mockPush = jest.fn()
const mockRouter = {
  push: mockPush,
  pathname: '/leaderboards',
}

const mockData: LeaderboardsResponse = {
  leaderboards: [
    {
      category: 'money',
      display_name: 'Top Money',
      rankings: [
        {
          position: 1,
          player_name: 'RichPlayer',
          player_uuid: 'rich-uuid-123',
          value: '10000',
          formatted_value: '$10,000.00'
        },
        {
          position: 2,
          player_name: 'WealthyPlayer',
          player_uuid: 'wealthy-uuid-456',
          value: '5000',
          formatted_value: '$5,000.00'
        }
      ],
      last_updated: '1723464000', // Unix timestamp
      total_entries: 25
    },
    {
      category: 'playtime',
      display_name: 'Top Playtime',
      rankings: [
        {
          position: 1,
          player_name: 'DedicatedPlayer',
          player_uuid: 'dedicated-uuid-789',
          value: '7200',
          formatted_value: '2h 0m'
        }
      ],
      last_updated: '1723464000',
      total_entries: 15
    }
  ]
}

describe('LeaderboardGrid', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
  })

  it('renders the leaderboard title and description', () => {
    render(<LeaderboardGrid data={mockData} />)

    expect(screen.getByText('🏆 Leaderboards')).toBeInTheDocument()
    expect(screen.getByText(/See how you stack up against the competition/)).toBeInTheDocument()
  })

  it('renders all category tabs', () => {
    render(<LeaderboardGrid data={mockData} />)

    expect(screen.getByRole('button', { name: /Top Money 25/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Top Playtime 15/i })).toBeInTheDocument()
  })

  it('shows the first category as active by default', () => {
    render(<LeaderboardGrid data={mockData} />)

    // Check that the first category (money) is shown by looking for the heading
    expect(screen.getByRole('heading', { name: 'Top Money' })).toBeInTheDocument()
    expect(screen.getByText('Richest players on the server')).toBeInTheDocument()
  })

  it('switches to different category when tab is clicked', () => {
    render(<LeaderboardGrid data={mockData} />)

    // Click on playtime tab
    const playtimeTab = screen.getByRole('button', { name: /Top Playtime 15/i })
    fireEvent.click(playtimeTab)

    // Check that playtime category is now shown
    expect(screen.getByText('Most dedicated players')).toBeInTheDocument()
    expect(screen.getByText('DedicatedPlayer')).toBeInTheDocument()
  })

  it('displays player rankings in a table', () => {
    render(<LeaderboardGrid data={mockData} />)

    // Check table headers
    expect(screen.getByText('Rank')).toBeInTheDocument()
    expect(screen.getByText('Player')).toBeInTheDocument()
    expect(screen.getByText('Value')).toBeInTheDocument()

    // Check player data
    expect(screen.getByText('RichPlayer')).toBeInTheDocument()
    expect(screen.getByText('$10,000.00')).toBeInTheDocument()
    expect(screen.getByText('WealthyPlayer')).toBeInTheDocument()
    expect(screen.getByText('$5,000.00')).toBeInTheDocument()
  })

  it('shows rank numbers correctly', () => {
    render(<LeaderboardGrid data={mockData} />)

    expect(screen.getByText('#1')).toBeInTheDocument()
    expect(screen.getByText('#2')).toBeInTheDocument()
  })

  it('navigates to player profile when player row is clicked', () => {
    render(<LeaderboardGrid data={mockData} />)

    const playerRow = screen.getByText('RichPlayer').closest('tr')
    fireEvent.click(playerRow!)

    expect(mockPush).toHaveBeenCalledWith('/player/rich-uuid-123?name=RichPlayer')
  })

  it('displays last updated time', () => {
    render(<LeaderboardGrid data={mockData} />)

    // The timestamp should be converted and displayed
    expect(screen.getByText(/Last updated:/)).toBeInTheDocument()
  })

  it('displays total entries count', () => {
    render(<LeaderboardGrid data={mockData} />)

    expect(screen.getByText('25 competitive players')).toBeInTheDocument()
  })

  it('handles empty rankings gracefully', () => {
    const emptyData: LeaderboardsResponse = {
      leaderboards: [
        {
          category: 'empty',
          display_name: 'Empty Category',
          rankings: [],
          last_updated: '1723464000',
          total_entries: 0
        }
      ]
    }

    render(<LeaderboardGrid data={emptyData} />)

    expect(screen.getByText('No players found for this category')).toBeInTheDocument()
  })

  it('shows correct rank colors for top 3 positions', () => {
    render(<LeaderboardGrid data={mockData} />)

    const rank1 = screen.getByText('#1')
    const rank2 = screen.getByText('#2')

    expect(rank1).toHaveClass('text-yellow-500')
    expect(rank2).toHaveClass('text-gray-400')
  })

  it('displays player count badges in tabs', () => {
    render(<LeaderboardGrid data={mockData} />)

    // Check that player counts are shown in the tabs by finding them within the tab buttons
    expect(screen.getByRole('button', { name: /Top Money.*25/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Top Playtime.*15/ })).toBeInTheDocument()
  })

  it('handles unknown categories with fallback info', () => {
    const unknownCategoryData: LeaderboardsResponse = {
      leaderboards: [
        {
          category: 'unknown_category',
          display_name: 'Unknown Category',
          rankings: [],
          last_updated: '1723464000',
          total_entries: 0
        }
      ]
    }

    render(<LeaderboardGrid data={unknownCategoryData} />)

    expect(screen.getByRole('heading', { name: 'Unknown Category' })).toBeInTheDocument()
  })

  it('handles empty leaderboards data', () => {
    const emptyData: LeaderboardsResponse = {
      leaderboards: []
    }

    render(<LeaderboardGrid data={emptyData} />)

    // Should render the title and description but no tables
    expect(screen.getByText('🏆 Leaderboards')).toBeInTheDocument()
  })
})