import react from 'react'
// import image from '../assets/images/si.png'

function Page() {
    return (
        <>
            <div className='container mx-auto flex w-full justify-center gap-8'>
                <div className="left h-7 flex flex-col">
                    <div className="quote bg-white px-4 py-2 text-center rounded shadow my-3 w-fit ">
                        108-DAY TRANSFORMATION JOURNEY
                    </div>
                    <div className="heading font-extrabold flex flex-col m-4">
                        <span id="heading">Transform You Life</span>
                        <span id="heading">with <span id="org" className="color">AI-Enhanced Yoga & Nutrition</span> </span>
                        <span id="para">A revolutionary 108-day program that combines ancient yogic</span>
                        <span id="para">wisdom with cutting-edge AI technologyto heal, rejuvinate </span>
                        <span id="para">and empower you.</span>
                    </div>
                    <div id="programbtn" >
                        <button className="color border-radius padding flex align-items">Start Your Journey</button>
                        <button className='explore-btn border-radius padding flex align-items'>Explore Program</button>
                    </div>

                    <div id="proof1" className="flex items-center">

                        <div className="flex" id="proof">
                            <img className="rounded-full" src="https://i.pravatar.cc/100?img=1" alt="" />
                            <img className="rounded-full" src="https://i.pravatar.cc/100?img=2"/>
                            <img className="rounded-full" src="https://i.pravatar.cc/100?img=3"/>
                            <img className="rounded-full" src="https://i.pravatar.cc/100?img=4" />
                        </div>
                        <p className="text-xs font-bold text-black">10,000+{" "}
                            <span className="font-normal text-gray-600">
                                lives transformed
                            </span>
                        </p>

                    </div>
                </div>

                <div className="right w-1/2 flex items-center justify-center bg-orange-400 h-7">
                </div>

            </div>

        </>
    )
}

export default Page;