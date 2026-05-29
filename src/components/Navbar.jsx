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
          <span className='font-bold text-2xl md:text-3xl'>
            AJANM
          </span>
        </Link>

        <div className='flex items-center gap-4 md:w-auto'>

          {/* HAMBURGER */}
          <div
            className="hamburger md:hidden cursor-pointer z-50"
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

        md:static
        md:h-auto
        md:w-auto
        md:bg-transparent
        md:shadow-none
        md:flex-row
        md:gap-6
        md:p-0
        md:translate-x-0
      `}
          >

            <Link to='/' className ='hover:underline'><li>Home</li></Link>

            <li>
              <Link to="/features" className ='hover:underline'>Features</Link>
            </li>

            <Link to='/ajanmapp' className ='hover:underline'><li>Ajanm App</li></Link>

            <Link to='/ajanmprogram' className ='hover:underline'><li>Programs</li></Link>

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
              className="md:hidden"
            >
              <button className="w-full bg-orange-500 text-white py-3 rounded-xl shadow-md">
                Subscribe Now
              </button>
            </Link>
          </ul>

          {/* DESKTOP ONLY SUBSCRIBE */}
          <Link
            to='/subscribe'
            className="hidden md:block"
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