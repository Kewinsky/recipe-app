'use client'

import './carousel.scss'

const Carousel = () => {
   return (
      <div
         id="carouselExampleCaptions"
         className="carousel carousel-dark slide mb-5"
         data-bs-ride="carousel"
      >
         <div className="carousel-indicators">
            <button
               type="button"
               data-bs-target="#carouselExampleCaptions"
               data-bs-slide-to="0"
               className="active"
               aria-current="true"
               aria-label="Slide 1"
            ></button>
            <button
               type="button"
               data-bs-target="#carouselExampleCaptions"
               data-bs-slide-to="1"
               aria-label="Slide 2"
            ></button>
            <button
               type="button"
               data-bs-target="#carouselExampleCaptions"
               data-bs-slide-to="2"
               aria-label="Slide 3"
            ></button>
         </div>
         <div className="carousel-inner">
            <div className="carousel-item active imgHeight">
               <img
                  src={'/images/pakaos.jpeg'}
                  className="d-block w-100"
                  alt="..."
               />
               <div className="carousel-caption d-none d-md-block contentCarousel">
                  <h4>Search for Recipes</h4>
                  <p className="text-center">
                     Nullam efficitur nunc sit risus id ex amet ornare bibendum.
                  </p>
               </div>
            </div>
            <div className="carousel-item imgHeight">
               <img
                  src={'/images/background.webp'}
                  className="d-block w-100"
                  alt="..."
               />
               <div className="carousel-caption d-none d-md-block contentCarousel">
                  <h4>Filtering & Sorting</h4>
                  <p className="text-center">
                     Orci varius natoque penatibus et magnis dis parturient
                     montes.
                  </p>
               </div>
            </div>
            <div className="carousel-item imgHeight">
               <img
                  src={'/images/menu.jpeg'}
                  className="d-block w-100"
                  alt="..."
               />
               <div className="carousel-caption d-none d-md-block contentCarousel">
                  <h4>Choose Recipe and Cook!</h4>
                  <p className="text-center">
                     Donec ut risus id ex faucibus bibendum a dictum erat
                     condimentum.
                  </p>
               </div>
            </div>
         </div>
         <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
         >
            <span
               className="carousel-control-prev-icon"
               aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
         </button>
         <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
         >
            <span
               className="carousel-control-next-icon"
               aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
         </button>
      </div>
   )
}

export default Carousel
