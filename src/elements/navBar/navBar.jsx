import './navBar.css'
import SB2DMiniLogo from '/src/assets/SB2DMiniLogo.png'

export default function NavBar() { 
    return (
        <div id='navBar'>
            <div id='inner'>
                <img src={SB2DMiniLogo} alt='SB2D' id='miniLogo'></img>
                <ul id='navBarMenu'>
                    <li>About</li>
                    <li>Get Involved</li>
                    <li>Contributors</li>
                    <li>Resources</li>
                    <li>FAQ</li>
                </ul>                
            </div>

        </div>
    )
}