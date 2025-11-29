import { useState } from "react";
import './skills.css';

const renderSkills = ()=>{
    const [skills, setSkills] = useState(false);


    return (
        <div className='skills'>
            <button className="skillsbutton" onClick={()=>{setSkills(!skills)}}>skills</button>
            { 
            skills&&(
            <div className="skills-list">
                <header className="head">
                    <h2 className='skillsTitle'>skills</h2>
                </header>
            <content className="ul-div">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    
                </ul>
           </content>
            </div>
           ) }
    </div>
    )

}

export default renderSkills