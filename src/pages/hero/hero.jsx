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
                        <p className='elevatorPitch'>Springboard to Design gives students the chance to dive into the world of theatre design and discover new artistic possibilities—no experience required. With housing available and tuition fully covered, this program is built to remove barriers for the next generation of theatre designers.</p>
                        <div id='buttons'>
                            <PrimaryButton />  
                            <SecondaryButton />                         
                        </div>
                    </div>
                
                    <div id='logo'>
                        <picture>
                            <source media='(prefers-color-scheme: light)' srcSet={sb2dBlack} />
                            <source media='(prefers-color-scheme: dark)' srcSet={sb2dWhite} />
                            <img src={sb2dBlack} id='logoImg' alt='Springboard to Design Logo' />
                        </picture>                     
                    </div>
                </div>
            </div>            
        </div>

    )
}