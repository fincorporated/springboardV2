import { contributorData } from "./contributorData"
import { useState } from "react"
import './contributors.css';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


export default function Contributors() {
    const [index, setIndex] = useState(0);
    const [indexB, setIndexB] = useState(1);
    const [indexC, setIndexC] = useState(2);
    const [indexD, setIndexD] = useState(3);

    function next() {
        if (index == contributorData.length-1) {
            setIndex(0);
        } else {
            setIndex(index + 1)
        }

        if (indexB == contributorData.length-1) {
            setIndexB(0);
        } else {
            setIndexB(indexB + 1)
        }
        
        if (indexC == contributorData.length-1) {
            setIndexC(0);
        } else {
            setIndexC(indexC + 1)
        }

        if (indexD == contributorData.length-1) {
            setIndexD(0);
        } else {
            setIndexD(indexD + 1)
        }
    }

    function back() {
        if (index == 0) {
            setIndex(contributorData.length-1)
        } else {
            setIndex(index - 1)
        }
        
        if (indexB == 0) {
            setIndexB(contributorData.length-1)
        } else {
            setIndexB(indexB - 1)
        }

        if (indexC == 0) {
            setIndexC(contributorData.length-1)
        } else {
            setIndexC(indexC - 1)
        }

        if (indexD == 0) {
            setIndexD(contributorData.length-1)
        } else {
            setIndexD(indexD - 1)
        }
    }

    let profileA = contributorData[index];
    let profileB = contributorData[indexB];
    let profileC = contributorData[indexC];
    let profileD = contributorData[indexD];
    
    return (
        <div className="background" id="contributorsBackground">
            <div className="page" id="contributors">
                <h1>Program Contributors</h1>
                <div id="profilesContainer">
                    <div className="contributor">
                        <img src={profileA.img} ></img>
                        <h3>{profileA.name}</h3>
                        <p>{profileA.title} </p>
                    </div>
                    <div id="profileB" className="contributor">
                        <img src={profileB.img} ></img>
                        <h3>{profileB.name}</h3>
                        <p>{profileB.title} </p>
                    </div>   
                    <div id="profileC" className="contributor">
                        <img src={profileC.img} ></img>
                        <h3>{profileC.name}</h3>
                        <p>{profileC.title} </p>
                    </div> 
                    <div id="profileD" className="contributor">
                        <img src={profileD.img} ></img>
                        <h3>{profileD.name}</h3>
                        <p>{profileD.title} </p>
                    </div>                 
                </div>
                <div id="contributorButtons">
                    <button onClick={back}><FaArrowLeft /> </button>
                    <button onClick={next}><FaArrowRight /></button>
                </div>
                
            </div>
        </div>
    )
}