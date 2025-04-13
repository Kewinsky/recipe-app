import './navbar.scss'
import Link from 'next/link'

const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-light">
         <div className="container">
            <Link className="navbar-brand" href="/">
               <img src={'/icons/favicon.ico'} alt="Logo" className="logo" />
               Recinder
            </Link>
            <button
               className="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarNavAltMarkup"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNavAltMarkup"
               aria-controls="navbarNavAltMarkup"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav">
                  <Link className="nav-item nav-link" href="/">
                     Home
                  </Link>
                  <Link className="nav-item nav-link" href="/finder">
                     Finder
                  </Link>
                  <Link className="nav-item nav-link" href="/about-us">
                     About us
                  </Link>
               </div>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
