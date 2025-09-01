import './videoPage.css'
import Sizzle from './S2D-LPA-01.mov'

export default function VideoPage() {
    return (
        <div className='page'>
            <video width='900px' height='580px' controls>
                <source src={Sizzle} type='video/mp4'></source>
            </video>
        </div>
        
    )
}