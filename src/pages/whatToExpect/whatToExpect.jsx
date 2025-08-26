import './wte.css';

export default function WhatToExpect() {
    const base = window.location.hostname;
    const url = base + '/walkthrough'
    return (
        <div className="background" id="wteBackground">
            <div id='wte' className="page">
                <h1>Program Details</h1>
                <div id='wteContainer'>
                    <div id="wteTextContainer">
                        
                        <p>Springboard to Design aims to provide students with access to theatre education they may not otherwise receive. Therefore, no prior experience is required to participate. Applicants with an interest in sewing, fashion, drawing, painting, building, creating, and storytelling are highly encouraged to apply. Students who already have a love for theater but don’t know where they fit in are also encouraged.</p>
                        <p>In 2026, the program will take place July 19th-25th in New York City's Midtown Manhattan area. </p>
                        <p>Springboard to Design is a tuition-free summer program that introduces high school students from underrepresented backgrounds to the world of theatrical design. </p>
                        <p>The week-long program includes hands-on workshops and mentorship from award-winning artists. Students will explore costume, set, lighting, sound, hair, makeup, and projection design in the heart of New York City.</p>
                    </div>
                    <div id="wteButtonContainer">
                        <a id='wteButton' href='http://localhost:5173/walkthrough' target='_blank'>Interactive Program Walkthrough</a>
                    </div>                    
                </div>

            </div>

        </div>
    )
}