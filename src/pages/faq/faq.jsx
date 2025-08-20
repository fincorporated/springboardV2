import './faq.css';

export default function FAQ() {
    function expandAnswer(answerID) {
        if (document.getElementById(answerID).style.display === 'block') {
            document.getElementById(answerID).style.display = 'none';
        } else {
            document.getElementById(answerID).style.display = 'block';
        }
        
    }
    
    return (
        <div id="faqBackground" className="background">
            <div id="faq" className="page">
                <h1>Frequently Asked Questions</h1>
                <div onClick={() => expandAnswer('answerA')} className="question">
                    <div className="questionTitle">
                        <h3>Who is eligible for the program?</h3>
                        <h2>+</h2>
                    </div>
                    <p id='answerA' className="questionAnswer">The Springboard to Design program is for high school students (grades 9-12) from underrepresented populations.</p>
                </div>
                <div onClick={() => expandAnswer('answerB')} className="question">
                    <div className="questionTitle">
                        <h3 >Where does Springboard to Design take place?</h3>
                        <h2>+</h2>
                    </div>
                    <p id='answerB' className="questionAnswer">Springboard to Design will take place in the theatre district in midtown Manhattan. The program has qualified staff that will supervise participants at all times during the program.</p>
                </div>
                <div onClick={() => expandAnswer('answerC')} className="question">
                    <div className="questionTitle">
                        <h3>What will participants do during the program?</h3>
                        <h2>+</h2>
                    </div>
                    <p id='answerC' className="questionAnswer">The Springboard to Design curriculum includes workshops, seminars, and access to important work on and off Broadway. Instructors will consist of award-winning artists who will create a collaborative environment for students, as they explore costume, set, lighting, projection, and sound design.</p>
                </div>
                <div onClick={() => expandAnswer('answerD')} className="question">
                    <div className="questionTitle">
                        <h3 >What are the dates of the program?</h3>
                        <h2>+</h2>
                    </div>
                    <p id='answerD' className="questionAnswer">In 2025, the program will take place from July 6th - July 12th. The days are roughly 9am-11pm, with significant breaks. Participants are taken to evening shows, which let out between 9pm and 11pm.</p>
                </div>
                <div onClick={() => expandAnswer('answerE')} className="question">
                    <div className="questionTitle">
                        <h3 >Are there any skill or previous experience requirements?</h3>
                        <h2>+</h2>
                    </div>
                    <p id='answerE' className="questionAnswer">No, not at all! This program is for everyone, especially those just starting out. Springboard to Design aims to provide students with access to theatre education they may not otherwise receive. Therefore, no prior experience is required to participate. Applicants with an interest in sewing, fashion, drawing, painting, building, creating, and storytelling are highly encouraged to apply. Students who already have a love for theater but don’t know where they fit in are also encouraged.</p>
                </div>
                <div onClick={() => expandAnswer('answerF')} className="question">
                    <div className="questionTitle">
                        <h3>When will I hear back if I applied?</h3>
                        <h2>+</h2>
                    </div>
                    <p id='answerF' className="questionAnswer">All students will be notified in spring of 2026</p>
                </div>
            </div>
        </div>
    )
}