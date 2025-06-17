'use client'
import '@/styles/app.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../navigation'
import Footer from '../footer'
import BootstrapClient from '../bootstrap'
import { useEffect } from 'react'

export default function ClientWrapper({
   children,
}: {
   children: React.ReactNode
}) {
   useEffect(() => {
      if ('serviceWorker' in navigator) {
         navigator.serviceWorker.register('/sw.js').then(() => {
            console.log('Service Worker zarejestrowany!')
         })
      }
   }, [])

   return (
      <>
         <Navbar />
         <main>{children}</main>
         <Footer />
         <BootstrapClient />
      </>
   )
}
