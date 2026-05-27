import React from 'react'
// import qr from '../assets/images/qr.png'
// import phone from '../assets/images/phone.png'
// import { FaGooglePlay,FaAppStore } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            {/* <div className="footer flex">
                <div className="mob">
                    <img src={phone} alt="" srcset="" />
                </div>
                <div className="wellness flex flex-col">
                    <b className='text-xl'>Your Wellness Companion</b>
                    <b className='text-xl'>is Just a Download Away</b>
                    <p>Get the AJANM app and start your personalized</p>
                    <p>wellness journy today.</p>
                </div>

                <div className="App">
                    <FaAppStore />
                    <div className="text flex flex-col">
                        <p>Download at</p>
                        <h3><b>App Store</b></h3>
                    </div>
                </div>

                <div className="play flex">
                    <FaGooglePlay/>
                    <div className="text flex flex-col">
                        <p>Get it on</p>
                        <h3><b>Google Play</b></h3>
                    </div>
                </div>

                <div className="qr">
                    <img className='qr' src={qr} alt="" srcset="" />
                </div>
            </div> */}
            <div className="footer text-black py-6 flex flex-col md:flex-row p-4 md:p-8 gap-6 md:gap-12 justify-between">
    
    {/* <div className="hidden md:block w-px bg-gray-600"></div> */}
    {/*Links*/}
     <div className='links flex flex-col gap-2 text-white'>
        <h2 className='text-xl font-bold'>Links</h2>
        <a href="/" className="text-white hover:underline">Home</a>
        <a href="/features" className="text-white hover:underline">Features</a>
        <a href="/ajanmapp" className="text-white hover:underline">Ajanm App</a>
        <a href="/ajanmprogram" className="text-white hover:underline">Program</a>
        <a href="/aboutus" className="text-white hover:underline">About us</a>
    </div>
    <div className="hidden text-white md:block w-px bg-gray-600"></div>
    {/* copyright */}
     <div className='admission'>
        <h2 className='text-xl text-white font-bold'>For Subscription</h2>
        <p className='text-white'>Please contact us for Any Queries.</p>
        <span className='text-white'>Email - <a href="mailto:@gmail.com" className="text-white hover:underline">mailid</a>
        </span>
        <p className='mt-4 text-sm text-white'>&copy; {new Date().getFullYear()} Ajanm.ai | All rights reserved.</p>
    </div>
    <vr className="border-l border-gray-600"></vr>
    {/* ads */}
    <div className='flex '>
       <div className='ads'>
        <h2 className='text-xl text-white font-bold'>Connect With Us</h2>
        <p className='text-white'>Follow us on social media for updates and news.</p>
        {/* <div className='social-icons flex gap-4 mt-2'>
            <a href="https://www.facebook.com/shrimaabhartischool" target="_blank" rel="noopener noreferrer" className="">
                <FontAwesomeIcon
              icon={faFacebook}
              className="text-2xl cursor-pointer"
            />
            </a>
            <a href="https://www.instagram.com/shrimaabhartischool/" target="_blank" rel="noopener noreferrer" className="">
                <FontAwesomeIcon
              icon={faInstagram}
              className="text-2xl cursor-pointer"
            />
            </a>
            <a href="https://github.com/AkshitaGaur-hub" target="_blank" rel="noopener noreferrer" className="">
                <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl cursor-pointer"
            />
            </a>
           
        </div> */}
        <hr className="border-t text-white border-gray-600 my-4"></hr>

        <p className='text-white'>Desgined and developed with <span className="cursor-pointer">💚</span></p>
    </div>
    </div>
    </div>
        </>
    )
}

export default Footer
