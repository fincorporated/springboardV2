import PrimaryButton from "../../elements/buttons/primaryButton/primaryButton"
import './quoteBlock.css'

export default function QuoteBlock() {
    return (
        <div className="background" id="quoteBlockBackground">
            <div className="page">
                <div id="quoteBlockContainer">
                    <h1>"This program has truly changed my life and my perspective on how close my dreams might actually be."</h1>
                    <PrimaryButton />
                </div>
            </div>
        </div>
    )
}