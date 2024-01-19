
import type { Metadata } from 'next'
import './styles/globals.css'

import { NavBar, Footer } from './components/organisms';
import { SocialMedia, FloatingBoxes, SpotlightSphere } from './components/atoms';
import {Preloader} from './components/atoms';



export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <NavBar />
          <main className="main_container">
              {children}
          </main>
        <Footer />
        <Preloader />

        {/* random asthetics */}
        <SocialMedia />
        {/* <SpotlightSphere /> */}
        {/* <FloatingBoxes /> */}
      </body>
    </html>
  )
}


export const metadata: Metadata = {
  title: 'Praise Oshilim',
  description: 'Welcome to my portfolio showcasing my skills and projects. I am a passionate web developer dedicated to creating innovative and user-friendly applications.',
  keywords: ['web development', 'portfolio', 'JavaScript', 'React', 'Next.js', "Typescript"],

  openGraph: {
    title: "Praise Oshilim Portfolio",
    description: 'Welcome to my portfolio showcasing my skills and projects. I am a passionate web developer dedicated to creating innovative and user-friendly applications.',
    url: 'https://praise-oshilim.vercel.app/',
    locale: 'en-us',
    type: 'website',
    // images: '/image.jpg',
    siteName: 'Praise Oshilim Portfolio',
  },

  twitter: {
    title: "Praise Oshilim Portfolio",
    description: 'Welcome to my portfolio showcasing my skills and projects. I am a passionate web developer dedicated to creating innovative and user-friendly applications.',
    // images: '/image.jpg',
    card: 'summary_large_image',
    creator: '@praise_kel',
  },
}
