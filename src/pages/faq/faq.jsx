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
                        <h3>Am I eligible?</h3>
                        <h2>+</h2>
                    </div>
                    <p id='answerA' className="questionAnswer">The Design Action Coalition was created to put meaningful effort towards ending racial inequities in North American theater. SB2D was created as an opportunity for underrepresented high school students, including students who have limited or no access to theatre. The Springboard to Design program recognizes a wide range of identities as underrepresented in theatre design.</p>                </div>
                <div onClick={() => expandAnswer('answerB')} className="question">
                    <div className="questionTitle">
                        <h3>What costs are associated with the program?</h3>
                        <h2>+</h2>
                    </div>
                    <p id='answerB' className="questionAnswer"><span>Here’s what we cover:</span>  <br/> - SB2D covers tuition for all students including workshops, show tickets, transportation within the city, and materials. <br/> - Students and guardians coming from outside the NYC area are eligible for free housing. <br/> - SB2D provides students one meal a day during program hours. <br/> <span>Here’s what SB2D students are responsible for:</span> <br/> - Students are responsible for their transportation to and from the program, as well as “on your own” meals, noted on the schedule. </p>
                </div>
                <div onClick={() => expandAnswer('answerC')} className="question">
                    <div className="questionTitle">
                        <h3>Are there any skill or previous experience requirements?</h3>
                        <h2>+</h2>
                    </div>
                    <p id='answerC' className="questionAnswer">No, not at all! This program is for everyone, especially those just starting out. Springboard to Design aims to provide students with access to theatre education they may not otherwise receive. Therefore, no prior experience is required to participate. Applicants with an interest in sewing, fashion, drawing, painting, building, creating, and storytelling are highly encouraged to apply. Students who already have a love for theater but don’t know where they fit in are also encouraged.</p>
                </div>
                <div onClick={() => expandAnswer('answerD')} className="question">
                    <div className="questionTitle">
                        <h3 >What supervision will program participants have?</h3>
                        <h2>+</h2>
                    </div>
                    <p id='answerD' className="questionAnswer">The program has qualified staff that will supervise participants during program hours. At any given time, the student to staff ratio is roughly 4:1.</p>
                </div>
                <div onClick={() => expandAnswer('answerE')} className="question">
                    <div className="questionTitle">
                        <h3 >When will I hear back if I applied?</h3>
                        <h2>+</h2>
                    </div>
                    <p id='answerE' className="questionAnswer">Decisions for the 2026 program will be released in the spring.</p>
                </div>
            </div>
        </div>
    )
}