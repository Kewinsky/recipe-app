import type { Metadata } from 'next'

import { nunito, montserrat } from './fonts'

import ClientLoader from './_components/clientWrapper'

export const metadata: Metadata = {
   title: 'Recipe App',
   description: 'Cook everything you want',
   manifest: '/manifest.json',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={`${nunito.variable} ${montserrat.variable}`}>
            <ClientLoader>{children}</ClientLoader>
         </body>
      </html>
   )
}
