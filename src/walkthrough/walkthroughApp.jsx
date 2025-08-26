import './walkthrough.css'
import { dayData } from './walkthroughElements/data';
import { useState } from 'react';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Fragment } from 'react';

export default function Walkthrough() {
    const [dayIndex, setDayIndex] = useState(0);
    const [halfDay, setHalfDay] = useState('morning');
    const [activeTab, setActiveTab] = useState('day1');
    
    function Day({name, afternoon, EOD, morning, lunch}) {
        
    
        function switchDayHalf() {
            if (halfDay === 'morning') {
                setHalfDay('afternoon');
            } else {
                setHalfDay('morning');
            }       
        }
    
        let activities;
        let endOfHalfDay;
        if (halfDay === 'morning') {
            activities = morning;
            endOfHalfDay = 'Lunch: ' + lunch;
        } else {
            activities = afternoon;
            endOfHalfDay = 'End of day: ' + EOD;
        }
    
        return (
            <div className='dayContainer'>
                <div id='dayTitleButton'>
                    <h1 id='dayName'>{name} - {halfDay === 'morning' ? 'AM' : 'PM'}</h1>
                    <button onClick={switchDayHalf}><FaArrowRight /></button>    
                </div>
                
                <HalfDay
                    activities={activities}
                    endOfHalfDay={endOfHalfDay}
                />
            </div>
        )
    }
    
    function Activity({actName, actTime, actDescription, actPhotos}) {  
        let layout;

        const description = actDescription.map(line => 
            <p>{line}</p>
        )
    
        if (actPhotos.length > 1) {
            layout = (
                <div className='activity' id="multiPhoto">
                    <h3>{actName} {actTime}</h3>
                    <div>
                        <p className='paragraphs'>{description}</p>     
                        <img src={actPhotos[0]}></img>                        
                    </div>
                    <div>
                        <img src={actPhotos[1]}></img>
                        <img src={actPhotos[2]}></img>    
                    </div>
                    
                </div>
            )
        } else if (actPhotos.length == 1) {
            layout = (
                <div className='activity' id="onePhoto">
                    <div className='textContent'>
                        <h3>{actName} {actTime}</h3>
                        <div>{description}</div>               
                    </div>
                    <img src={actPhotos[0]}></img>
                </div>
            )
        } else {
            layout = (
                <div className='activity' id="noPhotos">
                    <h3>{actName} {actTime}</h3>
                    <div>{description}</div>     
                </div>
            )
        }
    
        return ( 
            <div>
                {layout}
            </div>
        )
    }
    
    function HalfDay({activities, endOfHalfDay}) {
    
        const listOfActivities = activities.map((activity => 
            <Fragment key={activity.id}>
                <Activity
                    actName={activity.name}
                    actTime = {activity.time}
                    actDescription = {activity.description}
                    actPhotos = {activity.imgURL}
                />            
            </Fragment>
    
        ))
    
        return (
            <div id='halfDay'>
                {listOfActivities}
                <h2 className='EOD'> {endOfHalfDay} </h2>
            </div>
        )
    
    }
    
    function selectDay(selectedIndex) {
        setDayIndex(selectedIndex)
        const selector = `day${selectedIndex+1}`
        setActiveTab(selector)
        setHalfDay('morning')

    }

    
    return (
        <div id="walkthrough">
            <Day
                name={dayData[dayIndex].dayNumber}
                afternoon={dayData[dayIndex].afternoon}
                EOD={dayData[dayIndex].EOD}
                morning={dayData[dayIndex].morning}
                lunch={dayData[dayIndex].lunch}
            />

            <div id='dayNavFooter'>
                <button className='dayButton' id="day1" onClick={() => selectDay(0)}
                   style={{ backgroundColor: activeTab === 'day1' ? '#DA4643' : 'white', color: activeTab === 'day1' ? 'white' : '#DA4643'}} 
                >{activeTab === 'day1' ? 'Day 1' : '1'}</button>
                <button className='dayButton' id="day2" onClick={() => selectDay(1)}
                    style={{ backgroundColor: activeTab === 'day2' ? '#DA4643' : 'white', color: activeTab === 'day2' ? 'white' : '#DA4643'}}
                >{activeTab === 'day2' ? 'Day 2' : '2'}</button>
                <button className='dayButton' id="day3" onClick={() => selectDay(2)}
                    style={{ backgroundColor: activeTab === 'day3' ? '#DA4643' : 'white', color: activeTab === 'day3' ? 'white' : '#DA4643'}}
                >{activeTab === 'day3' ? 'Day 3' : '3'}</button>
                <button className='dayButton' id="day4" onClick={() => selectDay(3)}
                    style={{ backgroundColor: activeTab === 'day4' ? '#DA4643' : 'white', color: activeTab === 'day4' ? 'white' : '#DA4643'}}
                >{activeTab === 'day4' ? 'Day 4' : '4'}</button>
                <button className='dayButton' id="day5" onClick={() => selectDay(4)}
                    style={{ backgroundColor: activeTab === 'day5' ? '#DA4643' : 'white', color: activeTab === 'day5' ? 'white' : '#DA4643'}}
                >{activeTab === 'day5' ? 'Day 5' : '5'}</button>
                <button className='dayButton' id="day6" onClick={() => selectDay(5)}
                    style={{ backgroundColor: activeTab === 'day6' ? '#DA4643' : 'white', color: activeTab === 'day6' ? 'white' : '#DA4643'}}
                >{activeTab === 'day6' ? 'Day 6' : '6'}</button>
                <button className='dayButton' id="day7" onClick={() => selectDay(6)}
                    style={{ backgroundColor: activeTab === 'day7' ? '#DA4643' : 'white', color: activeTab === 'day7' ? 'white' : '#DA4643'}}
                >{activeTab === 'day7' ? 'Day 7' : '7'}</button>

            </div>
            
        </div>
    )
}
