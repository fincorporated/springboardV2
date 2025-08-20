import { dayData } from "./data";
import { useState } from "react";

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

    if (activities[activityIndex].numberOfPhotos > 1) {
        layout = (
            <div className="multiPhoto">
                <h3>{activities[activityIndex].name} </h3>
                <p>{activities[activityIndex].time} </p>
                <p>{activities[activityIndex].description}</p>
                <p>image</p>
                <p>image</p>
                <p>image</p>
            </div>
        )
    } else {
        layout = (
            <div className="onePhoto">
                <h3>{activities[activityIndex].name} </h3>
                <p>{activities[activityIndex].time} </p>
                <p>image</p>
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
        <>
            <Day
                name={dayData[dayIndex].dayNumber}
                activities={dayData[dayIndex].activities}
                EOD={dayData[dayIndex].EOD}
            />

            <button onClick={nextDay}>Next</button>
        </>
    )
}