import React, { useEffect } from 'react'
import AdressCard from '../AdressCard/AdressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getCartRequest } from '../../../redux/cart/Action'
import { getOrderById } from '../../../redux/Order/Action'
import {useLocation} from "react-router-dom";
import { createOrderPayment } from '../../../redux/Payment/Action'

const OrderSummery = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { cartItems,cart, error } = useSelector(store => store.cart)
    const { orders ,order} = useSelector(store => store.order);
    const sesarchParams = new URLSearchParams(location.search);
    const orderId = sesarchParams.get("order_id");

     

    const handleCheckout =()=>{
dispatch(createOrderPayment(orderId))
    }


    useEffect(  () => {
        if (orderId) {
            
            dispatch(getOrderById(orderId));
        }
          dispatch(getCartRequest())
       }, [])
    return (
        <div>
            <div className='p-5 shadow-lg rounded-s-md border  '>

                <AdressCard adress={order?.shippingAddress} />

            </div>
            
            <div>
                <div className='lg:grid grid-cols-3  px-5 relative '>

                    <div className='col-span-2'>  {order?.orderItems?.map((item, i) => <CartItem key={i} item={item} />)}</div>

                    <div className='px-5 sticky  col-span-1 top-[1rem]  h-[100vh]  mt-5    '>
                        <div className=' border  text-center p-3 '>
                            <p className='uppercase font-bold  opacity-60 pb-4 '>right side</p>
                            <hr />
                            <div className=' space-y-3 font-semibold '>
                                <div className='flex  justify-between  pt-3  text-black '>
                                    <span>Price</span>
                                    <span>₹{order?.totalPrice}</span>
                                </div>
                                <div className='flex  justify-between  pt-3  text-black '>
                                    <span>Discount</span>
                                    <span className=' text-green-600 '>-₹{order?.discounted}</span>
                                </div>
                                <div className='flex  justify-between  pt-3  text-black '>
                                    <span>Delivery Charge</span>
                                    <span className=' text-green-600 ' >Free</span>
                                </div>
                                <div className='flex  justify-between  pt-3  font-bold text-black '>
                                    <span>Total Amount</span>
                                    <span className=' text-green-600  '>₹{order?.totalDiscountedPrice}</span>
                                </div>
                            </div>
                        </div>
                        <Button

                            variant="contained" className='w-full' sx={{ px: "2.5rem", py: ".7rem", mt: "1rem", bgcolor: "#9155fd" }}
                            onClick={handleCheckout}
                        >
                            CHECK OUT

                        </Button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default OrderSummery