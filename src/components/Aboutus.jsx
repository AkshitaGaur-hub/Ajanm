import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaLinkedin } from "react-icons/fa";
import ab from '../assets/images/ab.jpeg'

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <div className="aboutus">
        <h1 className='heading'>About us</h1>
        <div className="au flex">
          <div className="lhands">
            <p className='flex flex-col flex-wrap'>Ajanm.ai a unit of BK Vedic Pvt Ltd, merges traditional wellness practices with AI-driven insights to create a unique health journey. From personalized programs to expert guidance, we are committed to helping you achieve your best self. Tailored for every age, profession, and lifestyle, Ajanm is your partner in health.</p>
            <img src={ab} alt="" className='ab'/>
          </div>
          <div className="rhands">
            <video
              autoPlay
              controls
              loop
              muted
              className="veo rounded-xl"
            >
              <source
                src="https://ajanm.ai/wp-content/uploads/2024/04/ajanm-video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <h1 className="heading flex justify-center text-4xl font-bold">Our Team</h1>
        <div className="team flex justify-center gap-5">
          <div className="card1">
            <div className="cardt">
              <h2 className="card-title flex flex-col items-center text-center"><b>Prasoon Gupta</b><img src="" alt="" className='ceo '/></h2>
              <p className='text-gray-400 text-xl'>Co-Founder and CEO</p>
              <p className='card-text'>Co-Founder and CEO of Ajanm.ai, Prasoon Gupta is an IIT Roorkee alumnus and a
                Stanford Graduate School of Business graduate. A yogi at heart, Prasoon draws inspiration from Lord
                Krishna’s teachings in the Bhagavad Gita, which guide his approach to both life and business. He believes
                in the power of mindfulness, yoga, and nourishment to create balance in physical, mental, and spiritual well-being.</p>
              <FaLinkedin className='cursor-pointer'/>
            </div>
          </div>
          <div className="card1">
            <div className="cardt">
              <h2 className='card-title flex flex-col items-center text-center'><b>Vinit Dixit</b><img src="" alt="" className='ceo '/></h2>
              <p className='text-gray-400 text-xl'>CTO, BITS Pilani Alumnus</p>
              <p className='card-text'>As the CTO of Ajanm.ai, Vinit Dixit combines strong technical expertise with a passion for building impactful digital solutions. A BITS Pilani alumnus, he leads the platform’s technological innovation and AI-driven development. Vinit is focused on creating scalable, user-centric systems that seamlessly blend technology with holistic wellness, making personalized health transformation more accessible and effective.</p>
               <FaLinkedin className='cursor-pointer'/>
            </div>
          </div>
          <div className="card1">
            <div className="cardt">
              <h2 className='card-title flex flex-col items-center text-center'><b>Ashok Birla</b><img src="" alt="" className='ceo '/></h2>
              <p className='text-gray-400 text-xl'>CEO and Co-Founder</p>
              <p className='card-text'>Ashok Birla, CEO and Co-Founder of Ajanm.ai, brings deep expertise in yogic science and holistic wellness. Holding a Master’s degree in Yog and currently pursuing a PhD in Yog, he is dedicated to integrating ancient Indian wisdom with modern lifestyle practices. His vision focuses on helping individuals achieve physical vitality, mental clarity, and spiritual harmony through disciplined living and personalized wellness guidance.</p>
               <FaLinkedin className='cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Aboutus
