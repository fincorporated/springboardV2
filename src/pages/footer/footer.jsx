
import SB2DMiniLogoWhite from './SB2DMiniLogoWhite.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import './footer.css';

export default function Footer() {
    return (
        <div className='background' id='footerBackground'>
            <div id="footer">
                <img src={SB2DMiniLogoWhite} alt='SB2D' id='miniLogoFooter' onClick={() => goToSection('heroBackground')}></img>
                <div id='socialMediaIcons'>
                    <a href='https://www.instagram.com/springboard2design?igsh=MTV6eDhzeGQ2YzNteg==' target='blank'><FaInstagram /></a>
                    <a href='https://www.facebook.com/share/1CLX9ZP7DV/?mibextid=LQQJ4d' target='blank'><FaFacebook /></a>
                    
                    <FaLinkedinIn />
                </div>
            </div>
        </div>
    )
}