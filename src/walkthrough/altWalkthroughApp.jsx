import DayOne from "./days/dayOne";
import DayTwo from "./days/dayTwo";
import { useState } from "react";
import './altWalkthrough.css';

export default function AltWalkthroughApp() {
    const [dayHalf, setDayHalf] = useState('morning');
    const [dayIndex, setDayIndex] = useState(0);
    const days = [<DayOne />, <DayTwo/>];
    const [activeTab, setActiveTab] = useState('day1');

    function changeDayHalf() {
        if (dayHalf === 'morning') {
            setDayHalf('afternoon')
        } else {
            setDayHalf('morning');
        }
    }

    function selectDay(selectedIndex) {
        setDayIndex(selectedIndex)
        const selector = `day${selectedIndex+1}`
        setActiveTab(selector)


    }

    
    return (
        <div id="walkthrough">
            {days[dayIndex]}
            

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