import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css';
import { Rubik } from 'next/font/google'

const rubik = Rubik({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (<main className={rubik.className}>
    <Component {...pageProps} />
  </main>)
}
