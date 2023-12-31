import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BBBlogspot',
  description: 'Blogspot for my web developement journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>BBBlogspot</title>
      <meta content='width=device-width, initial-scale=1' name="viewport" />
      <meta name="title of website" content="a place to write down your thoughts"/>
      <link rel="icon" href="/favicon.ico" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
