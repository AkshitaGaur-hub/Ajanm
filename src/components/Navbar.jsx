import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Features() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className='flex flex-col md:flex-row md:items-center justify-between px-4 py-3 gap-4 overflow-x-hidden'>
        <div className="logo">
          <Link to='/'>
            <span className='font-bold text-2xl md:text-3xl mx-2'>AJANM</span>
          </Link>

        </div>

        <div className='flex items-center justify-between w-full md:w-auto'>
          <div
            className="hamburger md:hidden cursor-pointer z-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </div>

          <ul
            className={`
    navlinks
    ${open ? "active" : ""}
    flex flex-col md:flex-row
    gap-6
    items-center
    justify-center md:justify-start
  `}
          >
            <li className='cursor-pointer hover:font-bold transition-all duration-300'>
              <Link to="/features">Features</Link>
            </li>
            <Link to='/ajanmapp'><li className='cursor-pointer hover:font-bold transition-all duration-300'>Ajanm App</li></Link>
            <Link to='/ajanmprogram'><li className='cursor-pointer hover:font-bold transition-all duration-300'>Programs</li></Link>
            <li className='cursor-pointer hover:font-bold transition-all duration-300'>
              <a href="#testimonials">Testimonials</a>
            </li>
            <Link to='/aboutus'><li className='cursor-pointer hover:font-bold transition-all duration-300'>About Us</li></Link>
            <Link to='/blogs'><li className='cursor-pointer hover:font-bold transition-all duration-300'>Blogs</li></Link>
          </ul>
          <Link
            to='/subscribe'
            className="mx-auto md:mx-0"
          >
            <button className="color border-radius padding flex align-items">
              Subscribe Now
            </button>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Features