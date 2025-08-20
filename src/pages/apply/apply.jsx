import PrimaryButton from "../../elements/buttons/primaryButton/primaryButton";
import './apply.css';

export default function Apply() {
    return (
        <div className="background" id="applyBackground">
            <div id="apply" className="page">
                <h1>Apply for Springboard to Design</h1>
                <p>Applications are open now through December 15th 2025. All applicants will be notified of their decision in spring of 2026.</p>
                <PrimaryButton />
            </div>
        </div>
    )
}