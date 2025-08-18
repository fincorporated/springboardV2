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
                <img src={SB2DMiniLogo} alt='SB2D' id='miniLogo'></img>
                <ul id='navBarMenu'>
                    <li onClick={() => goToSection('quoteBlockContainer')}>About</li>
                    <a href='http://localhost:5173/walkthrough' target='_blank'><li>What to Expect</li></a> 
                    <li>Get Involved</li>
                    <li>FAQ</li>
                </ul>  
                <div id='navBarButtons'>
                    <SecondaryButton />
                    <PrimaryButton />                        
                </div>
            </div>

        </div>
    )
}