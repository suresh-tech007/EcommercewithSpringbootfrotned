import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom"
import { getOrderById } from '../../../redux/Order/Action';
import { updateOrderpayment } from '../../../redux/Payment/Action';
import { Alert, AlertTitle, Grid } from "@mui/material"
import OrderTracker from '../Order/OrderTracker';
import AdressCard from '../AdressCard/AdressCard';

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const dispatch = useDispatch();
  const { order } = useSelector(state => state.order);
  const { orderId } = useParams()
 

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search)
    setPaymentId(urlParam.get("razorpay_payment_id"))
    setPaymentStatus(urlParam.get("razorpay_payment_link_status"))
   
  }, [])

   
 
useEffect(() => {
  const fetchData = async () => {
    if (paymentId) {
      const data = { orderId, paymentId };
      dispatch(updateOrderpayment(data)); // Ensure correct action name
    }
    
    await dispatch(getOrderById(orderId)); // Await dispatch to handle async actions
  };

  fetchData();
  
   
}, [paymentId, dispatch, orderId]);  


 
  return (
    <div className='px-2 lg:px-36 '  >
      <div className='flex flex-col justify-center  items-center  mt-10'>

        <Alert variant='filled' severity='success' sx={{ mb: 6, width: "fit-content" }}>
          <AlertTitle>Payment Success</AlertTitle>
          Congratulation Your Order Get Placed
        </Alert>
      </div>
      <OrderTracker activeStep={1} />

      <Grid container className='space-y-5 py-5 pt-20'>

        {order?.orderItems?.map((item) => (
          <Grid key={item?.id} container item className='shadow-xl rounded-md p-10'
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>

              <div className='flex items-center '>
                <img className='w-[6rem] h-[6rem] object-cover object-top' src={item.product.imageUrl} alt="" />
                <div className='ml-5 space-y-0 '>
                  <p className='font-semibold text-nowrap'>{item.product.title}</p>
                  <div className='opacity-50 text-xs font-semibold space-x-5  '>
                    <span>Color : {item.product.color}</span>
                    <span>Size : {item.size}</span>
                  </div>
                  
                  <p className='font-semibold text-nowrap'>Seller :  {item?.product.brand}</p>
                  <div className='flex space-x-5 items-center text-lg  lg:text-xl text-gray-900       '>

                    <p className='font-semibold '>₹{item?.discountedPrice}</p>
                    <p className=' opacity-50 line-through'> ₹{item?.price}</p>
                    <p className='  text-green-600 font-semibold'> {item?.discountPercent}% off</p>

                  </div>
                </div>

              </div>
            </Grid>
            <Grid item  className=' hidden md:block'>
              <AdressCard adress={order?.shippingAddress} />
            </Grid>

          </Grid>
        ))}

      </Grid>
    </div>
  )
}

export default PaymentSuccess