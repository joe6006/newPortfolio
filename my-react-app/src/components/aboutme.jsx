

import React from "react"
import './aboutme.css'
import { useState } from "react"
const renderAboutMe= ()=>{

    const [show, setShow]= useState(false);


    return (
        <>
        <section>

            <button className="aboutme-button" onClick={()=>{setShow(!show)}}>About Me</button>
            {
                show&&(
                    <div className="aboutme-background">
                        <div className="head">
                        <h2>About me</h2>
                        </div>
                        <div className='aboutme-container'>
                            
                            <p>Hey there! I'm a software developer in training, currently making the leap into tech after working in a different field. It's been an exciting journey full of learning and growth.
                            I'm also a proud dad, which means I’ve mastered the art of multitasking and patience! When I'm not diving into code, you'll probably find me gaming — it's my favorite way to unwind and stay inspired. I'm passionate about building cool things and looking forward to starting a new chapter in my career.
                            </p>
                        </div>
                    </div>
            )}
        </section>
            </>
    )
}
export default renderAboutMe