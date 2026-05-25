import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { IoMdCheckbox } from "react-icons/io";
import image from "../assets/images/Siddhasana.PNG"

const Subscribe = () => {
    return (
        <>
            <Navbar />
            <div className="subscribe">
                <h1 className="heading ">Subscribe Now</h1>
                <h3 className='text-2xl font-light'>Choose Your Plan</h3>
                <p className="para text-gray-600">Start Your Journy Today</p>
                <div className="sn flex">
                    <div className="lhside w-[50%]">
                        <img src={image} alt="" className='siddhasana' />
                    </div>
                    <div className="rhside w-[50%]">
                        <div className="fee">
                            <h3 className='text-2xl font-bold'>108-Days of Transformation</h3>
                            <h1 className="heading">₹2100</h1>
                            <div className="feepoint flex flex-col gap-1 mt-4">
                                <span className='flex items-center gap-3'><IoMdCheckbox /><p className='m-0'>Subscription Duration : 126 Days</p></span>
                                <span className='flex items-center gap-3'><IoMdCheckbox /><p className='m-0'>Program Duration: 108 Days</p></span>
                                <span className='flex items-center gap-3'><IoMdCheckbox /><p className='m-0'>AI generated personalized weekly programs</p></span>
                                <span className='flex items-center gap-3'><IoMdCheckbox /><p className='m-0'>Live Counseling with an Expert</p></span>
                                <span className='flex items-center gap-3'><IoMdCheckbox /><p className='m-0'>Access to performance report</p></span>
                                <span className='flex items-center gap-3'><IoMdCheckbox /><p className='m-0'>Live Counseling with an Expert</p></span>
                                <span className='flex items-center gap-3'><IoMdCheckbox /><p className='m-0'>Free access to our contents</p></span>
                                <span className='flex items-center gap-3'><IoMdCheckbox /><p className='m-0'>Free access to Live webinars</p></span>
                            </div>
                            <button>Pay now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Subscribe
