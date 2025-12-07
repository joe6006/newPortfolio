import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import SiteList from './components/sites';
import EmblaCarousel from './components/project';
import RenderAboutMe from './components/aboutme';
import RenderSkills from './components/skills';
import RenderPhotos from './components/gamePics';

const App = () => {
 const [activesection , setactivesection] = useState(null);

  
  const handleClick= (section)=>{
      if(activesection === section){
        setactivesection(null)

      }else{setactivesection(section)}
      
  }


  return (
    <>
      {RenderPhotos()}
      <div className="overlay"></div>
      <div className="nav-bar">
        <header>
          <h1
            className="logo"
            style={{ fontWeight: 200 }}
          >
            Joseph Hill
          </h1>
        </header>
        <div className="button-list">
          <button onClick={() => handleClick('about') }>About Me</button>
          <button onClick={() => handleClick('skills')}>Skills</button>
          <button onClick={() => handleClick('projects')}>Projects</button>
        </div>
      </div>
      {activesection === 'about' && <RenderAboutMe/>}
      {activesection ==='skills'&& <RenderSkills />}
      {activesection === 'projects' && <EmblaCarousel />}
      <SiteList />
    </>
  );
};

export default App;

