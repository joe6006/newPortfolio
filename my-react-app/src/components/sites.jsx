
import { useState } from 'react'
import { useEffect, useRef } from 'react';
import githublogo from "./assets/github.svg"
import linkedinLogo from "./assets/LIN.png"
import './sites.css'
    const sites = [
        {
            name: "github",

            pic: githublogo,

            url:'https://github.com/joe6006',
        },
        {
            name: "linkedin",
            pic: linkedinLogo,
            url:'https://www.linkedin.com/in/joseph-hill-1bb469176/',
        }    
    ];

    


     function SiteList(){
        return   (
    <div className='site-container'>
      {sites.map(site => (
        <div key={site.name} className="site-logo">
          <a href={site.url} target='_blank'>
          <img className='img'src={site.pic} alt={site.name} />
          </a>
        </div>
      ))}
    </div>
  );

     }

export default SiteList