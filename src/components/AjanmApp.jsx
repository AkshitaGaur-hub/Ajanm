import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import './Features.css'
import { IoMdCheckbox } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";

import {
    Download,
    ClipboardList,
    TrendingUp,
    HeartHandshake,
} from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Download",
        description: "Get the Ajanm App from the store.",
        icon: Download,
    },
    {
        id: 2,
        title: "Set Your Goals",
        description: "Tell us your goals and preferences.",
        icon: ClipboardList,
    },
    {
        id: 3,
        title: "Track & Follow",
        description: "Follow personalized plans and track progress.",
        icon: TrendingUp,
    },
    {
        id: 4,
        title: "Achieve Wellness",
        description: "Build healthy habits and transform your life.",
        icon: HeartHandshake,
    },
];

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
                            <button aria-label='app_store' className="download flex items-center gap-4"><FaAppStoreIos className='text-lg dow'/>App store</button>
                        </Link>
                        <Link to="https://play.google.com/store/apps/details?id=ajanm.ai&pcampaignid=web_share">
                            <button aria-label='play_store' className="download flex items-center gap-4"><IoLogoGooglePlaystore className='text-lg dow'/>Google Play</button>
                        </Link>
                    </div>
                </div>
            </div>

            <section>
                <div className="container working flex justify-center flex-col">
                    <div className="para icon_color font-extrabold">
                        How it works
                    </div>
                    <div className="process">
                        Simple steps to a healthier you
                    </div>

                    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-orange-200"></div>

                        {steps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.id}
                                    className="relative flex flex-col items-center text-center"
                                >
                                    {/* Circle */}
                                    <div className="w-24 h-24 rounded-full border-[10px] border-orange-50 bg-white shadow-sm flex items-center justify-center z-10">
                                        <Icon
                                            size={36}
                                            className="text-[#E58A27]"
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    {/* Number */}
                                    <div className="mt-6 w-8 h-8 rounded-full bg-[#E58A27] text-white text-sm font-bold flex items-center justify-center">
                                        {step.id}
                                    </div>

                                    {/* Content */}
                                    <h3 className="mt-4 text-var(--small_heading) font-semibold text-gray-900">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 para text-gray-600 leading-relaxed max-w-[220px]">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default AjanmApp
