import './wte.css';

export default function WhatToExpect() {
    const base = window.location.hostname;
    const url = base + '/walkthrough'
    return (
        <div className="background" id="wteBackground">
            <div id='wte' className="page">
                
                <div id="wteTextContainer">
                    <h1>What to Expect</h1>
                    <p>Springboard to Design is an intensive, one week program, packed with activities for students. Days start early and end late, the schedule may not be suited for all students, please consider this when applying.</p>
                    <p>Please check out our interactive program walk-through and download a <a>sample schedule here.</a></p>
                </div>
                <div id="wteButtonContainer">
                    <a href='http://localhost:5173/walkthrough' target='_blank'>Interactive Program Walkthrough</a>
                </div>
            </div>

        </div>
    )
}