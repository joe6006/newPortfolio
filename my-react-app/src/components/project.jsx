import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './project.css'
import photo1 from '../assets/home_icon.png'

function RenderProjects() {
  const [emblaRef] = useEmblaCarousel({ loop: true, axis:"y"}, [Autoplay()])

  const projectCard = [
    {
      id:1,
      src:photo1,
      alt:"project_name",
      description:"This is project 1, showcasing the home icon."
    },
    {
      id:2,
      src:photo1,
      alt:"project_name",
      description:"This is project 2, another variation of the home icon."
    },
    {
      id:3,
      src:photo1,
      alt:"project_name",
      description:"This is project 3, demonstrating carousel functionality."
    },
    {
      id:4,
      src:photo1,
      alt:"project_name",
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
                <p className="project-description">
                  {projects.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RenderProjects