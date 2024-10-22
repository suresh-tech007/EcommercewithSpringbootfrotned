import { Button } from '@headlessui/react'
import { Grid, Grid2, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-alice-carousel'

const Footer = () => {
    return (
        <div>
            <Grid2 className="bg-black flex-col   md:flex-row  justify-evenly  text-white text-center mt-10 " container sx={{ bgcolor: 'black', color: 'white', py: 3 }} >
                <Grid2  className="-space-y-4 space-x-4" >
                    <div>
                        <Typography className='pb-5 cursor-pointer' variant='h6' >Company</Typography>
                    </div>
                    <div className='flex items-center justify-center   -space-y-4 flex-col gap-0'  >
                        <Button className='pb-5 cursor-pointer' variant='h6'   >About</Button>
                        <Button className='pb-5 cursor-pointer' variant='h6' >Blog</Button>
                        <Button className='pb-5 cursor-pointer' variant='h6'   >Press</Button>
                        <Button className='pb-5 cursor-pointer' variant='h6' >Jobs</Button>
                        <Button className='pb-5 cursor-pointer' variant='h6'   >Parters</Button>
                    </div>
                </Grid2>
                <Grid2  className="-space-y-4 space-x-4" >
                    <div>
                        <Typography className='pb-5 cursor-pointer' variant='h6' >Solutoins</Typography>
                    </div>
                    <div   className='flex items-center justify-center flex-col -space-y-4 gap-0' >
                        <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom >Marketing</Button>
                        <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom>Analytics</Button>
                        <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom >Commerce</Button>
                        <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom>insights</Button>
                        <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom >Support</Button>
                    </div>
                </Grid2>
                <Grid2    className="-space-y-4 space-x-4" >
                    <div>
                        <Typography className='pb-5 cursor-pointer ' variant='h6' >Documentation</Typography>
                    </div>
                    <div   className='flex items-center justify-center flex-col -space-y-4 gap-0' >
                        <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom >Guldes</Button>
                        <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom>Api Status</Button>
                    </div>
                </Grid2>
                <Grid2  className="-space-y-4 space-x-4 hidden lg:block" >
                    <div>
                        <Typography className='pb-5 cursor-pointer' variant='h6' >Legel</Typography>
                    </div>
                    <div  className='flex items-center justify-center flex-col -space-y-4 gap-0' >
                        <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom >Claim</Button>
                        <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom>Privacy</Button>
                        <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom >Terms</Button>
                    </div>
                </Grid2>
                <div className='pt-5 w-full'>
                    <p className='text-center' >
                        &copy; 2024 My Conpany . All rights reserved
                    </p>
                    <p className='text-center' >
                      Made By SURESH KUMAR 
                    </p>
                    <p className='text-center' >
                       Icons made by {" "}
                       <Link href="https://www.freeqpik.com" className="underline">
                       Freepik { " "}
                       </Link>
                       <Link href="https://www.freeqpik.com" className="underline">
                       www.freeqpik.com
                       </Link>
                    </p>

                </div>
            </Grid2>
        </div>
    )
}

export default Footer