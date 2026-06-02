import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import logo from "../assets/images/logo.png"

function Features() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className='flex items-center justify-between px-4 py-3 overflow-x-hidden'>

        {/* LOGO */}
        <Link to='/' className="flex items-center gap-2">
          <img src={logo} alt="" className="go" />
          <span className='font-bold text-2xl lg:text-3xl'>
            AJANM
          </span>
        </Link>

        <div className='flex items-center gap-4 lg:w-auto'>

          {/* HAMBURGER */}
          <div
            className="hamburger lg:hidden cursor-pointer z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </div>

          {/* NAV LINKS */}
          <ul
            className={`
        fixed top-0 left-0
        h-screen w-[75%]
        bg-white shadow-2xl
        flex flex-col
        gap-8
        pt-24
        px-8
        text-lg
        font-medium
        transition-all duration-500
        z-40

        ${open ? "translate-x-0" : "-translate-x-full"}

        lg:static
        lg:h-auto
        lg:w-auto
        lg:max-w-none
        lg:bg-transparent
        lg:shadow-none
        lg:flex-row
        lg:gap-6
        lg:p-0
        lg:translate-x-0
      `}
          >

            <Link to='/' className='home hover:underline lg:hidden'><li>Home</li></Link>

            <li>
              <Link to="/features" className='hover:underline'>Features</Link>
            </li>

            <Link to='/ajanmapp' className='hover:underline'><li>Ajanm App</li></Link>

            <Link to='/ajanmprogram' className='hover:underline'><li>Programs</li></Link>

            <li className='hover:underline'>
              <HashLink smooth to="/#testimonials">
                Testimonials
              </HashLink>
            </li>

            <Link to='/aboutus' className='hover:underline'><li>About Us</li></Link>

            <Link to='/blogs' className='hover:underline'><li>Blogs</li></Link>

            {/* MOBILE ONLY SUBSCRIBE */}
            <Link
              to='/subscribe'
              className="lg:hidden"
            >
              <button className="w-full bg-orange-500 text-white py-3 rounded-xl shadow-lg">
                Subscribe Now
              </button>
            </Link>
          </ul>

          {/* DESKTOP ONLY SUBSCRIBE */}
          <Link
            to='/subscribe'
            className="hidden lg:block"
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