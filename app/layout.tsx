import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'NervePuppy - AI Agent Collection for CKB Community',
  description: 'An AI Agent Collection Born for the CKB Community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white dark:bg-gray-900">
        {children}
      </body>
    </html>
  )
} 