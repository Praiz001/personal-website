import type { Metadata } from 'next'
import './styles/globals.css'

import { NavBar, Footer } from './components/organisms';
import { SocialMedia, FloatingBoxes,SpotlightSphere } from './components/atoms';



export const metadata: Metadata = {
  title: 'Oshilim Praise',
  description: '',
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
        <SpotlightSphere />
        {/* <FloatingBoxes /> */}
      </body>
    </html>
  )
}
