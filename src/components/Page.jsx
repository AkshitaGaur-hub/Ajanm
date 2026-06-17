import image from '../assets/images/SU.webp'
import { Link } from "react-router-dom";


function Page() {
    return (
        <>
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 py-4 md:py-8 px-2 md:px-4">

                <div className="left flex flex-col justify-center gap-6">
                    <div className="hero">
                        <div className="quote bg-white px-3 py-2 text-center rounded shadow my-2 w-fit">
                            108-DAY TRANSFORMATION JOURNEY
                        </div>
                        <div className="heading font-extrabold flex flex-col m-3 gap-3">
                            <span id="heading" className="text-2xl sm:text-3xl md:text-4xl">Transform Your Life</span>
                            <span id="heading" className="text-2xl sm:text-3xl md:text-4xl"><span id="org" className="color">AI-Enhanced Yoga & Nutrition</span></span>
                            <span id="para" className="text-sm sm:text-base md:text-lg ">A revolutionary 108-day program that combines ancient yogic wisdom with cutting-edge AI technology to heal, rejuvenate and empower you.</span>
                        </div>
                    </div>
                    <div id="programbtn" className="flex flex-wrap gap-4">
                        <Link to="/subscribe">
                            <button aria-label='start' className="color border-radius padding flex align-items">Start Your Journey</button>
                        </Link>
                        <Link to="/ajanmprogram">
                            <button aria-label='explore' className='explore-btn border-radius padding flex align-items'>Explore Program</button>
                        </Link>
                    </div>

                    <div id="proof1" className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center" id="proof">
                            <img className="rounded-full" src="https://i.pravatar.cc/100?img=1" alt="user1" loading='lazy' />
                            <img className="rounded-full" src="https://i.pravatar.cc/100?img=2" alt="user2" loading='lazy' />
                            <img className="rounded-full" src="https://i.pravatar.cc/100?img=3" alt="user3" loading='lazy' />
                            <img className="rounded-full" src="https://i.pravatar.cc/100?img=4" alt="user4" loading='lazy' />
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-black">
                            10,000+ <span className="font-normal text-gray-600">lives transformed</span>
                        </p>
                    </div>
                </div>

                <div className="right  overflow-hidden">
                    <img
                        src={image}
                        alt="Ajanm transformation visual"
                        className="rounded-4xl"
                        loading="eager"
                        fetchpriority="high"
                    />
                </div>
            </div>
        </>
    )
}

export default Page;