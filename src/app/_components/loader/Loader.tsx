import './loader.scss'

const Loader = ({ size = 'md' }) => {
   return (
      <div className="text-center loader my-4" key={0}>
         <div
            className={`spinner-border loaderCircle ${size}`}
            role="status"
         ></div>
      </div>
   )
}

export default Loader
