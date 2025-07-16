'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface BetaFormContextType {
  isFormOpen: boolean
  openForm: () => void
  closeForm: () => void
}

const BetaFormContext = createContext<BetaFormContextType | undefined>(undefined)

export function BetaFormProvider({ children }: { children: ReactNode }) {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => setIsFormOpen(true)
  const closeForm = () => setIsFormOpen(false)

  return (
    <BetaFormContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </BetaFormContext.Provider>
  )
}

export function useBetaForm() {
  const context = useContext(BetaFormContext)
  if (context === undefined) {
    throw new Error('useBetaForm must be used within a BetaFormProvider')
  }
  return context
}