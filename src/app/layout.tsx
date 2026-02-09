import './globals.css';
import './lib/fontawesome';
import { Inter } from 'next/font/google';
import { createContext } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
type Theme = {
  colors: {
    primary: string
    secondary: string
  }
}

const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d"
  }
}

const  ThemeContext = createContext<Theme>(defaultTheme)

export const metadata = {
  title: "BuildTrack",
  description: "Track your learning. Project management tool for software development teams",
}

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeContext.Provider value={defaultTheme}> 

      
      <body className={inter.variable}>{children}</body>
      </ThemeContext.Provider>
    </html>
  )
}