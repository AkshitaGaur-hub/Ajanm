function Features() {
  return (
    <>
      <nav className='flex flex-col md:flex-row md:items-center justify-between p-4 gap-4'>
        <div className="logo">
          <span className='font-bold text-2xl md:text-3xl mx-2'>ajanm</span>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto'>
          <ul className='flex flex-wrap gap-3 md:gap-6 items-center justify-center md:justify-start'>
            <li className='cursor-pointer hover:font-bold transition-all duration-300'>Features</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-300'>Ajnam App</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-300'>Programs</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-300'>Testimonals</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-300'>About Us</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-300'>Blogs</li>
          </ul>
          <button className="color border-radius padding flex align-items">Subscribe Now</button>
        </div>
      </nav>
    </>
  )
}

export default Features