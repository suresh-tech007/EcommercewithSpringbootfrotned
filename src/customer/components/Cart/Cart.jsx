import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCartRequest } from '../../../redux/cart/Action'

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { cartItems,cart, error } = useSelector(store => store.cart)
   
    const handlecheckout = ()=>{
        navigate("/checkout?step=2")
    }
    useEffect(() => {
     dispatch(getCartRequest())
    }, [])
    
  return (
    <div>
        <div className='lg:grid grid-cols-3  px-5 relative '>

       <div className='col-span-2'>  {cartItems?.map((item,i)=><CartItem key={i} item={item} />)}</div>

       <div className='px-5 sticky  col-span-1 top-[1rem]  h-[100vh]  mt-5    '>
            <div className=' border  text-center p-3 '> 
                <p className='uppercase font-bold  opacity-60 pb-4 '>right side</p>
                <Divider />
                <div className=' space-y-3 font-semibold '>
                    <div className='flex  justify-between  pt-3  text-black '>
                        <span>Price</span>
                        <span>₹{cart?.totalPrice}</span>
                    </div>
                    <div className='flex  justify-between  pt-3  text-black '>
                        <span>Discount</span>
                        <span className=' text-green-600 '>-₹{cart?.discount}</span>
                    </div>
                    <div className='flex  justify-between  pt-3  text-black '>
                        <span>Delivery Charge</span>
                        <span className=' text-green-600 ' >Free</span>
                    </div>
                    <div className='flex  justify-between  pt-3  font-bold text-black '>
                        <span>Total Amount</span>
                        <span className=' text-green-600  '>₹{cart?.totalDiscountedPrice}</span>
                    </div>
                </div>
            </div>
            <Button
onClick={handlecheckout}
variant="contained" className='w-full' sx={{ px: "2.5rem", py: ".7rem", mt: "1rem", bgcolor: "#9155fd" }}
>
CHECK OUT

</Button>

        </div>
        </div>
       
    </div>
  )
}

export default Cart