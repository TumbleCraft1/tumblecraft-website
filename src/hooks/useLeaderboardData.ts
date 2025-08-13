'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { LeaderboardAPI, LeaderboardsResponse, LeaderboardCategory, PaginatedLeaderboardCategory } from '@/lib/leaderboard-api'
import { LEADERBOARD_CONFIG } from '@/lib/config'

interface UseLeaderboardDataOptions {
  autoRefresh?: boolean
  refreshInterval?: number
  category?: string
  usePagination?: boolean
  page?: number
  limit?: number
}

interface UseLeaderboardDataResult {
  data: LeaderboardsResponse | LeaderboardCategory | PaginatedLeaderboardCategory | null
  loading: boolean
  error: string | null
  refreshing: boolean
  lastUpdated: Date | null
  refresh: () => Promise<void>
  serverStatus: 'online' | 'offline' | 'unknown'
  // Pagination-specific fields
  currentPage?: number
  totalPages?: number
  hasNextPage?: boolean
  hasPreviousPage?: boolean
  setPage?: (page: number) => void
}

export function useLeaderboardData(options: UseLeaderboardDataOptions = {}): UseLeaderboardDataResult {
  const {
    autoRefresh = LEADERBOARD_CONFIG.ENABLE_AUTO_REFRESH,
    refreshInterval = LEADERBOARD_CONFIG.REFRESH_INTERVAL,
    category,
    usePagination = false,
    page: initialPage = 1,
    limit = 25
  } = options

  const [data, setData] = useState<LeaderboardsResponse | LeaderboardCategory | PaginatedLeaderboardCategory | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshing, setRefreshing] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [serverStatus, setServerStatus] = useState<'online' | 'offline' | 'unknown'>('unknown')
  const [currentPage, setCurrentPage] = useState(initialPage)
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const mountedRef = useRef(true)
  const currentCategoryRef = useRef<string | undefined>(undefined)
  const requestInProgressRef = useRef<boolean>(false)

  // Single fetch function to handle all data fetching
  const fetchData = useCallback(async (isRefresh = false, pageToFetch?: number) => {
    // Prevent concurrent requests for the same category
    if (requestInProgressRef.current && !isRefresh) {
      return
    }
    
    // Check if we already have fresh data for this category and page
    const categoryChanged = currentCategoryRef.current !== category
    const pageChanged = usePagination && pageToFetch !== undefined && pageToFetch !== currentPage
    
    if (!isRefresh && !categoryChanged && !pageChanged && data) {
      return
    }
    
    currentCategoryRef.current = category
    requestInProgressRef.current = true
    
    // Update current page if provided
    const targetPage = pageToFetch ?? currentPage
    
    try {
      setError(null)
      
      if (isRefresh) {
        setRefreshing(true)
      } else {
        setLoading(true)
      }

      let response: LeaderboardsResponse | LeaderboardCategory | PaginatedLeaderboardCategory
      
      if (category) {
        if (usePagination) {
          response = await LeaderboardAPI.getCategoryLeaderboardPaginated(category, targetPage, limit)
        } else {
          response = await LeaderboardAPI.getCategoryLeaderboard(category)
        }
      } else {
        response = await LeaderboardAPI.getAllLeaderboards()
      }

      // Always update state - let React handle stale updates
      setData(response)
      setLastUpdated(new Date())
      setServerStatus('online')
      
      // Update current page for paginated requests
      if (usePagination && pageToFetch !== undefined) {
        setCurrentPage(pageToFetch)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch data'
      if (mountedRef.current) {
        setError(errorMessage)
        setServerStatus('offline')
      }
    } finally {
      // Always clear loading states
      setLoading(false)
      setRefreshing(false)
      requestInProgressRef.current = false
    }
  }, [category, data, usePagination, currentPage, limit])

  const refresh = useCallback(async () => {
    await fetchData(true)
  }, [fetchData])

  const setPage = useCallback(async (page: number) => {
    await fetchData(false, page)
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

  // Main effect - triggers when category changes
  useEffect(() => {
    fetchData(false)
  }, [fetchData, category])

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
    mountedRef.current = true
    
    return () => {
      mountedRef.current = false
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Extract pagination info from data if it's a paginated response
  const paginatedData = data && 'page' in data ? data as PaginatedLeaderboardCategory : null

  return {
    data,
    loading,
    error,
    refreshing,
    lastUpdated,
    refresh,
    serverStatus,
    // Pagination fields
    currentPage: usePagination ? currentPage : undefined,
    totalPages: paginatedData?.total_pages,
    hasNextPage: paginatedData?.has_next_page,
    hasPreviousPage: paginatedData?.has_previous_page,
    setPage: usePagination ? setPage : undefined
  }
}