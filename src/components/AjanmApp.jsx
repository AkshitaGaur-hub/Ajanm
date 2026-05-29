import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import './Features.css'
import { IoMdCheckbox } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";



const AjanmApp = () => {
    return (
        <>
            <Navbar />
            <div className="ajnamapp overflow-hidden">
                <div className="lhs">
                    <img
                        src="https://ajanm.ai/wp-content/uploads/2025/05/download-ajanm-app.png"
                        className="appphone w-full max-w-[240px] h-auto"
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
                <div className="rhs">
                    <h1 className='heading'>Ajanm App</h1>
                    <b>Your wellness companion in your pocket</b>
                    <div className="point my-4">
                        <span className='flex items-center gap-4'><IoMdCheckbox /><p>Personalized Plans</p></span>
                        <span className='flex items-center gap-4'><IoMdCheckbox /><p>Track Progress</p></span>
                        <span className='flex items-center gap-4'><IoMdCheckbox /><p>Daily reminders</p></span>
                        <span className='flex items-center gap-4'><IoMdCheckbox /><p>Expert support</p></span>
                        <span className='flex items-center gap-4'><IoMdCheckbox /><p>Insights and analytics</p></span>
                    </div>
                    <div className="btn flex">
                        <Link to="https://apps.apple.com/in/app/ajanm/id6736587790">
                            <button className="download flex items-center gap-4"><FaAppStoreIos />App store</button>
                        </Link>
                        <Link to="https://play.google.com/store/apps/details?id=ajanm.ai&pcampaignid=web_share">
                            <button className="download flex items-center gap-4"><IoLogoGooglePlaystore />Google Play</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AjanmApp
