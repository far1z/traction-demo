import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Traction — Your AI Growth Team',
  description: 'Traction is your AI growth team. It finds your most important users wherever they are—ads, Reddit, email, SEO—while you sleep.',
  openGraph: {
    title: 'Traction — Your AI Growth Team',
    description: 'Plug in your URL. Wake up to users.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traction — Your AI Growth Team',
    description: 'Plug in your URL. Wake up to users.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
