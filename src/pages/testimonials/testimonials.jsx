import './testimony.css'
import HandsOnPhoto from './HandsOnPhoto.jpg'

export default function TestimonyPage() {
    return (
        <div className="background" id="testimonyBackground">
            <div className="page">
                <div id="testimonyContainer">
                    <div id="testimonyImg">
                        <img src={HandsOnPhoto} id='handsOnPhoto'></img>
                        <p id='testimonyImgCaption' >SB2D students visiting Tricorne Inc costume shop. Photo by Rebecca J Michelson.</p>
                    </div>
                    
                    <div id='quotes'>
                        <h2>What our students are saying</h2>
                        <div className='quote' id='quote1'>
                                <p className='quoteText'>"Even though I knew in the back of my head that I wasn't alone as a minority, it was extremely powerful to hear that even industry professionals have had the same experiences."</p>                          
                            </div>
                            <div className='quote' id='quote2'>
                                <p className='quoteText'>"Hearing the guest artists talk about their struggles but also their accomplishments has given me hope for what my future may hold."</p>                        
                            </div>
                            <div className='quote' id='quote3'>
                                <p className='quoteText'>"It is amazing getting to see not only design but also the world through the eyes of such a diverse group of people."</p>                        
                            </div>
                            <div className='quote' id='quote4'>
                                <p className='quoteText'>"I will never forget this program and the people making it possible."</p>                          
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}