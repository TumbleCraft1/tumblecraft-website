import { render, screen } from '@testing-library/react'
import PlayerRanking from '@/components/leaderboards/PlayerRanking'
import { LeaderboardPlayer } from '@/lib/leaderboard-api'

const mockPlayer: LeaderboardPlayer = {
  position: 1,
  player_name: 'TestPlayer',
  player_uuid: 'test-uuid-1234-5678-9abc-def0',
  value: '1000',
  formatted_value: '$1,000.00'
}

describe('PlayerRanking', () => {
  it('renders player information correctly', () => {
    render(<PlayerRanking player={mockPlayer} rank={1} />)

    expect(screen.getByText('TestPlayer')).toBeInTheDocument()
    expect(screen.getByText('UUID: test-uui...')).toBeInTheDocument()
    expect(screen.getByText('$1,000.00')).toBeInTheDocument()
  })

  it('displays correct rank icon for top 3 positions', () => {
    const { rerender } = render(<PlayerRanking player={mockPlayer} rank={1} />)
    expect(screen.getByText('🥇')).toBeInTheDocument()

    rerender(<PlayerRanking player={mockPlayer} rank={2} />)
    expect(screen.getByText('🥈')).toBeInTheDocument()

    rerender(<PlayerRanking player={mockPlayer} rank={3} />)
    expect(screen.getByText('🥉')).toBeInTheDocument()
  })

  it('displays numeric rank for positions beyond top 3', () => {
    render(<PlayerRanking player={mockPlayer} rank={4} />)
    expect(screen.getByText('#4')).toBeInTheDocument()
  })

  it('displays player initial in avatar', () => {
    render(<PlayerRanking player={mockPlayer} rank={1} />)
    expect(screen.getByText('T')).toBeInTheDocument() // First letter of TestPlayer
  })

  it('handles long player names with truncation', () => {
    const longNamePlayer = {
      ...mockPlayer,
      player_name: 'VeryLongPlayerNameThatShouldBeTruncated'
    }

    render(<PlayerRanking player={longNamePlayer} rank={1} />)
    expect(screen.getByText('VeryLongPlayerNameThatShouldBeTruncated')).toBeInTheDocument()
  })

  it('shows truncated UUID', () => {
    render(<PlayerRanking player={mockPlayer} rank={1} />)
    // UUID should be truncated to first 8 characters + "..."
    expect(screen.getByText('UUID: test-uui...')).toBeInTheDocument()
  })

  it('applies correct CSS classes for rank colors', () => {
    const { rerender } = render(<PlayerRanking player={mockPlayer} rank={1} />)
    
    let rankElement = screen.getByText('🥇')
    expect(rankElement).toHaveClass('text-accent')

    rerender(<PlayerRanking player={mockPlayer} rank={2} />)
    rankElement = screen.getByText('🥈')
    expect(rankElement).toHaveClass('text-primary')

    rerender(<PlayerRanking player={mockPlayer} rank={3} />)
    rankElement = screen.getByText('🥉')
    expect(rankElement).toHaveClass('text-accent-dark')

    rerender(<PlayerRanking player={mockPlayer} rank={4} />)
    rankElement = screen.getByText('#4')
    expect(rankElement).toHaveClass('text-foreground-muted')
  })

  it('handles different formatted values', () => {
    const playtimePlayer = {
      ...mockPlayer,
      formatted_value: '10h 30m'
    }

    render(<PlayerRanking player={playtimePlayer} rank={1} />)
    expect(screen.getByText('10h 30m')).toBeInTheDocument()
  })

  it('handles player name with special characters', () => {
    const specialPlayer = {
      ...mockPlayer,
      player_name: 'Player_123!'
    }

    render(<PlayerRanking player={specialPlayer} rank={1} />)
    expect(screen.getByText('Player_123!')).toBeInTheDocument()
    expect(screen.getByText('P')).toBeInTheDocument() // First letter for avatar
  })
})