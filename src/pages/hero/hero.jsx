import sb2dBlack from '/src/assets/sb2dbasicblack.png';
import sb2dWhite from '/src/assets/sb2dwhite.png';
import './hero.css'
import PrimaryButton from '../../elements/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../elements/buttons/secondaryButton/secondaryButton';
import NavBar from '../../elements/navBar/navBar';

export default function Hero() {
    return (
        <div className='background' id='heroBackground'>
            <div className='page'>
                <div className='heroContainer'>
                    <div className='textContent'>
                        <h1>Builders, storytellers, and curious creatives—<span className='emphasis'>you belong here.</span></h1>
                        <p className='elevatorPitch'>Springboard to Design gives students the chance to dive into the world of theatre design and discover new artistic possibilities—no experience required. With housing available and tuition fully covered, this program is built to remove barriers for the next generation of theatre designers–expanding their sense of community, collaboration, and imagination.</p>
                        <div id='buttons'>
                            <PrimaryButton />  
                            <SecondaryButton />                         
                        </div>
                    </div>
                
                    <div id='logo'>
                        <img id='heroImg' src='src/pages/hero/2025GroupPhoto.jpg' ></img>
                        <p>Group photo of the SB2D 2025 cohort. Photo by Rebecca J Michelson.</p>                                   
                    </div>
                </div>
            </div>            
        </div>

    )
}