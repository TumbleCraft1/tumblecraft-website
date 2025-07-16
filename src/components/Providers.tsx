'use client'

import { BetaFormProvider, useBetaForm } from '@/context/BetaFormContext'
import BetaApplicationForm from '@/components/BetaApplicationForm'

function ProvidersContent({ children }: { children: React.ReactNode }) {
  const { isFormOpen, closeForm } = useBetaForm()
  
  return (
    <>
      {children}
      <BetaApplicationForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  )
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BetaFormProvider>
      <ProvidersContent>{children}</ProvidersContent>
    </BetaFormProvider>
  )
}