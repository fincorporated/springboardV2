export default function WhatToExpect() {
    const base = window.location.hostname;
    const url = base + '/walkthrough'
    return (
        <div className="background" id="wteBackground">
            <div className="page">
                <div id="wteTextContainer">
                    <h2>What to expect</h2>
                    <p>Springboard to Design is an intensive, one week program, packed with activities for students. Days start early and end late, the schedule may not be suited for all students, please consider this when applying.</p>
                    <p>Please check out our interactive program walk-through and download a <span><a>sample schedule here.</a></span></p>
                </div>
                <div id="wteButtonContainer">
                    <button>
                        <a>{url}</a>
                    </button>
                </div>
            </div>

        </div>
    )
}