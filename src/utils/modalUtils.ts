/**
 * Utility functions for managing modal display logic
 */

const MODAL_STORAGE_KEY = 'tumblecraft_renovation_modal'
const COOLDOWN_HOURS = 24 // Show modal only once per day per user

interface ModalDisplayData {
  lastShown: number
  dismissCount: number
}

/**
 * Check if the renovation modal should be shown to the user
 * Implements smart logic to avoid spam
 */
export function shouldShowRenovationModal(): boolean {
  try {
    const stored = localStorage.getItem(MODAL_STORAGE_KEY)
    if (!stored) {
      return true // First time visitor
    }

    const data: ModalDisplayData = JSON.parse(stored)
    const now = Date.now()
    const cooldownMs = COOLDOWN_HOURS * 60 * 60 * 1000
    
    // Check if cooldown period has passed
    const timeSinceLastShown = now - data.lastShown
    
    // Don't show if within cooldown period
    if (timeSinceLastShown < cooldownMs) {
      return false
    }

    // Don't show too frequently for users who dismiss it a lot
    if (data.dismissCount > 5 && timeSinceLastShown < cooldownMs * 3) {
      return false
    }

    return true
  } catch {
    // If there's any error with localStorage, default to showing the modal
    return true
  }
}

/**
 * Record that the user has seen/dismissed the renovation modal
 */
export function recordModalDismissal(): void {
  try {
    const stored = localStorage.getItem(MODAL_STORAGE_KEY)
    let data: ModalDisplayData

    if (stored) {
      data = JSON.parse(stored)
      data.dismissCount += 1
    } else {
      data = { dismissCount: 1, lastShown: 0 }
    }

    data.lastShown = Date.now()
    localStorage.setItem(MODAL_STORAGE_KEY, JSON.stringify(data))
  } catch {
    // Silently fail if localStorage is not available
    console.warn('Could not save modal dismissal data')
  }
}

/**
 * Reset the modal display data (useful for testing or admin purposes)
 */
export function resetModalDisplayData(): void {
  try {
    localStorage.removeItem(MODAL_STORAGE_KEY)
  } catch {
    console.warn('Could not reset modal display data')
  }
}