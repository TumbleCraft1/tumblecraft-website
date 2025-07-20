'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { LeaderboardAPI, LeaderboardsResponse, LeaderboardCategory } from '@/lib/leaderboard-api'
import { LEADERBOARD_CONFIG } from '@/lib/config'

interface UseLeaderboardDataOptions {
  autoRefresh?: boolean
  refreshInterval?: number
  category?: string
}

interface UseLeaderboardDataResult {
  data: LeaderboardsResponse | LeaderboardCategory | null
  loading: boolean
  error: string | null
  refreshing: boolean
  lastUpdated: Date | null
  refresh: () => Promise<void>
  serverStatus: 'online' | 'offline' | 'unknown'
}

export function useLeaderboardData(options: UseLeaderboardDataOptions = {}): UseLeaderboardDataResult {
  const {
    autoRefresh = LEADERBOARD_CONFIG.ENABLE_AUTO_REFRESH,
    refreshInterval = LEADERBOARD_CONFIG.REFRESH_INTERVAL,
    category
  } = options

  const [data, setData] = useState<LeaderboardsResponse | LeaderboardCategory | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshing, setRefreshing] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [serverStatus, setServerStatus] = useState<'online' | 'offline' | 'unknown'>('unknown')
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const mountedRef = useRef(true)

  const fetchData = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true)
      } else {
        setLoading(true)
      }
      setError(null)

      let response: LeaderboardsResponse | LeaderboardCategory
      
      if (category) {
        response = await LeaderboardAPI.getCategoryLeaderboard(category)
      } else {
        response = await LeaderboardAPI.getAllLeaderboards()
      }

      if (mountedRef.current) {
        setData(response)
        setLastUpdated(new Date())
        setServerStatus('online')
      }
    } catch (err) {
      if (mountedRef.current) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch data'
        setError(errorMessage)
        setServerStatus('offline')
        
        if (LEADERBOARD_CONFIG.DEV_MODE && LEADERBOARD_CONFIG.LOG_LEVEL === 'debug') {
          console.error('Leaderboard fetch error:', err)
        }
      }
    } finally {
      if (mountedRef.current) {
        setLoading(false)
        setRefreshing(false)
      }
    }
  }, [category])

  const refresh = useCallback(async () => {
    await fetchData(true)
  }, [fetchData])

  // Check server status periodically
  const checkServerStatus = useCallback(async () => {
    try {
      const status = await LeaderboardAPI.getServerStatus()
      if (mountedRef.current) {
        setServerStatus(status.status)
      }
    } catch {
      if (mountedRef.current) {
        setServerStatus('offline')
      }
    }
  }, [])

  // Initial data fetch
  useEffect(() => {
    fetchData()
    checkServerStatus()
  }, [fetchData, checkServerStatus])

  // Auto-refresh setup
  useEffect(() => {
    if (autoRefresh && LEADERBOARD_CONFIG.ENABLE_REAL_TIME_UPDATES) {
      intervalRef.current = setInterval(() => {
        if (!loading && !refreshing) {
          fetchData(true)
        }
      }, refreshInterval)

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }
  }, [autoRefresh, refreshInterval, fetchData, loading, refreshing])

  // Status check interval (every 30 seconds)
  useEffect(() => {
    const statusInterval = setInterval(checkServerStatus, 30000)
    
    return () => clearInterval(statusInterval)
  }, [checkServerStatus])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      mountedRef.current = false
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return {
    data,
    loading,
    error,
    refreshing,
    lastUpdated,
    refresh,
    serverStatus
  }
}