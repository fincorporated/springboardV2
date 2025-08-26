import './navBar.css'
import SB2DMiniLogo from '/src/assets/SB2DMiniLogo.png';
import PrimaryButton from "../../elements/buttons/primaryButton/primaryButton";
import SecondaryButton from '../buttons/secondaryButton/secondaryButton';

export default function NavBar() { 
    function goToSection(section) {
        document.getElementById(section).scrollIntoView();
    }

    const walkthroughURL = 'http://' + window.location.hostname + '/walkthrough'
    console.log(walkthroughURL)
    
    return (
        <div id='navBar'>
            <div id='inner'>
                <img src={SB2DMiniLogo} alt='SB2D' id='miniLogo' onClick={() => goToSection('heroBackground')}></img>
                <ul id='navBarMenu'>
                    <li onClick={() => goToSection('aboutBackground')}>About</li>
                    <li onClick={() => goToSection('donateBackground')}>Support</li>
                    <li onClick={() => goToSection('contributorsBackground')}>Contributors</li>
                    <li onClick={() => goToSection('faqBackground')}>FAQ</li>
                    <li onClick={() => goToSection('contactBackground')}>Contact</li>
                </ul>  
                <div id='navBarButtons'>
                    <SecondaryButton />
                    <PrimaryButton />                        
                </div>
            </div>

        </div>
    )
}