

import React from "react"
import './aboutme.css'
import { useState } from "react"
const renderAboutMe= ()=>{

    const [show, setShow]= useState(false);
    

    return (
        <>
        <section>
           
                    <div className="aboutme-background">
                        <div className="head">
                        <h2>About me</h2>
                        </div>
                        <div className='aboutme-container'>
                            
                            <p>Hey there! I'm a software developer in training, currently making the leap into tech after working in a different field. It's been an exciting journey full of learning and growth.
                            I'm also a proud dad, which means I’ve mastered the art of multitasking and patience! When I'm not diving into code, you'll probably find me gaming — it's my favorite way to unwind and stay inspired. I'm passionate about building cool things and looking forward to starting a new chapter in my career.
                            </p>
                            <div className="education">
                            <h1>Current projects/education</h1>
                            <p>[% == progress]</p>
                                <ul>
                                    <li>Studying for compTIA A+ certification [1201 - 80% , 1202 - 20%]</li>
                                    <li>IBM Software Developer certificate(course era/In progress)[75%]</li>
                                    <li>started learning python, I am familiar with JS and C++[10%]</li>
                                    <li>Ubuntu Linux [10%]</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            
        </section>
            </>
    )
}
export default renderAboutMe