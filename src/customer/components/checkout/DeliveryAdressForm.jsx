import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom';
import { createOrder } from '../../../redux/Order/Action'

const DeliveryAdressForm = () => {
    const dispatch = useDispatch();
  const  navigate = useNavigate();
  
    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        const address = {
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            streetAddress:data.get("address"),
            state:data.get("state"),
            zipCode:data.get("zip"),
            mobile:data.get("phoneNumber"),
        }
        const orderData = {address,navigate}
        dispatch(createOrder(orderData));
    }
    return (
        <div>
            <Grid container              sx={{
                rowGap: { xs: 1, md: 1 }, // Row spacing for xs and md
                
            }}
  >

                <Grid    xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AdressCard />
                        <Button size='large' variant='contained' sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }}>Deliver Here</Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form  onSubmit={(e)=>handleSubmit(e)}    >
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='firstName' name='firstName' label='First Name' fullWidth autoComplete='given-name' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField required id='lastName' name='lastName' label='Last Name' fullWidth autoComplete='given-name' />
                                </Grid>
                            
                                <Grid item xs={12} sm={12}>
                                    <TextField required id='address' name='address' label='Address' fullWidth autoComplete='given-name' multiline rows={4} />
                                
                              
                                </Grid>
                         
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='city' name='city' label='city' fullWidth autoComplete='given-name' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField required id='state' name='state' label='State/Province/Region' fullWidth autoComplete='given-name' />
                                </Grid>
                            
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='zip' name='zip' label='Zip / Postal Code' fullWidth autoComplete='shipping postal-code' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField required id='phoneNumber' name='phoneNumber' label='Phone Number' fullWidth autoComplete='given-name' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <Button type="submit" size='large' variant='contained' sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }}>Deliver Here</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAdressForm