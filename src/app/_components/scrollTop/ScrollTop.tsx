'use client'

import '../scrollTop/scrollTop.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useRef, useEffect } from 'react'

const ScrollTop = () => {
   const ref = useRef<HTMLButtonElement>(null)

   const scrollTop = () => {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
   }

   useEffect(() => {
      const showScrollTopButton = () => {
         if (!ref.current) return

         const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop
         ref.current.style.display = scrollTop > 20 ? 'block' : 'none'
      }

      window.addEventListener('scroll', showScrollTopButton)
      return () => window.removeEventListener('scroll', showScrollTopButton)
   }, [])

   return (
      <button ref={ref} type="button" className="scrollTop" onClick={scrollTop}>
         <FontAwesomeIcon icon={faArrowUp} />
      </button>
   )
}

export default ScrollTop
