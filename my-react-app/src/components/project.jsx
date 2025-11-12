import React from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from "react";
import Autoplay from 'embla-carousel-autoplay'
import './project.css';


export function EmblaCarousel(){
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

     useEffect(() => {
            if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
            }
        }, [emblaApi]);




        const cards =  [
                    {  
                        id:1,
                        name:"Budget Application",
                        description: "this is a budget application"

                    },
                    {
                        id:2,
                        name:"Generate Password",
                        description: "Generates a random password"
                    },
                    {
                        id:3,
                        name:"Schedule Application",
                        description:"a schedule app made from vanilla javascript"
                    },

                    ];
                    
                    








    return (
                <div className="embla" ref={emblaRef}>
                <div className="embla__container">{ cards.map(card =>(
                    <div className='card' key={cards.id}>
                        <h5>{card.name}</h5>
                        <p>{card.description}</p>
                    </div>

                ))                
                }
                </div>
                </div>
            )  
}