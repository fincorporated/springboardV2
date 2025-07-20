import './about.css'
import { FaTheaterMasks } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaCity } from "react-icons/fa";

export default function AboutPage() {
    return (
        <div className="background" id="aboutBackground">
            <div className="page">
                <div id="aboutContainer">
                    <h1>About the program</h1>
                    <p id='mainPara'>Springboard to Design encourages and mentors high school students from underrepresented populations to explore the process of theatrical collaboration and the many avenues of American Theatre design. Led by renowned members of the contemporary theatre in the heart of NYC, the Springboard to Design curriculum includes workshops, seminars, and access to important work on and off Broadway. Instructors consist of award-winning artists who create a collaborative environment for students, as they explore costume, set, lighting, projection, and sound design.</p>
                    <div className='section' id='section1'>
                        <FaTheaterMasks size="5em" />    
                        <p id='para1'>Springboard to Design aims to provide students with access to theatre education they may not otherwise receive. Therefore, no prior experience is required to participate. Applicants with an interest in sewing, fashion, drawing, painting, building, creating, and storytelling are highly encouraged to apply. Students who already have a love for theater but don’t know where they fit in are also encouraged.</p>
                    </div>
                    <div className='section' id='section2'>
                        <FaAward size="5em" />   
                        <p id='para2'>Springboard to Design was recognized by the 2023 Anthem Awards as a Bronze Winner for Education, Arts, & Culture - Community Engagement.</p>
                    </div>
                    <div className='section' id='section3'>
                        <FaCity size="5em" />
                        <p id='para3'>Springboard to Design is a tuition-free program. Students are responsible for getting to and from the program each day. Those living outside the NYC area are encouraged to apply: the program provides housing for students and one guardian each at no cost. Any student requesting a room must have a parent or guardian with them for the duration of their stay/outside the hours of the program.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}