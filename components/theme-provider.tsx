"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Force a re-render on the client to ensure theme is applied correctly
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Ensure theme is properly initialized from localStorage
  React.useEffect(() => {
    if (mounted) {
      // Get stored theme from localStorage
      const storedTheme = localStorage.getItem("theme")

      // If there's a stored theme, apply it
      if (storedTheme) {
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(storedTheme)
      }
    }
  }, [mounted])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
