import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'

import { NavBar, Footer } from './components/organisms';
import { SocialMedia, FloatingBoxes } from './components/atoms';


export const metadata: Metadata = {
  title: 'Oshilim Praise',
  // description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="main_container">
          {children}
        </main>
        <Footer />

        {/* random asthetics */}
        <SocialMedia />
        <FloatingBoxes />
      </body>
    </html>
  )
}
