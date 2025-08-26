import './primaryButton.css'
import { FaArrowRight } from "react-icons/fa";

export default function PrimaryButton() {
   function goToApplications() {
      document.getElementById('applyBackground').scrollIntoView()
   }
   
   return (
    <button onClick={goToApplications} id='primaryButton'>Applications<FaArrowRight /> </button>
   ) 
}