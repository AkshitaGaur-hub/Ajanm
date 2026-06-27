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
import women from '../assets/images/women.png';
import habit from '../assets/images/habit.png';
import mind from '../assets/images/mind.png';
import med from '../assets/images/med.png';
import mon from '../assets/images/mon.png';
import man from '../assets/images/man.png';
import { Link } from 'react-router-dom';


function Program() {
    return (
        <>
            <div className='programm'>
                <div className="leftprogram">
                    <div className="quote bg-white px-3 py-2 text-center rounded shadow my-2 w-fit">
                        THE AJANM PROGRAM
                    </div>
                    {/* <h3 className='heading'>A Holistic Approach to Complete Wellness</h3> */}
                    <h1 className='holistic'>
                        A Holistic Approach to Complete Wellness
                    </h1>
                    <p className="para">Ajanm AI blends advanced technology with personalized healthcare to create a smarter wellness experience. From preventive care to lifestyle support, we help individuals achieve better physical, mental, and everyday well-being through accessible, AI-driven solutions designed for complete holistic health.
                    </p>
                    <Link to="/ajanmprogram">
                    <button aria-label='explore' className="w-fit bg-orange-500 text-white px-4 py-2 rounded">
                        Explore Program
                    </button>
                    </Link>
                </div>
                <div className="rightprogram">
                    <div className='p_container'>
                        <div className="card1">
                            <img src={women} alt="Yoga and movement" className="cardimage"/>
                            <div className="cardt">
                                <h2 className='card-title'>Yoga & Movement</h2>
                                <p className='card-text'>Therapeutic exercises for strength & flexibility.</p>
                            </div>
                        </div>
                        <div className="card1">
                            <img src={habit} alt="Nutrition and diet" className="cardimage"/>
                            <div className="cardt">
                                <h2 className='card-title'>Nutrition & Diet</h2>
                                <p className='card-text'>Personalized nutrition plans.</p>
                            </div>
                        </div>

                        <div className="card1">
                            <img src={mind} alt="Habit and lifestyle" className="cardimage"/>
                            <div className="cardt">
                                <h2 className='card-title'>Habit & Lifestyle</h2>
                                <p className='card-text'>Healthy habits for lasting wellness.</p>
                            </div>

                        </div>
                        <div className="card1">
                            <img src={med} alt="Mind and breath" className="cardimage"/>
                            <div className="cardt">
                                <h2 className='card-title'>Mind & Breath</h2>
                                <p className='card-text'>Meditation & breathing for calm.</p>
                            </div>
                        </div>

                        <div className="card1">
                            <img src={mon} alt="AI tracking" className="cardimage"/>
                            <div className="cardt">
                                <h2 className='card-title'>AI Tracking</h2>
                                <p className='card-text'>Track progress with AI insights.</p>
                            </div>
                        </div>
                        <div className="card1">
                            <img src={man} alt="Expert support" className="cardimage"/>
                            <div className="cardt">
                                <h4 className='card-title'>Expert Support</h4>
                                <p className='card-text'>Guidance from certified experts.</p>
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
                <div className="leftprogramm">
                    <img src={image} alt="assana" srcset="" className='image'/>
                </div>
                <div className="rightprogramm">
                    <div className="rp">
                        <div className="quote bg-white px-3 py-2 text-center rounded shadow my-2 w-fit">
                            Why 108 Days
                        </div>
                        <h1 className='text-4xl journy'>A Journey Rooted in Ancient Wisdom & <span className='journy text-green-700'>Modern Science</span></h1>
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
                <div className="testimonial_heading">

                    <span className='mini_title'>
                        TESTIMONIALS
                    </span>

                    <h2 className='main_title'>
                        Real People, Real Transformation
                    </h2>
                    <p className='sub_title'>
                        Hear from our community who've experienced life-changing
                        results through our holistic approach.
                    </p>

                </div>
                <div className="testimonial_container">

                    <div className="testimonial_card">
                        <div className='quote_icon'>“</div>
                        <p className="testimonial_text">
                            “Thanks to AJANM, I am stress free. The personalized yoga and nutrition
                            guidance completely changed my lifestyle and mindset.”
                        </p>

                        <div className="testimonial_user">
                            <div className='avatar'>
                                K
                            </div>

                            <div>
                                <h3>Karan Kukreja</h3>
                                <span>Bhopal, India</span>
                            </div>

                            <img className='star' src={star} alt="rating"/>
                        </div>
                    </div>
                    <div className="video_box">
                        <iframe
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