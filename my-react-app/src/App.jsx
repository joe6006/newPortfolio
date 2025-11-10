import { useState } from 'react'
import { useEffect, useRef } from 'react';
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SiteList from './components/sites';
import { EmblaCarousel } from './components/project';

const App = () => {
  const [count, setCount] = useState(0);
  


  return (
    <>
    <header>
            <h1 className="logo" 
            style={{
              
              fontFamily:'Courier New',
              fontWeight:'10'
              
            }}>Joseph Hill</h1>        
    </header>
     <SiteList />
      <EmblaCarousel/>
    
    
        
    </>
  )
}

export default App
