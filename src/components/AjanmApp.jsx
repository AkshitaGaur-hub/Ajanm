import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Features.css'
import { IoMdCheckbox } from "react-icons/io";


const AjanmApp = () => {
    return (
        <>
            <Navbar />
            <div className="ajnamapp">
                <div className="lhs w-[50%]">
                    <img
                        width="480px"
                        height="550px"
                        src="https://ajanm.ai/wp-content/uploads/2025/05/download-ajanm-app.png"
                        className="scale-with-grid"
                        alt="Download Ajanm App"
                        decoding="async"
                        loading="lazy"
                        srcSet="
    https://ajanm.ai/wp-content/uploads/2025/05/download-ajanm-app.png 780w,
    https://ajanm.ai/wp-content/uploads/2025/05/download-ajanm-app-341x500.png 341w,
    https://ajanm.ai/wp-content/uploads/2025/05/download-ajanm-app-204x300.png 204w,
    https://ajanm.ai/wp-content/uploads/2025/05/download-ajanm-app-768x1127.png 768w,
    https://ajanm.ai/wp-content/uploads/2025/05/download-ajanm-app-51x75.png 51w,
    https://ajanm.ai/wp-content/uploads/2025/05/download-ajanm-app-480x705.png 480w
  "
                        sizes="(max-width:767px) 480px, (max-width:780px) 100vw, 780px"
                    />
                </div>
                <div className="rhs w-[50%]">
                    <h1 className='heading'>Ajanm App</h1>
                    <b>Your wellness companion in your pocket</b>
                    <div className="point my-4">
                        <IoMdCheckbox />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AjanmApp
