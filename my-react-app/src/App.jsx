import { useState } from 'react'
import { useEffect, useRef } from 'react';
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SiteList from './components/sites';
import { EmblaCarousel } from './components/project';
import RenderAboutMe from './components/aboutme';
import RenderSkills from './components/skills';
import  { renderPhotos } from './components/gamePics';
import { use } from 'react';
const App = () => {
  const [count, setCount] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
   const handleButtons = () => {
    
   
   }
  
  return (
    <>
    {renderPhotos()}
    <div className="overlay"></div>
    <div className='content'>
    <header>
            <h1 className="logo" 
            style={{
              
              
              fontWeight:'20'
              
            }}>Joseph Hill</h1>   
                
      </header>
      <div className='button-list'>
       <RenderAboutMe/>
      <RenderSkills/>
      <EmblaCarousel/>
      </div>
      </div>
      <SiteList/> 
     
      
    
        
    </>
  )
}

export default App
function newFunction() {
  (() => {
  });
}

