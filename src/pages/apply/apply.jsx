import PrimaryButton from "../../elements/buttons/primaryButton/primaryButton";
import './apply.css';

export default function Apply() {
    function goToNewsletter() {
        document.getElementById('newsletter').scrollIntoView();
    }
    
    return (
        <div className="background" id="applyBackground">
            <div id="apply" className="page">
                <h1>Apply for Springboard to Design</h1>
                <p>The SB2D application for the 2026 summer program will open on September 15th, 2025. Applications will close on December 15th, 2025. <span onClick={goToNewsletter}>Sign up for our newsletter</span> to receive the application link directly to your inbox when it becomes available.</p>
                <p>The application will include a few short essays, a brief introduction video, and an original piece of artwork. </p>
                <p>There will be a $25 application fee. If for any reason you are unable to afford the fee, or if it causes stress on family finances, please <span onClick={goToNewsletter}>contact us</span> to receive a voucher. </p>
                <p>This application fee goes directly back into the program and helps keep the week-long experience free for students.</p>
                {/* <PrimaryButton /> */}
            </div>
        </div>
    )
}