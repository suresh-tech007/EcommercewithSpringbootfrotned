import React from 'react'
import MainCrosel from '../../HomeCrosel/MainCrosel'
import HomeSectioncarosel from '../../HomeSectionCarosel/HomeSectioncarosel'
import { mens_kurta } from "../../../../data/Men/men_kurta";

const HomePage = () => {
  return (
    <div  >
        
        <MainCrosel />
        <div className=' space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectioncarosel items={mens_kurta} Section_name={"Men's Kurta"} />
        <HomeSectioncarosel items={mens_kurta} Section_name={"Mes's Shoes"} />
        <HomeSectioncarosel items={mens_kurta} Section_name={"Men's Shirt"} />
        <HomeSectioncarosel items={mens_kurta} Section_name={"Women's Dress"} />
        </div>
        
    </div>
  )
}

export default HomePage