'use client'

import '@/styles/pages/aboutUs.scss'
import { useState, useMemo } from 'react'
import ExampleText from '@/components/additional'
import CounterButton from '@/components/counterButton'

const AboutUs = () => {
   const [textCounter, setTextCounter] = useState(1)

   const articles = useMemo(
      () => Array.from({ length: textCounter }),
      [textCounter],
   )

   return (
      <section className="container my-5 px-md-0 px-4">
         <div className="row mb-5">
            <div className="col-md-6 pe-md-5">
               <h2 className="mb-4"> About us</h2>
               <ExampleText />
               <span className="buttonsWrapper">
                  <CounterButton
                     isNegative={true}
                     counter={textCounter}
                     setCounter={setTextCounter}
                  />
                  <CounterButton
                     counter={textCounter}
                     setCounter={setTextCounter}
                  />
               </span>
               <span className="ms-3">{`${textCounter} articles`}</span>
            </div>
            <div className="col-md-6 d-flex align-items-center align-items-xl-start mt-3 mt-md-0">
               <img src={'/images/vegetables.jpg'} alt="vegetables" />
            </div>
         </div>
         {articles.map((_, i) => (
            <ExampleText maxLength={815} key={i} />
         ))}
      </section>
   )
}

export default AboutUs
