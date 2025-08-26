import { dayData } from "./data";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";


function Day({name, activities, EOD}) {
    
    return (
        <div>
            <p>{name}</p>
            <Activity
                activities={activities}
                EOD={EOD}
            />
        </div>
    )
}



function Activity({activities, EOD}) {
    const [activityIndex, setActivityIndex] = useState(0);
    function nextActivity() {
        if (activityIndex == activities.length -1) {
            setActivityIndex(0)
        } else {
            setActivityIndex(activityIndex + 1);
        }       
    }

    let layout;

    const actName = activities[activityIndex].name;
    const actTime = activities[activityIndex].time;
    const actDescription = activities[activityIndex].description;
    const actPhotos = activities[activityIndex].imgURL;

    if (activities[activityIndex].numberOfPhotos > 1) {
        layout = (
            <div className="multiPhoto">
                <h3>{actName} </h3>
                <p>{actTime} </p>
                <p>{actDescription}</p>
                <img src={actPhotos[0]}></img>
                <img src={actPhotos[1]}></img>
                <img src={actPhotos[2]}></img>
            </div>
        )
    } else if (activities[activityIndex].numberOfPhotos == 1) {
        layout = (
            <div className="onePhoto">
                <h3>{actName} </h3>
                <p>{actTime} </p>
                <p>{actDescription}</p>
                <img src={actPhotos[0]}></img>
            </div>
        )
    } else {
        layout = (
            <div className="noPhotos">
                <h3>{actName} </h3>
                <p>{actTime} </p>
                <p>{actDescription}</p>
            </div>
        )
    }
    let section;
    if(activityIndex == activities.length - 1) {
        section = (
            <div>
                {layout}
                <h3>End of Day </h3>
                <p>{EOD} </p>
            </div>
        )
    } else {
        section = layout
    }

    return ( 
        <div>
            {section}
            <button onClick={nextActivity}>Next</button>
        </div>
        
    )
}

export default function WholeDay() {
    const [dayIndex, setDayIndex] = useState(0);
    

    function nextDay() {

        if (dayIndex == dayData.length - 1) {
            setDayIndex(0)
        } else {
            setDayIndex(dayIndex + 1);
        }
    }

    
    return (
        <div id="walkthroughContainer">
            <Day
                name={dayData[dayIndex].dayNumber}
                activities={dayData[dayIndex].activities}
                EOD={dayData[dayIndex].EOD}
            />

            <button id="nextDayButton" onClick={nextDay}><FaArrowDown/> </button>
        </div>
    )
}