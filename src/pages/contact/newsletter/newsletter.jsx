import { useState } from "react";
import './newsletter.css'


export default function Newsletter() {
    const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Submitting....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a3aa693b-1e55-406d-b79e-aec204f63235");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Done");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
        <div >
            <div id="newsletter">
                <h1>Springboard to Design Newsletter</h1>
                <p>Subscribe to our newsletter to get all the latest updates about the program sent straight to you.</p>
                <div id="newsletterSignUpForm">
                    <form onSubmit={onSubmit}>
                        <div id="signUpInput">
                            <input type="email" name="email" required placeholder="Email"/>                            
                        </div>
                        <button type="submit">Subscribe</button>
            
                    </form>
                    <span>{result}</span>
                </div>                
            </div>
       
        </div>

    );
  }