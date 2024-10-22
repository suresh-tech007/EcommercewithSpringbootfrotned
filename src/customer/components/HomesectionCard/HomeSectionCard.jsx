import React from 'react'

const HomeSectionCard = ({item}) => {
  return (
    <div
    className='   cursor-pointer flex  flex-col   items-center  bg-white  rounded-lg  shadow-lg  overflow-hidden  my-4  hover:shadow-xl border py-2 w-[15rem]  mx-3'
    >


<div className='h-[13rem] w-[10rem]'>
    <img className=' object-cover object-top w-full h-full' src={item.imageUrl} alt="" />

</div>

<div className='p-4'>
    <h3 className=' textl text-gray-900  font-medium '>{item.brand}</h3>
    <p className=' mt-2  text-sm  text-gray-500 '>{item.title}</p>


</div>

    </div>
  )
}

export default HomeSectionCard