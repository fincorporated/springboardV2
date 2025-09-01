import './dayTwo.css';
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import LightingA from './photos/day2LightingA.jpg';
import LightingB from './photos/day2LightingB.jpg';
import LightingC from './photos/day2LightingC.jpg';

export default function DayTwo() {
    const [dayHalf, setDayHalf] = useState('morning');


    function changeDayHalf() {
        if (dayHalf === 'morning') {
            setDayHalf('afternoon');
        } else {
            setDayHalf('morning');
        }
    }
    let schedule;
    let EOD;
    if (dayHalf === 'afternoon') {
        EOD= (
            <div className="EOD">
                <h3>End of Day: 7:00PM</h3>
            </div>
        )
        schedule = (
            <div id='dayTwoAfternoon'>
                <div className="activity">
                    <div className="activityText">
                        <h2>Model Box Creation Workshop - 2:00PM</h2>
                        <p>Donyale Werle leads a hands-on activity where students build their own model box using a variety of materials.</p>
                        <p>Donyale Werle is a Tony & Obie winning Broadway set designer, now garden designer, horticulturist and flower farmer. She is known for her work in artistic sustainability.</p>              
                    </div>  
                </div>

                <div className="activity">
                    <div className="activityText">
                        <h2>Advocating for Yourself Discussion - 5:00PM</h2>
                        <p>In 2025, guests Sophia Skiles, Frankie Charles, and Cody Renard Richard joined the cohort for a discussion about advocating for yourself and living your artistic truth.</p>
                    </div>   
                </div>


            </div>
        )
    } else {
        EOD= (
            <div className="EOD">
                <h3>Lunch: 1:00PM</h3>
            </div>
        )
        schedule = (
            <div id='dayTwoMorning'>
                <div id='dayTwoMorningRow' >
                    <div className="activity">
                        <div className="activityText">
                            <h2>SB2D Orientation - 8:30AM</h2>
                            <p>An introduction to key instructors and an overview of community guidelines. </p>              
                        </div>  
                    </div>

                    <div className="activity">
                        <div className="activityText">
                            <h2>Intro to Design Disciplines - 10:00AM</h2>
                            <p>An activity based overview of theatre design disciplines led by designers in the field.</p>
                        </div>   
                    </div>                
                </div>

                <div id='lightingActivity' className="activity">
                    <div className="activityText">
                        <h2>Discipline Workshop - 11:00AM</h2>
                        <p>Discipline workshops are interactive explorations of a single design discipline led by a designer in the field.</p>
                        <p>In 2025, Clifton Taylor led a workshop on lighting design, joined by associate Deandra Bromfield.</p>
                        <p>Clifton Taylor’s work has been commissioned on Broadway, Off-Broadway, regionally, and in seventeen countries outside the US. He has taught and lectured at UNCSA, NYU, Yale, the New York Choreographic Institute, LDI, Showlight, Juilliard School, the University of Iowa, and the Royal University of Fine Arts in Phnom Penh, Cambodia.</p>
                    </div> 
                    <img src={LightingA}></img>
                    <img src={LightingB}></img>
                </div>

            </div>
        )
    }
    
    return (
        <>
            <div id="dayTwo" className="day">
                <div className="dayHeading">
                    <h1 className="dayName">Day Two</h1>
                    <button className="dayHalfButton" onClick={changeDayHalf}><FaArrowRight/></button>                
                </div>

                {schedule}
            </div>   
            {EOD}     
        </>

    )
}