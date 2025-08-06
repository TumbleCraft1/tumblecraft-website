export const LEADERBOARD_CONFIG = {
  API_BASE_URL: 'http://n1336.pufferfish.host:25646',
  PROXY_ENABLED: process.env.NEXT_PUBLIC_ENABLE_CORS_PROXY === 'true',
  REFRESH_INTERVAL: 5 * 60 * 1000, // 5 minutes in milliseconds
  REQUEST_TIMEOUT: 15000, // 15 seconds (increased for Cloudflare Workers)
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000, // 1 second
  HEALTH_CHECK_TIMEOUT: 5000, // 5 seconds for health checks
  
  // Feature flags
  ENABLE_REAL_TIME_UPDATES: true,
  ENABLE_AUTO_REFRESH: true,
  ENABLE_ERROR_REPORTING: false,
  
  // UI settings
  SKELETON_COUNT: 6,
  ANIMATION_DELAY: 100, // milliseconds between card animations
  
  // Cache settings
  CACHE_DURATION: 2 * 60 * 1000, // 2 minutes
  
  // Development settings
  DEV_MODE: process.env.NODE_ENV === 'development',
  LOG_LEVEL: process.env.NODE_ENV === 'development' ? 'debug' : 'error'
}

export const FALLBACK_DATA = {
  leaderboards: []
}

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Unable to connect to the server. Please check your internet connection.',
  TIMEOUT_ERROR: 'Request timed out. The server may be busy.',
  SERVER_ERROR: 'Server error occurred. Please try again later.',
  NOT_FOUND: 'Leaderboard data not found.',
  UNKNOWN_ERROR: 'An unexpected error occurred.'
}