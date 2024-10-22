import React from 'react'

const AdressCard = ({adress}) => {
  return (
    <div>
        <div className='space-y-1 '>
            <div className='flex gap-2'>
            <p className='font-semibold '>{adress?.firstName}</p>
            <p className='font-semibold '>{adress?.lastName}</p>
            </div>
            <p>{adress?.state  } {adress?.streetAddress} {adress?.zipCode} </p>
            <div className='space-y-1'>
                <p className='font-semibold '>phone Number</p>
                <p>{adress?.mobile}</p>
            </div>
        </div>
    </div>
  )
}

export default AdressCard