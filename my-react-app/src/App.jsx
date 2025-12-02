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
import renderAboutMe from './components/aboutme';
import renderSkills from './components/skills';

const App = () => {
  const [count, setCount] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  
   const handleButtons = [EmblaCarousel,renderAboutMe,renderSkills];
  const handleClick = (index) => {
       

    }
    const isDisabled= (index)=>{
       if(handleButtons){

       }
        
    }

  
  return (
    <>
    {renderPhotos()}
    <div className="overlay"></div>
    <div className='nav-bar'>
    <header>
            <h1 className="logo" 
            style={{
              
              
              fontWeight:'20'
              
            }}>Joseph Hill</h1>   
                
      </header>
      <div className='button-list'>
          <RenderAboutMe  onClick={() => handleClick("one")} disabled={isDisabled("one")}/>
          <RenderSkills onClick={() => handleClick("two")}
        disabled={isDisabled("two")}/>
          <EmblaCarousel onClick={() => handleClick("three")}
        disabled={isDisabled("three")}/>
      </div>
      </div>
      <SiteList/> 
     
      
    
        
    </>
  )
}

export default App


