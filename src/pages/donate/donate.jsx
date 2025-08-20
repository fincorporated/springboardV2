import SecondaryButton from "../../elements/buttons/secondaryButton/secondaryButton";
import './donate.css'


export default function Donate() {
    return (
        <div id="donateBackground" className="background">
            <div className="page" id="donate">
                <h1>Support Springboard to Design</h1>
                <p>Springboard to Design is a not-for-profit organization and our work is only made possible by the contributions of our generous supporters.</p>
                <p>Your contributions allow us to provide:</p>
                <div id="provisions">
                    <div className="provision">
                        <h3>Meals</h3>
                        <p>during programming throught the week</p>
                    </div>
                    <div className="provision">
                        <h3>Housing</h3>
                        <p>for students outside the NYC area</p>
                    </div>
                    <div className="provision">
                        <h3>Tickets</h3>
                        <p>to 5+ Broadway or Off-Broadway productions</p>
                    </div>
                    <div className="provision">
                        <h3>Design Workshops</h3>
                        <p>with professional guest artists across multiple disciplines</p>
                    </div>
                </div>
                <SecondaryButton />
            </div>
        </div>
    )
}