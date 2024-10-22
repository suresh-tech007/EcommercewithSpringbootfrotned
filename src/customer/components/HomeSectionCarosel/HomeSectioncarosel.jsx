import React, { useState } from 'react';
import HomeSectionCard from '../HomesectionCard/HomeSectionCard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { KeyboardArrowLeft } from '@mui/icons-material';

 
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 6,
    slidesToSlide: 3 
  },
  desktop2: {
    breakpoint: { max: 1500, min:1024  },
    items: 5,
    slidesToSlide: 2  
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2  
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.2,
    slidesToSlide: 1.5  
  }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return ( 
    <div className="carousel-button-group  w-full p-5  hidden lg:block ">  
      <KeyboardArrowLeft className={`${currentSlide === 0 ? 'disable' : ''}   absolute left-0 cursor-pointer   `} sx={{  fontSize:50, }}  onClick={() => previous()} />
      <KeyboardArrowRightIcon sx={{  fontSize:50, }} onClick={() => next()} className=' absolute right-0   cursor-pointer ' />
      <button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </button>
    </div>
  );
};
 
const HomeSectioncarosel = ({Section_name = "Section_name" , items= null}) => {
  return (
    <div className=' flex flex-col '>
      <h1 className=' text-2xl font-extrabold text-gray-800 py-5'>{Section_name}</h1>

<Carousel
arrows={false}
  responsive={responsive}
  customButtonGroup={<ButtonGroup />}
>
 {
  items.length>0 &&  items .map((item , index) => (
    <HomeSectionCard key={index} item={item} />
  ))
 }
</Carousel>

    </div>
  );
};

export default HomeSectioncarosel;
