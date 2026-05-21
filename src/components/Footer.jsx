import React from 'react'
import qr from '../assets/images/qr.png'
import phone from '../assets/images/phone.png'


const Footer = () => {
    return (
        <>
            <div className="footer flex">
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
                    {/* <img src={} alt="" srcset="" /> */}
                    <div className="text flex flex-col">
                        <p>Download at</p>
                        <h3><b>App Store</b></h3>
                    </div>
                </div>

                <div className="play flex">
                    {/* <img src={} alt="" srcset="" /> */}
                    <div className="text flex flex-col">
                        <p>Get it on</p>
                        <h3><b>Google Play</b></h3>
                    </div>
                </div>

                <div className="qr">
                    <img className='qr' src={qr} alt="" srcset="" />
                </div>
            </div>
        </>
    )
}

export default Footer
