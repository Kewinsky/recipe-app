import type { Metadata } from 'next'

import 'bootstrap/dist/css/bootstrap.css'
import { nunito, montserrat } from './fonts'
import '@/styles/app.scss'

import Navbar from '@/components/navigation'
import Footer from '@/components/footer'
import BootstrapClient from './_components/bootstrap'

export const metadata: Metadata = {
   title: 'Recipe App',
   description: 'Cook everything you want',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={`${nunito.variable} ${montserrat.variable}`}>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BootstrapClient />
         </body>
      </html>
   )
}
