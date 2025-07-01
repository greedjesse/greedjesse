import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "greedjesse - Unity Asset Developer",
  description:
    "Unity asset developer creating powerful tools and systems for game developers. Featured asset: Advanced Inventory System.",
  keywords: ["greedjesse", "unity assets", "unity developer", "game development", "inventory system", "unity tools"],
  authors: [{ name: "greedjesse" }],
  creator: "greedjesse",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://greedjesse.com",
    title: "greedjesse - Unity Asset Developer",
    description:
      "Unity asset developer creating powerful tools and systems for game developers. Featured asset: Advanced Inventory System.",
    siteName: "greedjesse",
  },
  twitter: {
    card: "summary_large_image",
    title: "greedjesse - Unity Asset Developer",
    description:
      "Unity asset developer creating powerful tools and systems for game developers. Featured asset: Advanced Inventory System.",
    creator: "@greedjesse",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="greedjesse-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
