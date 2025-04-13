import { Montserrat, Nunito } from 'next/font/google'

export const nunito = Nunito({
   display: 'swap',
   style: ['normal', 'italic'],
   subsets: ['latin'],
   variable: '--font-nunito',
   weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})
export const montserrat = Montserrat({
   display: 'swap',
   style: ['normal', 'italic'],
   subsets: ['latin'],
   variable: '--font-montserrat',
   weight: ['100', '300', '400', '700', '900'],
})
