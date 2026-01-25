import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './project.css'
import photo1 from '../assets/home_icon.png'

function RenderProjects() {
  const [emblaRef] = useEmblaCarousel({ loop: true, axis:"y"})

  const projectCard = [
    {
      id:1,
      src:photo1,
      alt:"project_name",
      skills:"JS, JSX/JSON, CSS,",
      url:"https://joe6006.github.io/scheduleapp/",
      github:"blah",
      description:"A schedule application using vanilla Javascript "
    },
    {
      id:2,
      src:photo1,
      alt:"project_name",
      skills:"blah,blah",
      url:"blah",
      github:"blah",
      description:"This is project 2, another variation of the home icon."
    },
    {
      id:3,
      src:photo1,
      alt:"project_name",
      skills:"blah,blah",
      url:"blah",
      github:"blah",
      description:"This is project 3, demonstrating carousel functionality."
    },
    {
      id:4,
      src:photo1,
      alt:"project_name",
      skills:"blah,blah",
      url:"blah",
      github:"blah",
      description:"This is project 4, with looping enabled."
    }
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
                  <div className="project-description">
                    <h2>project: {projects.alt}</h2>
                    <p>Skills: {projects.skills}</p>
                    <p>website:<a>{projects.url}</a> github:<a>{projects.github}</a></p>
                    
                    <p>
                      Description: {projects.description}
                    </p>
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