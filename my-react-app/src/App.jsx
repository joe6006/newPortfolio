import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SiteList from "./components/sites";
import RenderProjects from "./components/project";
import RenderAboutMe from "./components/aboutme";
import RenderSkills from "./components/skills";
import RenderPhotos from "./components/gamePics";
import picme from "./assets/mepic.JPG";
const App = () => {
  const [activesection, setactivesection] = useState(null);

  const handleClick = (section) => {
    if (activesection === section) {
      setactivesection(null);
    } else {
      setactivesection(section);
    }
  };
  const myFunction = (contact) => {
    navigator.clipboard
      .writeText(contact)
      .then(() => {
        console.log("Copied:", contact);
      })
      .catch((err) => {
        console.error("Copy failed:", err);
      });
  };
  return (
    <>
      <div className="overlay"></div>

      <div className="nav-bar">
        
        <div className="profile-block mobile-only">
          <img src={picme} alt="Profile photo" className="profile-avatar" />
        </div>
        <header>
          <h1 className="logo" style={{ fontWeight: 100 }}>
            Joseph Hill
          </h1>
          <div className="contact desktop-only">
            <h2>
              EMAIL:
              <a onClick={() => myFunction("joe.h.155@proton.me")}>
                joe.h.155@proton.me
              </a>
            </h2>
            <h2>
              PHONE:
              <a onClick={() => myFunction("(726)242-2713")}>(726)242-2713</a>
            </h2>
          </div>
        </header>

        <div className="contact mobile-only">
          
          <h2>
            
            EMAIL: <span className="contact-value">
              joe.h.155@proton.me
            </span>
            <button
              className="copy-btn"
              onClick={() => myFunction("joe.h.155@proton.me")}
            >
              
              Copy
            </button>
          </h2>
          <h2>
            
            PHONE: <span className="contact-value">(726)242-2713</span>
            <button
              className="copy-btn"
              onClick={() => myFunction("(726)242-2713")}
            >
              
              Copy
            </button>
          </h2>
        </div>

        <div className="button-list">
          <button onClick={() => handleClick("about")}>About Me</button>
          <button onClick={() => handleClick("skills")}>Skills</button>
          <button onClick={() => handleClick("projects")}>Projects</button>
        </div>
        <div className="desktop-disclaimer-wrapper desktop-only">
          <div className="desktop-disclaimer">
            Only the mobile and desktop versions are ready to be used.
          </div>
          <div className="desktop-disclaimer">
            
            Features and layout may change as improvements are made.
          </div>
        </div>

        {/* ⭐ NEW WRAPPER */}
        <div className="mobile-content-slot">
          {activesection === "about" && (
            <RenderAboutMe handleClick={handleClick} />
          )}
          {activesection === "skills" && (
            <RenderSkills handleClick={handleClick} />
          )}
          {activesection === "projects" && (
            <RenderProjects handleClick={handleClick} />
          )}
          {<SiteList className="sites-mobile" />}
        </div>
      </div>

      {/* Desktop content stays outside */}
      <div className="desktop-content">
        
        {activesection === "about" && <RenderAboutMe />}
        {activesection === "skills" && <RenderSkills />}
        {activesection === "projects" && <RenderProjects />}
        {RenderPhotos()}
        {<SiteList className="sites" />}
      </div>
    </>
  );
};

export default App;
