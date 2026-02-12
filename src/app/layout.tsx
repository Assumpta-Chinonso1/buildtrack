import {ClerkProvider} from '@clerk/nextjs';


import './globals.css';
import './lib/fontawesome';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


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
    <ClerkProvider>
    <html lang="en">
      <ThemeProvider> 

      
      <body className={inter.variable}>{children}</body>
      </ThemeProvider>
    </html>
    </ClerkProvider>
  )
}