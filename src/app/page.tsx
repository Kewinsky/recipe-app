'use client'

import Carousel from '@/components/carousel'
import HomeContentBlock from '@/components/homeContentBlock'
import PwaActions from './_components/pwaActions'

export default function Page() {
   return (
      <>
         <Carousel />
         <HomeContentBlock />
         <PwaActions />
      </>
   )
}
