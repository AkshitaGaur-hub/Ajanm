import React from 'react'
import "./Features.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import pro from "../assets/images/pro.png"
import num1 from "../assets/images/num1.png"
import num2 from "../assets/images/num2.png"
import num3 from "../assets/images/num3.png"
import num4 from "../assets/images/num4.png"
import num5 from "../assets/images/num5.png"
import num6 from "../assets/images/num6.png"

const AjanmProgram = () => {
    return (
        <>
            <Navbar />
                    <div className="top">
                        <h1 className="heading">
                            The AJANM Program
                        </h1>

                        <p className="text-gray-600 para">
                           A 108-day structured program designed for lasting transformation.
                        </p>
                    </div>
            <div className="ajanmprogram flex">
                <div className="lefths">
                    <div className="cardss">
                        <div className='items flex'>
                            <img src={num1} alt="" className='number' />
                            <div className="card_matter">
                                <b>Diagnostic & Assessment</b>
                                <p>Share your health profile and goals.</p>
                            </div>
                        </div>
                        <div className='items flex'>
                            <img src={num2} alt="" className='number' />
                            <div className="card_matter">
                                <b>AI-Personalized Plan</b>
                                <p>AI- creates a plan tailored just for you.</p>
                            </div>
                        </div>
                        <div className='items flex'>
                            <img src={num3} alt="" className='number' />
                            <div className="card_matter">
                                <b>Expert Review</b>
                                <p>Reviewed by experts for best results.</p>
                            </div>
                        </div>
                        <div className='items flex'>
                            <img src={num4} alt="" className='number' />
                            <div className="card_matter">
                                <b>Smooth Start</b>
                                <p>Easy onboarding & orientation.</p>
                            </div>
                        </div>
                        <div className='items flex'>
                            <img src={num5} alt="" className='number' />
                            <div className="card_matter">
                                <b>Ongoing Support</b>
                                <p>Weekly sessions with experts.</p>
                            </div>
                        </div>
                        <div className='items flex'>
                            <img src={num6} alt="" className='number' />
                            <div className="card_matter">
                                <b>Real-time Tracking</b>
                                <p>Track progress and see transformation.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="righths">
                    <img src={pro} alt="" className='pro' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AjanmProgram
