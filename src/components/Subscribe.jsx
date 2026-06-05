import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { IoMdCheckbox } from "react-icons/io";
// import image from "../assets/images/Siddhasana.PNG"
import { GoGoal } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import { IoBarChartSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiCycle } from "react-icons/gi";
import { RiHeadphoneFill } from "react-icons/ri";



const Subscribe = () => {
    return (
        <>
            <Navbar />
            <div className="subscribe container">
                <div className="sub">
                    <h1 className="heading">Subscribe Now</h1>
                    <p className="para text-gray-600">Start Your Journy Today</p>
                </div>
                <div className="sn flex">
                    <div className="lhside flex flex-col">
                        <div className="heading">Invest in Yourself , <span className='text-orange-400'>Transform Your Life.</span></div>
                        <div className="para text-gray-500">Join our 108-Days of Transformation program and take the first step towards a helthier, happier you.</div>
                        <div className="subscribe_icon grid grid-cols-4 gap-7">
                            <div className='flex flex-col m-2'>
                                <div className='w-24 h-24 rounded-3xl border-[10px] border-orange-50 bg-orange-100  flex items-center justify-center text-center z-10'><GoGoal className='text-orange-600 font-bold text-5xl' /></div>
                                <span><b>Goal-Oriented Program</b></span>
                            </div>
                            <div className='flex flex-col'>
                                <div className='w-24 h-24 rounded-3xl border-[10px] border-orange-50 bg-orange-100  flex items-center justify-center text-center z-10'><IoPerson className='text-orange-600 font-bold text-5xl' /></div>
                                <span><b>Expert Guidance</b></span>
                            </div>
                            <div className='flex flex-col '>
                                <div className='w-24 h-24 rounded-3xl border-[10px] border-orange-50 bg-orange-100  flex items-center justify-center text-center z-10'><IoBarChartSharp className='text-orange-600 font-bold text-5xl' /></div>
                                <span><b>Track Your Progress</b></span>
                            </div>
                            <div className='flex flex-col'>
                                <div className='w-24 h-24 rounded-3xl border-[10px] border-orange-50 bg-orange-100  flex items-center justify-center text-center z-10'><CiHeart className='text-orange-600 font-bold text-5xl' /></div>
                                <span><b>Healthy Body,Happy Mind</b></span>
                            </div>
                        </div>
                        <div className="daily_imp w-full max-w-3xl rounded-[28px] bg-[#f7e4d4] px-10 py-8">
                            <div className="flex items-center gap-8">
                                {/* Quote Icon */}
                                <div className="text-[64px] font-bold leading-none text-[#FF6B00]">
                                    ❝
                                </div>

                                {/* Content */}
                                <div>
                                    <p className="text-[20px] font-medium leading-relaxed text-[#1E293B]">
                                        Small daily improvements

                                        lead to stunning long-term results.
                                    </p>

                                    <p className="mt-5 text-[18px] font-medium text-[#FF6B00]">
                                        – Transform Yourself
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rhside">
                        <div className="fee">
                            <h3 className='text-2xl font-bold'>108-Days of Transformation</h3>
                            <h1 className="heading">₹2100</h1>
                            <div className="feepoint para flex flex-col gap-1 mt-4">
                                <span className='flex items-center gap-3'><IoMdCheckbox /><p className='m-0'>Subscription Duration : 126 Days</p></span>
                                <span className='flex items-center gap-3'><IoMdCheckbox /><p className='m-0'>Program Duration: 108 Days</p></span>
                                <span className='flex items-center gap-3'><IoMdCheckbox /><p className='m-0'>AI generated personalized weekly programs</p></span>
                                <span className='flex items-center gap-3'><IoMdCheckbox /><p className='m-0'>Live Counseling with an Expert</p></span>
                                <span className='flex items-center gap-3'><IoMdCheckbox /><p className='m-0'>Access to performance report</p></span>
                                <span className='flex items-center gap-3'><IoMdCheckbox /><p className='m-0'>Live Counseling with an Expert</p></span>
                                <span className='flex items-center gap-3'><IoMdCheckbox /><p className='m-0'>Free access to our contents</p></span>
                                <span className='flex items-center gap-3'><IoMdCheckbox /><p className='m-0'>Free access to Live webinars</p></span>
                            </div>
                            <button className='m-3'>Pay now</button>
                        </div>
                    </div>

                </div>
                <section>
                    <div className="secure bg-white rounded-3xl flex flex-row gap-8 justify-around">
                        <div className="flex flex-col">
                            <div className='w-24 h-24 rounded-full  bg-orange-100  flex items-center justify-center text-center z-10'><RiSecurePaymentLine className='text-orange-600 font-bold text-5xl' /></div>
                            <span>Secure Payment</span>
                        </div>
                        <div className="flex flex-col">
                            <div className='w-24 h-24 rounded-full  bg-orange-100  flex items-center justify-center text-center z-10'><GiCycle className='text-orange-600 font-bold text-5xl' /></div>
                            <span>Cancel Anytime</span>
                        </div>
                        <div className="flex flex-col">
                            <div className='w-24 h-24 rounded-full  bg-orange-100  flex items-center justify-center text-center z-10'><RiHeadphoneFill className='text-orange-600 font-bold text-5xl' /></div>
                            <span>24/7 Support</span>
                        </div>
                    </div>
                </section>
            </div>


            <Footer />
        </>
    )
}

export default Subscribe
