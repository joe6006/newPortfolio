import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './project.css'
import photo1 from '../assets/project_images/schedule.png'
import photo2 from '../assets/project_images/password_generator.png'
import photo3 from '../assets/project_images/climb.jpg'

function RenderProjects() {
  const [emblaRef] = useEmblaCarousel({ loop: true, axis:"y"})

  const projectCard = [
    {
      id:1,
      src:photo1,
      alt:"Schedule app" ,
      skills:"JS, JSX/JSON, CSS,",
      url:"https://joe6006.github.io/scheduleapp/",
      github:"https://github.com/joe6006/scheduleapp",
      description:"A schedule application using vanilla Javascript."
    },
    {
      id:2,
      src:photo2,
      alt:"Password Generator",
      skills:"JS, Manipulating Arrays",
      url:"https://joe6006.github.io/generatePassword/",
      github:"https://github.com/joe6006/generatePassword",
      description:"Simple password gen."
    },
    {
      id:3,
      src:photo3,
      alt:"My Web Portfolio",
      skills:"REACT.JS, Embla carousel API,CSS",
      github:"https://github.com/joe6006/newPortfolio",
      description:"This portfolio will be changed depending on what gane I am currently playing. It will also become a full-stack website as I continue to learn more about software development"
    },
    
  ]

  return (
    <>
      <div className="embla2" ref={emblaRef}>
        <div className="embla__container2">
          {projectCard.map((projects)=>(
            <div className="embla__slide2" key={projects.id}>
              <div className='project-card'>
                <img 
                  src={projects.src} 
                  alt={projects.alt} 
                />
                  <div className="project-description" >
                    <ul className="project-list" >
                      <li style={{listStyle:'none'}}><span>Project:</span> {projects.alt}</li>
                      <br/>
                      <li style={{listStyle:'none'}}><span>Skills:</span> {projects.skills}</li>
                      <br/>
                      <li style={{listStyle:'none'}}><span>Link:</span> <a  target="_blank" href={projects.url} >Check it out!</a>/<span>Github</span>:<a href={projects.github}>Check out the repository!</a> </li>
                      <br/>
                      <li style={{listStyle:'none'}}><span>Description:</span> {projects.description}</li>
                    </ul>
                   
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RenderProjects

