'use client'

import '../scrollTop/scrollTop.scss'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/fontawesome-free-solid'
import { useRef, useEffect } from 'react'

fontawesome.library.add(faArrowUp)

const ScrollTop = () => {
   const ref = useRef<HTMLButtonElement>(null)

   const scrollTop = () => {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
   }

   useEffect(() => {
      const showScrollTopButton = () => {
         if (!ref.current) {
            return
         }

         if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
         ) {
            ref.current.style.display = 'block'
         } else {
            ref.current.style.display = 'none'
         }
      }

      window.addEventListener('scroll', showScrollTopButton)

      return () => {
         window.removeEventListener('scroll', showScrollTopButton)
      }
   }, [])

   return (
      <button ref={ref} type="button" className="scrollTop" onClick={scrollTop}>
         <FontAwesomeIcon icon="arrow-up" />
      </button>
   )
}

export default ScrollTop
