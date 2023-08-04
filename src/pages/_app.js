// import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { Inter, Nunito, Public_Sans} from 'next/font/google'
import { useState } from 'react';
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
})

const nunito = Nunito(
  {subsets: ['latin'],
  variants: ['100', '200', '300', '400', '500', '600', '700', '800', '900',],
  variable: '--font-nunito',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
})

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
})
 

export default function App({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  return (
    <main className={`${nunito.variable} ${publicSans.variable} ${inter.variable}  font-sans`}>
    {/* <NavBar open={open} setOpen={setOpen} /> */}
    <Component {...pageProps} />
    </main>
  )
}
