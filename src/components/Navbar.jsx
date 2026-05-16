import React from "react";

function Features() {
  return (
    <>

      <nav className='flex justify-between p-4'>
        <div className="logo">

          <span className='font-bold text-xl mx-8'>ajnam</span>
        </div>
        <ul className='flex gap-6 mx-8'>
          <li className='cursor-pointer hover:font-bold transition-all duration-300'>Features</li>
          <li className='cursor-pointer hover:font-bold transition-all duration-300'>Ajnam App</li>
          <li className='cursor-pointer hover:font-bold transition-all duration-300'>Programs</li>
          <li className='cursor-pointer hover:font-bold transition-all duration-300'>Testimonals</li>
          <li className='cursor-pointer hover:font-bold transition-all duration-300'>About Us</li>
          <li className='cursor-pointer hover:font-bold transition-all duration-300'>Blogs</li>
          <button className="color border-radius padding flex align-items">Subscribe Now </button>
        </ul>
      </nav>
    </>
  )
}

export default Features