import type { Metadata } from 'next'

import { nunito, montserrat } from './fonts'
import '@/styles/app.scss'
import Navbar from '@/components/navigation'
import Footer from '@/components/footer'

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
         </body>
      </html>
   )
}
