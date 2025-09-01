import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import DayOneGroupPhoto from './photos/day1Group.jpg'
import JohnProctor from './photos/johnProctor.jpg'
import './dayOne.css';

export default function DayOne() {
    const [dayHalf, setDayHalf] = useState('morning');
    function changeDayHalf() {
        if (dayHalf === 'morning') {
            setDayHalf('afternoon');
        } else {
            setDayHalf('morning');
        }
    }

    let schedule
    if (dayHalf === 'afternoon') {
        schedule = (
            <div id="dayOneAfternoon">
                <div className="activity">
                    <div className="activityText">
                        <h2>Performance - 2:00PM</h2>
                        <p>The cohort typically sees a matinee production. </p>
                        <p>In 2025, the cohort saw John Proctor is the Villain.</p>                        
                    </div>

                    <img src={JohnProctor}></img>                    
                </div>
                <div className="EOD">
                    <h3>End of Day: 4:00PM</h3>
                </div>
            </div>
        )
    } else {
        schedule = (
            <div id="dayOneMorning">
                <div className="activity">
                    <div className="activityText">
                        <h2>Student Meet & Greet - 11:00AM</h2>
                        <p>The cohort is given a chance to get to know each other.</p>
                        <p>In 2025, this event was held at the Museum of Broadway, followed by a tour. </p>                   
                    </div>
                    <img src={DayOneGroupPhoto}></img>                 
                </div>
                <div className="EOD">
                    <h3>Lunch: 12:30PM</h3>
                </div>
            </div>
        )
    }
    
    return (
        <div id="dayOne" className="day">
            <div className="dayHeading">
                <h1 className="dayName">Day One</h1>
                <button className="dayHalfButton" onClick={changeDayHalf}><FaArrowRight/></button>                
            </div>

            {schedule}
        </div>
    )
}