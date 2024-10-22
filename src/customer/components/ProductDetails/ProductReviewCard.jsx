import { Avatar, Grid, Rating } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const ProductReviewCard = () => {
    const { Product, error } = useSelector(store => store.product)
  return (
    <div>
        <Grid  gap={3} container spacing={2}>
            <Avatar className='text-white ' sx={{width:56, height:56 , bgcolor:"#9155fd"}}>R</Avatar>
        </Grid>
        <Grid item xs={9} >
            <div className='space-y-2'>
                <div>
                    <p className=' font-semibold text-lg'>Ram</p>
                    <p className=' opacity-70'>Aprinl 4,2023</p>
                </div>
            </div>
            <Rating readOnly precision={.5} value={4.5} name="half-rating" ></Rating>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
        </Grid>
    </div>
  )
}

export default ProductReviewCard