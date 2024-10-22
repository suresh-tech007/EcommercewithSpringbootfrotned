import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { Star } from '@mui/icons-material'

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <div>
            <h1 className=' font-semibold text-xl py-7'> Delivery Address</h1>
        <AdressCard />
        </div>
        <div className='py-20 '>
            <OrderTracker activeStep={4} />
        </div>
        <Grid container className='space-y-5 '>

            {[1,1,1,1,1].map((item)=>(
            <Grid item container className='shadow-lg rounded-md border p-5 cursor-pointer  hover:shadow-xl  ' sx={{ alignItems :"center" , justifyContent:"space-between "}}>
              <Grid item xs={6}>
                <div className=' flex items-center  space-y-2 '>
                    <img className="w-[5rem] h-[5rem] object-cover object-top " src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />

                    <div className='space-y-2 ml-5'>
                        <p className='  font-semibold '> Men Slim Rise Black jhesaj</p>
                        <p className='space-x-5 opacity-50 text-sm font-semibold '> <span> Color:black</span></p>
                        <p> Seller : linaria</p>
                        <p>₹199</p>
                    </div>
                </div>


              </Grid>
              <Grid item >
                <Box sx={{color:deepPurple[500]}}>
                    <Star sx={{fontSize:"2rem"}} className=" px-2 text-5xl text-green-500 "  />
                    <span> Rate & Review Product</span>

                </Box>

              </Grid>

            </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default OrderDetails