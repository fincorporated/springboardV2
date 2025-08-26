import { useState } from "react";
import './contact.css'
import Newsletter from "./newsletter/newsletter";

export default function Contact() {
    const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a3aa693b-1e55-406d-b79e-aec204f63235");
  
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
                    <p>Have any questions? Send us a message!</p>                  
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