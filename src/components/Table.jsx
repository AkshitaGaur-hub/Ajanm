import React from 'react'
import { FaCalendarCheck, FaEllo, FaHammer, FaObjectGroup, FaRegPaperPlane, FaStopwatch } from "react-icons/fa";

function Table() {
    return (
        <>
            <div className='tableborder'>
                <div className="plain">
                    <FaObjectGroup className='icon_color' />
                    <span id="pp">AI-Personalized Plans</span>
                    <span id="detail">Plans built for your goals.</span>
                </div>

                <div className="plain">
                    <FaHammer className='icon_color' />
                    <span id="pp">No Equipment Needed</span>
                    <span id="detail">Train anywhere, anytime.</span>
                </div>

                <div className="plain">
                    <FaStopwatch className='icon_color' />
                    <span id="pp">30 Minutes a Day</span>
                    <span id="detail">Quick and effective sessions.</span>
                </div>

                <div className="plain">
                    <FaRegPaperPlane className='icon_color' />
                    <span id="pp">90+ Conditions Targeted</span>
                    <span id="detail">Support for diverse needs.</span>
                </div>

                <div className="plain">
                    <FaEllo className='icon_color' />
                    <span id="pp">Expert Guidance</span>
                    <span id="detail">Trusted professional advice.</span>
                </div>

                <div className="plain">
                    <FaCalendarCheck className='icon_color' />
                    <span id="pp">Track & Transform</span>
                    <span id="detail">Measure progress easily.</span>
                </div>
            </div>
        </>
    )
}

export default Table