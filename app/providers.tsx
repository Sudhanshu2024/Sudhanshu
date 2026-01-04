'use client'

import { ThemeProvider } from '@/components/ThemeProvider'
import CustomCursor from '@/components/CustomCursor'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CustomCursor />
      {children}
    </ThemeProvider>
  )
}
