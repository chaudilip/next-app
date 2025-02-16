"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider } from "@/app/providers/theme-provider/theme.provider";
import { ToastProvider } from "@/app/providers/toast-provider/toast.provider";
export function Providers({ children }: { readonly children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <JotaiProvider>
                <ThemeProvider>
                    <ToastProvider />
                    {children}
                </ThemeProvider>
            </JotaiProvider>
        </ClerkProvider>
    )
}