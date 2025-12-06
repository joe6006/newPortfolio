import { useState } from 'react'

import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SiteList from './components/sites';
import EmblaCarousel  from './components/project';
import RenderAboutMe from './components/aboutme';
import RenderSkills from './components/skills';
import  { renderPhotos } from './components/gamePics';


const App = () => {
  const [count, setCount] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  
 
  const handleClick = (buttonID) => {
        setActiveButton(true);
        if(activeButton===buttonID){
          setActiveButton(null)

        }else{
          setActiveButton(buttonID)
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
                <RenderAboutMe  onClick={() => handleClick(1)} />
                <RenderSkills onClick={() => handleClick(2)}/>
                <EmblaCarousel onClick={() => handleClick(3)}/>
            </div>
          </div>
      <SiteList/> 
     
      
    
        
    </>
  )
}

export default App


