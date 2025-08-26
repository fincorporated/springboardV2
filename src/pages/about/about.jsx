import './about.css'
import { FaTheaterMasks } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaCity } from "react-icons/fa";

export default function AboutPage() {
    return (
        <div className="background" id="aboutBackground">
            <div id='about' className="page">
                <div id="aboutContainer">
                    <h1>About Springboard to Design</h1>
                    <div id='mainPara'>
                        <p >Springboard to Design encourages and mentors high school students from underrepresented populations to explore the process of theatrical collaboration and the many avenues of American Theatre design. Led by renowned members of the contemporary theatre in the heart of NYC, the Springboard to Design curriculum includes workshops, seminars, and access to important work on and off Broadway. Instructors consist of award-winning artists who create a collaborative environment for students, as they explore costume, set, lighting, projection, and sound design.</p>
                        <p>Springboard to Design was recognized by the 2023 Anthem Awards as a Bronze Winner for Education, Arts, & Culture - Community Engagement.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}