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
import med from '../assets/images/med.png';
import mon from '../assets/images/mon.png';
import man from '../assets/images/man.png';


function Program() {
    return (
        <>
            <div className='program'>
                <div className="leftprogram">
                    <div className="quote bg-white px-3 py-2 text-center rounded shadow my-2 w-fit">
                        THE AJANM PROGRAM
                    </div>
                    {/* <h3 className='heading'>A Holistic Approach to Complete Wellness</h3> */}
                    <h1 className='holistic'>
                        A Holistic Approach to Complete Wellness
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda rerum consectetur veritatis aspernatur accusamus minima, neque eveniet, alias, placeat nobis repellat cumque dolore!.</p>
                    <button className="w-fit bg-orange-500 text-white px-4 py-2 rounded">
                        Explore Program
                    </button>
                </div>
                <div className="rightprogram">
                    <div className='card_container'>
                        <div className="card1">
                            <img src={women} alt="" srcset="" className="cardimage" />
                            <div className="cardt">
                                <h2 className='card-title'><b>Yoga & Movement</b></h2>
                                <p className='card-text'>Therapeutic exercises for strength, flexibility & healing.</p>
                            </div>
                        </div>
                        <div className="card1">
                            <img src={habit} alt="" srcset="" className="cardimage" />
                            <div className="cardt">
                                <h2 className='card-title'><b>Nutrition & Diet</b></h2>
                                <p className='card-text'>Personalized nutrition plans for optimal health.</p>
                            </div>
                        </div>

                        <div className="card1">
                            <img src={mind} alt="" srcset="" className="cardimage" />
                            <div className="cardt">
                                <h2 className='card-title'><b>Habit & Lifestyle</b></h2>
                                <p className='card-text'>Build sustainable habits for long term wellness.</p>
                            </div>

                        </div>
                        <div className="card1">
                            <img src={med} alt="" srcset="" className="cardimage" />
                            <div className="cardt">
                                <h2 className='card-title'><b>Mind & Breath</b></h2>
                                <p className='card-text'>Pranayama & meditation for mental clarity & stress relief.</p>
                            </div>
                        </div>

                        <div className="card1">
                            <img src={mon} alt="" srcset="" className="cardimage" />
                            <div className="cardt">
                                <h2 className='card-title'><b>AI Tracking</b></h2>
                                <p className='card-text'>Smart analytics to monitor your progress.</p>
                            </div>
                        </div>
                        <div className="card1">
                            <img src={man} alt="" srcset="" className="cardimage" />
                            <div className="cardt">
                                <h2 className='card-title'><b>Expert Support</b></h2>
                                <p className='card-text'>Guidance from expert proffesionals every step of the way.</p>
                            </div>
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


            <div id="testimonials" className='testimon'>
                <h1 className='text-5xl font-extrabold'>Testimonials</h1>
                <div className="real">
                <h1 className='text-3xl'><b>Real People, Real Transformation</b></h1>
                <div className='card_container'>
                    <div className="card1">
                        <p className='card-title text-xl'>Thanks to AJANM, I am stress free, Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque.</p>
                        <h2 className='card-text flex flex-col'><b>Karan Kukreja</b><p className='flex items-center gap-8'>Bhopal, India <img className='star' src={star} alt="" /></p></h2>
                    </div>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/JFHEh9XaSvA"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </div>
                </div>
            </div>
        </>
    )
}
export default Program