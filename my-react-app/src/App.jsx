import { useState } from 'react'
import { useEffect, useRef } from 'react';
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
   
function useHorizontalScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return ref;
}
const containerRef = useHorizontalScroll();

  return (
    <>
    <header  >
       
            <h1 className="logo" 
            style={{
              
              fontFamily:'Courier New',
              fontWeight:'10'
              
            }

            }

            >Joseph Hill</h1>
        
    </header>

    <div className='skills'>
      <h2 className='skillsTitle'>skills</h2>
      <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          
      </ul>
    </div>
    <div className='aboutme-container'>
      <h2 >About me</h2>
          <p>Hey there! I'm a software developer in training, currently making the leap into tech after working in a different field. It's been an exciting journey full of learning and growth.
            I'm also a proud dad, which means I’ve mastered the art of multitasking and patience! When I'm not diving into code, you'll probably find me gaming — it's my favorite way to unwind and stay inspired. I'm passionate about building cool things and looking forward to starting a new chapter in my career.
         </p>
    </div>

              <div className="card-container"  ref={containerRef}>
                <div className='card' >
                    <h5>budget application</h5>
                    <p >fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p>
                </div>
                <div className='card'>
                    <h5>budget application</h5>
                    <p >fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p >
                </div>
                <div className='card' >
                    <h5>budget application</h5>
                    <p >fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p >
                </div>
                <div className="card" >
                    <h5>budget application</h5>
                    <p >fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p >
                </div>
                
                <div className='card'>
                    <h5>password generator</h5>
                    
                    <p >"checkout mypassword generator!"</p>
                </div>
                <div className='card'>
                    <h5>password generator</h5>
                    
                    <p >"checkout mypassword generator!"</p>
                </div>
            </div>
        
    </>
  )
}

export default App
