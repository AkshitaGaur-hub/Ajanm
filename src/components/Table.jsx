import React from 'react'
import { FaCalendarCheck, FaEllo, FaHammer, FaObjectGroup, FaRegPaperPlane, FaStopwatch } from "react-icons/fa";

function Table() {
    return (
        <>
            <div className='tableborder text-black'>
                <div className="plain"><FaObjectGroup className='text-orange-600'/><span id="pp">AI-Personalized Plans</span><span id="detail">Lorem ipsum dolor sit amet consectetur.</span></div>
                <div className="plain"><FaHammer className='text-orange-600'/><span id="pp">No Equipment Needed</span><span id="detail">Lorem ipsum dolor sit amet consectetur.</span></div>
                <div className="plain"><FaStopwatch className='text-orange-600'/><span id="pp">30 Minutes a Day</span><span id="detail">Lorem ipsum dolor sit amet consectetur.</span></div>
                <div className="plain"><FaRegPaperPlane className='text-orange-600'/><span id="pp">90+ Conditions Targeted</span><span id="detail">Lorem ipsum dolor sit amet consectetur.</span></div>
                <div className="plain"><FaEllo className='text-orange-600'/><span id="pp">Expert Guidance</span><span id="detail">Lorem ipsum dolor sit amet consectetur.</span></div>
                <div className="plain"><FaCalendarCheck className='text-orange-600'/><span id="pp">Track & Transform</span><span id="detail">Lorem ipsum dolor sit amet consectetur.</span></div>
            </div>
        </>
    )
}

export default Table