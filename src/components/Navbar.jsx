import { Link } from "react-router-dom";

function Features() {
  return (
    <>
      <nav className='flex flex-col md:flex-row md:items-center justify-between p-4 gap-4'>
        <div className="logo">
          <Link to='/'>
            {/* <img
              src="https://ajanm.ai/wp-content/uploads/2024/04/Ajnk.png"
              alt="Ajanm Logo"
              className="max-h-[50px]"
            /> */}
            <span className='font-bold text-2xl md:text-3xl mx-2'>AJANM</span>
          </Link>

        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto'>
          <ul className='flex flex-wrap gap-3 md:gap-6 items-center justify-center md:justify-start'>
            <li className='cursor-pointer hover:font-bold transition-all duration-300'>
              <Link to="/features">Features</Link>
            </li>
            <Link to='/ajanmapp'><li className='cursor-pointer hover:font-bold transition-all duration-300'>Ajanm App</li></Link>
            <Link to='/ajanmprogram'><li className='cursor-pointer hover:font-bold transition-all duration-300'>Programs</li></Link>
            <li className='cursor-pointer hover:font-bold transition-all duration-300'>
              <a href="#testimonials">Testimonials</a>
            </li>
            <Link to=''><li className='cursor-pointer hover:font-bold transition-all duration-300'>About Us</li></Link>
            <Link to=''><li className='cursor-pointer hover:font-bold transition-all duration-300'>Blogs</li></Link>
          </ul>
          <button className="color border-radius padding flex align-items">Subscribe Now</button>
        </div>
      </nav>
    </>
  )
}

export default Features