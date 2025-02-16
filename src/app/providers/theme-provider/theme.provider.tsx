"use client";

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children }: { readonly children: React.ReactNode }) {
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="opacity-0">{children}</div>
    }
    return <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>{children}</NextThemesProvider>
}