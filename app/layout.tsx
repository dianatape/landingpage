import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://dianatape.com'),
  title: 'Diana Tape - Coach Professionnelle Certifiée | Luxembourg',
  description: 'Coach familial certifiée, formatrice anti-racisme et spécialiste en intelligence émotionnelle au Luxembourg. Découvrez mes services pour une vie plus épanouie et harmonieuse.',
  keywords: 'coach familial, anti-racisme, Luxembourg, formation, intelligence émotionnelle, EQ 2.0, ICICOACH',
  authors: [{ name: 'Diana Tape' }],
  creator: 'Diana Tape',
  openGraph: {
    title: 'Diana Tape - Coach Professionnelle Certifiée',
    description: 'Coach familial certifiée, formatrice anti-racisme et spécialiste en intelligence émotionnelle au Luxembourg.',
    url: 'https://dianatape.com',
    siteName: 'Diana Tape Coaching',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diana Tape - Coach Professionnelle Certifiée',
    description: 'Coach familial certifiée, formatrice anti-racisme et spécialiste en intelligence émotionnelle au Luxembourg.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 