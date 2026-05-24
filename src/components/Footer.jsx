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
    {/* address section */}
    <div className='address'>
        <h2 className='text-xl font-bold'>Address</h2>
        <p>Shri Maa Bharti Sr. Sec. School</p>
        <p>Shiv Colony, Behind Power house, Chirawa, Rajasthan</p>
        <p>Contact no. - 9352122398</p>
        <span>Email - <a href="mailto:@gmail.com" className="text-green-900 hover:underline">mailid</a></span>
        
    </div>
    <vr className="border-l border-gray-600"></vr>
    {/*Links*/}
     <div className='links flex flex-col gap-2'>
        <h2 className='text-xl font-bold'>Links</h2>
        <a href="/" className="text-green-900 hover:underline">Home</a>
        <a href="/features" className="text-green-900 hover:underline">Features</a>
        <a href="/" className="text-green-900 hover:underline">Ajanm App</a>
        <a href="/" className="text-green-900 hover:underline">Program</a>
        <a href="/" className="text-green-900 hover:underline">About us</a>
    </div>
    <vr className="border-l border-gray-600"></vr>
    {/* copyright */}
     <div className='admission'>
        <h2 className='text-xl font-bold'>For Subscription</h2>
        <p>Please contact us for Any Queries.</p>
        <span>Email - <a href="mailto:@gmail.com" className="text-green-900 hover:underline">mailid</a>
        </span>
        <p className='mt-4 text-sm'>&copy; {new Date().getFullYear()} Ajanm.ai | All rights reserved.</p>
    </div>
    <vr className="border-l border-gray-600"></vr>
    {/* ads */}
    <div className='flex '>
       <div className='ads'>
        <h2 className='text-xl font-bold'>Connect With Us</h2>
        <p>Follow us on social media for updates and news.</p>
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
        <hr className="border-t border-gray-600 my-4"></hr>

        <p >Desgined and developed with <span className="cursor-pointer">💚</span></p>
    </div>
    </div>
    </div>
        </>
    )
}

export default Footer
