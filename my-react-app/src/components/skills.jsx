import { useState } from "react";
import './skills.css';

const 
RenderSkills = ({ handleClick })=>{
    const [skills, setSkills] = useState(false);


    return (
        <div className='skills'>
        
            <div className="skills-list">
                 <div className="close-btn" onClick={() => handleClick(null)}>
                    ✕
        </div>
                <header className="head">
                    <h2 className='skillsTitle'>skills</h2>
                </header>
                <div className="ul-div">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                    
                    </ul>
             </div>
            </div>
         
    </div>
    )

}

export default RenderSkills