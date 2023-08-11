import Image from 'next/image'
import { Inter, Nunito } from 'next/font/google'
import Hero from '@/components/hero'
import NavBar from '@/components/NavBar'
import { useState } from 'react'
import Footer from '@/components/footer'
import AboutMe from '@/components/aboutMe'
import Animation2 from '@/components/animation/indexOld'
import Animation from '@/components/animation/index'

const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito(
  {subsets: ['latin'],
  variants: ['100', '200', '300', '400', '500', '600', '700', '800', '900',],
  variable: '--font-nunito',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
})
 

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main
    className={`w-full  h-[100%]  ${nunito.className}`}>
    <NavBar open={open} setOpen={setOpen} />
    <Hero/>
    <Animation/>
    <AboutMe/>
    <Footer/>
  </main>
  )
}
