import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as Baijamjuree } from 'next/font/google'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SigIn'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'


const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baijamjuree = Baijamjuree({ 
  subsets: ['latin'], 
  weight: '700', 
  variable: '--font-baijamjuree',
})

export const metadata = {
  title: 'Cápsula do tempo',
  description: 'Uma cápsula do tempo construída com React, ReactNative, Next.Js, Tailwind e Typescript',
}

export default function RootLayout({children}:{children: React.ReactNode}) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans text-gray-100 bg-gray-900`}>
        <main className="grid grid-cols-2 min-h-screen">
            {/* Left */}
            <div className="relative flex flex-col item-start py-[50px]
              justify-between px-16 overflow-hidden bg-[url(../assets/stars-bg.svg)] bg-cover"
            >
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] 
              -translate-1/2 translate-x-1/2 bg-purple-700 opacity-50 rounded-full blur-full"
            />
            {/* Stripes */}
            <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />
            {/* Sign In */}
            {isAuthenticated ? <Profile  /> : <SignIn />}
            {/* Hero */}
            <Hero />
            {/* Copyright */}
            <Copyright />

          </div>
          {/* Right */}
          <div className="flex flex-col max-h-screen overflow-y-scroll bg-[url(../assets/stars-bg.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
