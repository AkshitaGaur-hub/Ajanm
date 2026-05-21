import image from '../assets/images/SU.png'
 
function Page() {
    return (
        <>
            <div className='container mx-auto flex flex-col lg:flex-row w-full justify-center items-start gap-8 py-8'>
                <div className="left w-full lg:w-1/2 flex flex-col justify-center gap-6">
                    <div className="quote bg-white px-3 py-2 text-center rounded shadow my-2 w-fit">
                        108-DAY TRANSFORMATION JOURNEY
                    </div>
                    <div className="heading font-extrabold flex flex-col m-3 gap-3">
                        <span id="heading">Transform Your Life</span>
                        <span id="heading">with <span id="org" className="color">AI-Enhanced Yoga & Nutrition</span></span>
                        <span id="para">A revolutionary 108-day program that combines ancient yogic</span>
                        <span id="para">wisdom with cutting-edge AI technology to heal, rejuvenate</span>
                        <span id="para">and empower you.</span>
                    </div>
                    <div id="programbtn" className="flex flex-wrap gap-4">
                        <button className="color border-radius padding flex align-items">Start Your Journey</button>
                        <button className='explore-btn border-radius padding flex align-items'>Explore Program</button>
                    </div>

                    <div id="proof1" className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center" id="proof">
                            <img className="rounded-full" src="https://i.pravatar.cc/100?img=1" alt="" />
                            <img className="rounded-full" src="https://i.pravatar.cc/100?img=2" alt="" />
                            <img className="rounded-full" src="https://i.pravatar.cc/100?img=3" alt="" />
                            <img className="rounded-full" src="https://i.pravatar.cc/100?img=4" alt="" />
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-black">
                            10,000+ <span className="font-normal text-gray-600">lives transformed</span>
                        </p>
                    </div>
                </div>

                <div className="right w-full lg:w-1/2  rounded-3xl min-h-[20px] md:min-h-[20px] flex items-center justify-center">
                <img src={image} alt="" className='image'/>
                </div>
            </div>
        </>
    )
}

export default Page;