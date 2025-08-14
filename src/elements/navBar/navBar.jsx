import './navBar.css'
import SB2DMiniLogo from '/src/assets/SB2DMiniLogo.png';
import PrimaryButton from "../../elements/buttons/primaryButton/primaryButton";
import SecondaryButton from '../buttons/secondaryButton/secondaryButton';

export default function NavBar() { 
    return (
        <div id='navBar'>
            <div id='inner'>
                <img src={SB2DMiniLogo} alt='SB2D' id='miniLogo'></img>
                <ul id='navBarMenu'>
                    <li>About</li>
                    <li>What to Expect</li>
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