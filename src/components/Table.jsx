import React from 'react'
import { FaCalendarCheck, FaEllo, FaHammer, FaObjectGroup,FaRegPaperPlane,FaStopwatch    } from "react-icons/fa";

function Table(){
    return (
        <>
            <div className='tableborder text-black'>
               <div id="plain"><FaObjectGroup /><span id="pp">AI-Personalized Plans</span><span id="detail">Lorem ipsum dolor sit amet consectetur.</span></div>
               <div id="plain"><FaHammer /><span id="pp">No Equipment Needed</span><span id="detail">Lorem ipsum dolor sit amet consectetur.</span></div>
               <div id="plain"><FaStopwatch /><span id="pp">30 Minutes a Day</span><span id="detail">Lorem ipsum dolor sit amet consectetur.</span></div>
               <div id="plain"><FaRegPaperPlane /><span id="pp">90+ Conditions Targeted</span><span id="detail">Lorem ipsum dolor sit amet consectetur.</span></div>
               <div id="plain"><FaEllo /><span id="pp">Expert Guidance</span><span id="detail">Lorem ipsum dolor sit amet consectetur.</span></div>
               <div id="plain"><FaCalendarCheck /><span id="pp">Track & Transform</span><span id="detail">Lorem ipsum dolor sit amet consectetur.</span></div>
            </div>
        </>
    )
}

export default Table