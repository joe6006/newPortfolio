import photo1 from '../assets/Portfolio/DS2BTfar.jpg';
import photo2 from '../assets/Portfolio/DS2BT.jpg';
import photo3 from '../assets/Portfolio/DS2CatOwner.jpg';
import photo4 from'../assets/Portfolio/DS2collectors.jpg';
import photo5 from'../assets/Portfolio/ds2cutscene.jpg';
import photo6 from '../assets/Portfolio/DS2Gate.jpg';
import photo7 from'../assets/Portfolio/DS2postCutscene.jpg';
import photo8 from'../assets/Portfolio/DS2trailer.jpg';
import photo9 from'../assets/Portfolio/DS2Trike.jpg';
import photo10 from'../assets/Portfolio/DS2Zipline.jpg';
import photo11 from'../assets/Portfolio/meow.jpg';
import { useCallback, useEffect} from 'react'
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import './gamePics.css'
import Autoplay from 'embla-carousel-autoplay'
export function renderPhotos(){
    const [emblaRef] = useEmblaCarousel({loop:false}, [Autoplay()]);

    const gamePhotos = [
    {
        id:1,
        src: photo1,
        alt: 'BT sighting'
    },
    {
        id:2,
        src: photo2,
        alt: 'BT sighting'
    },
    {
        id:3,
        src: photo3,
        alt: 'Tarman and his cat'
    },
    {
        id:4,
        src: photo4,
        alt: 'Collectors edition'
    },
    {
        id:5,
        src: photo5,
        alt: 'From a cutscene in the game'
    },
    {
        id:6,
        src: photo6,
        alt: 'Mexico/Australia gate'
    },{
        id:7,
        src: photo7,
        alt: 'from a post cutscene'
    },{
        id:8,
        src: photo8,
        alt: 'transporting cargo'
    },{
        id:9,
        src: photo9,
        alt: 'Sam riding a trike'
    },{
        id:10,
        src: photo10,
        alt: 'Sam riding a zipline'
    },{
        id:11,
        src: photo11,
        alt: 'BT cat'
    },
    ];

    


    return (
                <section>
                   
                        
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container">
                            {gamePhotos.map((photo)=>(
                                <img 
                                key={photo.id}
                                 src={photo.src} 
                                 alt={photo.alt} 
                                 className="embla__slide"
                                  />

                            ))
                            
                            }
                        </div>
                    </div>
                    
                </section>
            )  

}

export default renderPhotos