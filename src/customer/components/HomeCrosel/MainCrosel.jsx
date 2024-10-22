import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { maincarosedata } from './MainCaroselData';
 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

 
 

const MainCrosel = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1500 },
          items: 1,
          slidesToSlide: 1 
        },
        desktop2: {
          breakpoint: { max: 1500, min:1024  },
          items: 1,
          slidesToSlide: 1  
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1  
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1  
        }
      };
    
    

   return ( 
    <div className="relative !z-10">
    <Carousel
     
    arrows={false}
      responsive={responsive}
      
      autoPlay
      draggable={true}
      showDots={true}  
      infinite
      ssr={true}
      className="carousel-element"


    >

{maincarosedata && maincarosedata.map((item)=> 
    (
        <img className=' cursor-pointe w-full   ' role='presentation' src={item.image} alt='kal'  />
    )
    )}
    </Carousel>
    </div>
)
};

export default MainCrosel;