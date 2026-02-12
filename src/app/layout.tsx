import { ClerkProvider } from '@clerk/nextjs';


import './globals.css';
import './lib/fontawesome';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';

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
      

      
      <body className={inter.variable}>
        <ThemeProvider> 
        <Navigation/>
        {children}
         </ThemeProvider>
         </body>

     
    </html>
    </ClerkProvider>
  )
}