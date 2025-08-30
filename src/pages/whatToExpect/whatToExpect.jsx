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
                        <div className='wteSection'>
                            <h3>WHO</h3>
                            <p>SB2D is for underrepresented high school students, including students who have limited or no access to theatre. Applicants with an interest in sewing, fashion, drawing, painting, building, creating, and storytelling are highly encouraged to apply. </p>       
                        </div>
                        <div className='wteSection'>
                            <h3>WHAT</h3>
                            <p>The program includes workshops and mentorship from award-winning artists. Students will explore costume, set, lighting, sound, hair, makeup, and projection design in the heart of New York City. The SB2D program is FREE to all students. Read our FAQs to find out more.</p>
                            {/* <a id='wteButton' href='http://localhost:5173/walkthrough' target='_blank'>Click here for an Interactive Program Walkthrough</a> */}
                        </div>
                        <div id='whenWhere'>
                            <div className='wteSection'>
                                <h3>WHEN</h3>
                                <p>In 2026, the program will take place July 19th-25th.</p>
                            </div>
                            <div className='wteSection'>
                                <h3>WHERE</h3>
                                <p>New York City's Midtown Manhattan area.</p>
                            </div>                            
                        </div>

                    </div>                
                </div>

            </div>

        </div>
    )
}