import { useState, useEffect } from 'react';
import githublogo from '/Users/joeda/project-repo/newPortfolio/my-react-app/src/assets/github.svg';
import linkedinLogo from '/Users/joeda/project-repo/newPortfolio/my-react-app/src/assets/LIN.png';
import './sites.css';

const SiteList = () => {
  const sites = [
    {
      name: 'github',
      pic: githublogo,
      url: 'https://github.com/joe6006',
    },
    {
      name: 'linkedin',
      pic: linkedinLogo,
      url: 'https://www.linkedin.com/in/joseph-hill-1bb469176/',
    },
  ];

  const [clicks, setClicks] = useState({ github: 0, linkedin: 0 });

  useEffect(() => {
    const savedClicks = localStorage.getItem('siteClicks');
    if (savedClicks) {
      setClicks(JSON.parse(savedClicks));
    }
  }, []);

  const handleClick = (siteName) => {
    const newClicks = {
      ...clicks,
      [siteName]: clicks[siteName] + 1,
    };
    setClicks(newClicks);
    localStorage.setItem('siteClicks', JSON.stringify(newClicks));
    console.log(`${siteName} clicked ${newClicks[siteName]} times`);
  };

  return (
    <div className="site-container">
      {sites.map((site) => (
        <div key={site.name} className="site-logo">
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(site.name)}
          >
            <img className="img" src={site.pic} alt={site.name} />
          </a>
          
        </div>
      ))}
    </div>
  );
};

export default SiteList;