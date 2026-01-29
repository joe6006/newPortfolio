import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import SiteList from './components/sites';
import RenderProjects from './components/project';
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
   const myFunction =(contact) =>{

      // Copy the text inside the text field
      navigator.clipboard.writeText(contact);
        console.log("copy saved!")
    }

  return (
    <>
      <div className='photos-desktop-only'>{RenderPhotos()}</div>
      
      <div className="overlay"></div>
      <div className="nav-bar">
        <header>
          <h1
            className="logo"
          >
            Joseph Hill
          </h1>
          <div className='contact'>
          <h2>EMAIL:<a onClick={()=>myFunction('joe.h.155@proton.me')}> joe.h.155@proton.me</a></h2>
          <h2>PHONE: <a onClick={()=>myFunction('(726)242-2713')}>(726)242-2713</a></h2>
          </div>
        </header>
        <div className="button-list">
          <button onClick={() => handleClick('about') }>About Me</button>
          <button onClick={() => handleClick('skills')}>Skills</button>
          <button onClick={() => handleClick('projects')}>Projects</button>
        </div>
      </div>
      {activesection === 'about' && <RenderAboutMe/>}
      {activesection ==='skills'&& <RenderSkills />}
      {activesection === 'projects' && <RenderProjects />}
      <div className='thesites'><SiteList/></div>
      
    </>
  );
};

export default App;

