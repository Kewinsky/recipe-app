'use client'

import './homeContentBlock.scss'

const HomeContentBlock = () => {
   return (
      <div className="container">
         <div className="row blockContent p-3">
            <div className="col-12 col-md-8">
               <h2 className="text-center">Search for recipes</h2>
               <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
               </p>
            </div>
            <div className="align-self-center col-12 col-md-4 text-center">
               <img
                  src={'/images/search.png'}
                  alt="..."
                  className="imgHomeSize p-1"
               />
            </div>
         </div>
         <div className="row blockContent p-3">
            <div className="align-self-center col-12 col-md-4 text-center order-2 order-md-1">
               <img
                  src={'/images/selective.png'}
                  alt="..."
                  className="imgHomeSize p-1"
               />
            </div>
            <div className="col-12 col-md-8 order-1 order-md-2">
               <h2 className="text-center">Filter them ...</h2>
               <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
               </p>
            </div>
         </div>
         <div className="row blockContent p-3">
            <div className="col-12 col-md-8">
               <h2 className="text-center">Cook!</h2>
               <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
               </p>
            </div>
            <div className="align-self-center col-12 col-md-4 text-center">
               <img
                  src={'/images/cooking.png'}
                  alt="..."
                  className="imgHomeSize p-1"
               />
            </div>
         </div>
      </div>
   )
}

export default HomeContentBlock
