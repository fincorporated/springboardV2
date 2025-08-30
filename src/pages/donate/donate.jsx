import SecondaryButton from "../../elements/buttons/secondaryButton/secondaryButton";
import './donate.css'
import { FaShareSquare } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";


export default function Donate() {
    async function shareThisPage() {
        const shareData = {
            title: 'SB2D',
            text: 'Apply for Springboard to Design',
            url: 'https://springboardtodesign.com'
        }

        await navigator.share(shareData)
    }
    
    return (
        <div id="donateBackground" className="background">
            <div className="page" id="donate">
                <h1>How you can support Springboard to Design</h1>
                <div id="methods">
                    <div onClick={shareThisPage} className="method">
                        <h2>Share</h2>
                        <p>Tell an eligible student or high school teacher about the program.</p>
                        <div className="icon">
                            <FaShareSquare />
                        </div>
                        
                    </div>
                    <div className="method">
                    <a href="https://www.instagram.com/springboard2design?igsh=MTV6eDhzeGQ2YzNteg==" target="blank"><h2>Promote</h2></a> 
                    <a href="https://www.instagram.com/springboard2design?igsh=MTV6eDhzeGQ2YzNteg==" target="blank"><p>Post about Springboard to Design on your social media to help get the word out.</p></a>
                        <a href="https://www.instagram.com/springboard2design?igsh=MTV6eDhzeGQ2YzNteg==" target="blank" className="icon">
                            <FaShareAlt />
                        </a>
                    </div>
                    <div className="method">
                    <a href="https://givebutter.com/Cs4A3U" target="blank"><h2>Donate</h2></a>
                    <a href="https://givebutter.com/Cs4A3U" target="blank"><p>If you have the means, contributing financially goes a long way in keeping the program free for students.</p></a>
                        <a href="https://givebutter.com/Cs4A3U" target="blank" className="icon">
                            <FaDonate />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}