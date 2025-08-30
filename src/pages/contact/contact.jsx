import { useState } from "react";
import './contact.css'
import Newsletter from "./newsletter/newsletter";

export default function Contact() {
    const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "dd666cba-2a27-43f2-bc64-c566c964607a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
        <div id="contactBackground" className="background">
            <div className="page" id="contact">
                <div id="contactForm">
                    <h1>Contact Us</h1>
                    <div id="contactUsMessage">
                      <p>Have a question that can't be answered in our FAQs?</p>  
                      <p>Send us a message!</p>    
                    </div>
                                  
                    <form onSubmit={onSubmit}>
                        <div id="inputs">
                            <input id="contactFormName" type="text" name="name" required placeholder="Name"/>
                            <input id="contactFormEmail" type="email" name="email" required placeholder="Email"/>                            
                        </div>

                        <textarea name="message" required placeholder="Message"></textarea>
                
                        <button type="submit">Submit Form</button>
            
                    </form>
                    <span>{result}</span>
                </div> 
                <Newsletter />               
            </div>
       
        </div>

    );
  }