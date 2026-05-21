import React from 'react'
import star from '../assets/images/star.png'
import image from '../assets/images/PM.png'
import { FcLike, FcLeftUp2 } from "react-icons/fc";
import { BiSolidDonateBlood } from "react-icons/bi";
import { MdLocalHospital } from "react-icons/md";
import { FaBrain } from "react-icons/fa6";
import { GiPiercedBody } from "react-icons/gi";
import { FaWeight } from "react-icons/fa";
import { CiSquareMore } from "react-icons/ci";
import women from '../assets/images/wo.png';
import habit from '../assets/images/habit.png';
import mind from '../assets/images/mind.png';


function Program() {
    return (
        <>
            <div className='program'>
                <div className="leftprogram w-[35%]">
                    <div className="quote bg-white px-3 py-2 text-center rounded shadow my-2 w-fit">
                        THE AJANM PROGRAM
                    </div>
                    {/* <h3 className='heading'>A Holistic Approach to Complete Wellness</h3> */}
                    <h1 className='holistic'>
                        A Holistic Approach to Complete Wellness
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero, sit nemo ipsam neque quisquam.</p>
                    <button className="w-fit bg-orange-500 text-white px-4 py-2 rounded">
                        Explore Program
                    </button>
                </div>
                <div className="rightprogram">
                    <div className='card_container'>
                        <div className="card1">
                            <img src={women} alt="" srcset="" />
                            <div className="cardt">
                                <h2 className='card-title'><b>Yoga & Movement</b></h2>
                                <p className='card-text'>Therapeutic exercises for strength, flexibility & healing.</p>
                            </div>
                        </div>
                        <div className="card1">
                            <img src={habit} alt="" srcset="" />
                            <div className="cardt">
                                <h2 className='card-title'><b>Nutrition & Diet</b></h2>
                                <p className='card-text'>Personalized nutrition plans for optimal health.</p>
                            </div>
                        </div>

                        <div className="card1">
                            <img src={mind} alt="" srcset="" />
                            <div className="cardt">
                                <h2 className='card-title'><b>Habit & Lifestyle</b></h2>
                                <p className='card-text'>Build sustainable habits for long term wellness.</p>
                            </div>

                        </div>
                        <div className="card1">
                            <h2 className='card-title'>Fast Performance</h2>
                            <p className='card-text'>Optimized for speed and performance.</p>
                        </div>

                        <div className="card1">
                            <h2 className='card-title'>Full Responsive</h2>
                            <p className='card-text'>Looks great on all devices and screen sizes.</p>
                        </div>
                        <div className="card1">
                            <h2 className='card-title'>Full Responsive</h2>
                            <p className='card-text'>Looks great on all devices and screen sizes.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tableborder c">
                <div className="plain"><span className='text-2xl'>10000+</span><p>Lives transformed</p></div>
                <div className="plain"><span className='text-2xl'>90+</span><p>Condition Targeted</p></div>
                <div className="plain"><span className='text-2xl'>108</span><p>Days to Transform</p></div>
                <div className="plain"><span className='text-2xl'>4.9/5</span><p>User Satisfaction</p></div>
            </div>

            <div className='program'>
                <div className="leftprogram w-[35%]">
                    <img src={image} alt="" srcset="" className='image' />
                </div>
                <div className="rightprogram">
                    <div className="rp">
                        <div className="quote bg-white px-3 py-2 text-center rounded shadow my-2 w-fit">
                            Why 108 Days
                        </div>
                        <h1 className='text-4xl'>A Journey Rooted in</h1>
                        <h1 className='text-4xl'>Ancient Wisdom & <span className='text-green-700'>Modern Science</span></h1>
                        <p><b>Cosmic Connection : </b>108 aligns with universal energy and abundance.</p>
                        <p><b>Chekra Hermony : </b>The heart chekra connects 108 nadis.</p>
                        <p><b>Hosotic Healing : </b>108 meditatin styles and breath cycles provide balance.</p>
                        <p><b>Habite Formation : </b>108 days to build lasting, life-changing habits.</p>
                    </div>
                </div>
            </div>

            <div className="conditions">
                <div className="plan1"><FcLike /><span>Diabetes</span></div>
                <div className="plan1"><FcLeftUp2 /><span>Hypertension</span></div>
                <div className="plan1"><BiSolidDonateBlood /><span>PCOD/PCOS</span></div>
                <div className="plan1"><MdLocalHospital /><span>Thyroid</span></div>
                <div className="plan1"><FaBrain /><span>Stress & Anxitey</span></div>
                <div className="plan1"><GiPiercedBody /><span>Back Pain</span></div>
                <div className="plan1"><FaWeight /><span>Obesity</span></div>
                <div className="plan1"><CiSquareMore /><span>Many more</span></div>
            </div>


            <div className="real">
                <h1 className='text-3xl'><b>Real People, Real Transformation</b></h1>
                <div className='card_container'>
                    <div className="card1">
                        <p className='card-title'>Thanks to AJANM, I am stress free, Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque.</p>
                        <h2 className='card-text flex flex-col'><b>Karan Kukreja</b><p className='flex items-center gap-8'>Bhopal, India <img className='star' src={star} alt="" /></p></h2>
                    </div>

                    <div className="card1">
                        <p className='card-title'>I Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis?</p>
                        <h2 className='card-text flex flex-col'><b>Neha Sharma</b><p className='flex items-center gap-8'>Delhi, India <img className='star' src={star} alt="" /></p></h2>
                    </div>

                    <div className="card1">
                        <p className='card-title'>Lost 13kgs, improved PCOS Lorem ipsum dolor sit amet consectetur.</p>
                        <h2 className='card-text flex flex-col'><b>Priya Mehta</b><p className='flex items-center gap-8'>Mumbai, India <img className='star' src={star} alt="" /></p></h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Program