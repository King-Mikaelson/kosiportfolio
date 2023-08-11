import Image from 'next/image'
import { Inter, Nunito } from 'next/font/google'
import Hero from '@/components/hero'
import NavBar from '@/components/NavBar'
import { useState } from 'react'
import Footer from '@/components/footer'
import AboutMe from '@/components/aboutMe'
import Animation from '@/components/animation'
import Animation2 from '@/components/animation/Animation2'

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
    className={`w-full   ${nunito.className}`}>
    <div className='backgroundPic h-full'>
    <NavBar open={open} setOpen={setOpen} />
    <Hero/>
    </div>
    {/* <Animation/> */}
    <Animation2/>
    <AboutMe/>
    <Footer/>
  </main>
  )
}
