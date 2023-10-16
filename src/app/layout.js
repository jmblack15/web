import './globals.css'
import { Montserrat } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'


const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Ciudad Renovable',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
