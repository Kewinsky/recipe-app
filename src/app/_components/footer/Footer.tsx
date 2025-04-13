import Link from 'next/link'
import './footer.scss'

const Footer = () => {
   return (
      <footer className="py-3 my-4 footer">
         <div className="container">
            <ul className="nav justify-content-center border-bottom borderColor pb-3 mb-3">
               <li className="nav-item">
                  <Link className="nav-link px-2 text-muted" href="/">
                     Home
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link px-2 text-muted" href="/finder">
                     Finder
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link px-2 text-muted" href="/about-us">
                     About us
                  </Link>
               </li>
            </ul>
            <p className="text-center text-muted">&copy; 2025 Recinder, Inc</p>
         </div>
      </footer>
   )
}

export default Footer
