import { render, screen, fireEvent } from '@testing-library/react'
import LeaderboardCard from '@/components/leaderboards/LeaderboardCard'
import { LeaderboardCategory, CategoryInfo } from '@/lib/leaderboard-api'

// Mock the PlayerRanking component
jest.mock('@/components/leaderboards/PlayerRanking', () => {
  return function MockPlayerRanking({ player, rank }: { player: any; rank: number }) { // eslint-disable-line @typescript-eslint/no-explicit-any
    return (
      <div data-testid="player-ranking">
        Rank {rank}: {player.player_name} - {player.formatted_value}
      </div>
    )
  }
})

const mockCategory: LeaderboardCategory = {
  category: 'money',
  display_name: 'Top Money',
  rankings: [
    {
      position: 1,
      player_name: 'TestPlayer1',
      player_uuid: 'uuid-1',
      value: '1000',
      formatted_value: '$1,000.00'
    },
    {
      position: 2,
      player_name: 'TestPlayer2',
      player_uuid: 'uuid-2',
      value: '500',
      formatted_value: '$500.00'
    },
    {
      position: 3,
      player_name: 'TestPlayer3',
      player_uuid: 'uuid-3',
      value: '250',
      formatted_value: '$250.00'
    },
    {
      position: 4,
      player_name: 'TestPlayer4',
      player_uuid: 'uuid-4',
      value: '100',
      formatted_value: '$100.00'
    }
  ],
  last_updated: '2025-08-12T10:00:00Z',
  total_entries: 10
}

const mockCategoryInfo: CategoryInfo = {
  name: 'money',
  displayName: 'Top Money',
  icon: '💰',
  description: 'Richest players on the server',
  color: 'from-yellow-400 to-yellow-600'
}

describe('LeaderboardCard', () => {
  it('renders category information correctly', () => {
    render(
      <LeaderboardCard 
        category={mockCategory} 
        categoryInfo={mockCategoryInfo} 
      />
    )

    expect(screen.getByText('Top Money')).toBeInTheDocument()
    expect(screen.getByText('Richest players on the server')).toBeInTheDocument()
    expect(screen.getByText('10 players')).toBeInTheDocument()
  })

  it('renders top 3 players', () => {
    render(
      <LeaderboardCard 
        category={mockCategory} 
        categoryInfo={mockCategoryInfo} 
      />
    )

    const playerRankings = screen.getAllByTestId('player-ranking')
    expect(playerRankings).toHaveLength(3)
    
    expect(screen.getByText('Rank 1: TestPlayer1 - $1,000.00')).toBeInTheDocument()
    expect(screen.getByText('Rank 2: TestPlayer2 - $500.00')).toBeInTheDocument()
    expect(screen.getByText('Rank 3: TestPlayer3 - $250.00')).toBeInTheDocument()
  })

  it('shows additional players count when more than 3 players', () => {
    render(
      <LeaderboardCard 
        category={mockCategory} 
        categoryInfo={mockCategoryInfo} 
      />
    )

    expect(screen.getByText('+7 more players')).toBeInTheDocument()
  })

  it('does not show additional players count when exactly 3 or fewer players', () => {
    const categoryWith3Players = {
      ...mockCategory,
      total_entries: 3,
      rankings: mockCategory.rankings.slice(0, 3)
    }

    render(
      <LeaderboardCard 
        category={categoryWith3Players} 
        categoryInfo={mockCategoryInfo} 
      />
    )

    expect(screen.queryByText('+0 more players')).not.toBeInTheDocument()
  })

  it('shows "No players yet" when no rankings', () => {
    const emptyCategory = {
      ...mockCategory,
      rankings: [],
      total_entries: 0
    }

    render(
      <LeaderboardCard 
        category={emptyCategory} 
        categoryInfo={mockCategoryInfo} 
      />
    )

    expect(screen.getByText('No players yet')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const mockOnClick = jest.fn()
    
    render(
      <LeaderboardCard 
        category={mockCategory} 
        categoryInfo={mockCategoryInfo} 
        onClick={mockOnClick}
      />
    )

    const card = screen.getByRole('button', { name: /view full leaderboard/i }).closest('div')
    fireEvent.click(card!)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('renders view full leaderboard button', () => {
    render(
      <LeaderboardCard 
        category={mockCategory} 
        categoryInfo={mockCategoryInfo} 
      />
    )

    expect(screen.getByRole('button', { name: /view full leaderboard/i })).toBeInTheDocument()
  })

  it('displays category icon', () => {
    render(
      <LeaderboardCard 
        category={mockCategory} 
        categoryInfo={mockCategoryInfo} 
      />
    )

    expect(screen.getByText('💰')).toBeInTheDocument()
  })
})