import React, { useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import { AddCircle, AddCircleOutline, RemoveCircle, RemoveCircleOutline } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getCartRequest, removeCartItem, updateCartItem } from '../../../redux/cart/Action';

const CartItem = ({item}) => {
  const dispatch = useDispatch();
  const { cart, error } = useSelector(store => store.cart)
  const handlecartupdate = async(num)=>{
    const data = { quantity:item.quantity + num ,CartItemId:item?.id}
    
   await dispatch(updateCartItem(data))
   await dispatch(getCartRequest())

  }
  const handleremovecartItem = async(id)=>{
    await  dispatch(removeCartItem(id))
    await dispatch(getCartRequest())

  }
 
  
  return (
    <div className='p-5 shadow-lg border m-5 border-black rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src={item?.product.imageUrl} alt="" />
            </div>
            <div className='ml-5 space-y-1 flex items-start flex-col '>
                <p className='font-semibold'> {item?.product.brand}</p>
                {/* <p className='  opacity-70 '> {item?.size}</p> */}
                <p className=' opacity-70  mt-2'> Seller :  {item?.product.brand}</p>
                <div className='flex space-x-5 items-center text-lg  lg:text-xl text-gray-900  lg:pt-10    '>

                <p className='font-semibold '>₹{item?.discountedPrice}</p>
                <p className=' opacity-50 line-through'> ₹{item?.price}</p>
                <p className='  text-green-600 font-semibold'> {item?.discountPercent}% off</p>

              </div>

             

            </div>


            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4 '>
                  <div className='flex items-center space-x-2'>
                    <IconButton disabled={item?.quantity <=1   } onClick={()=>handlecartupdate(-1)} >
                        <RemoveCircleOutline />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>{ item?.quantity }</span>
                    <IconButton onClick={()=>handlecartupdate(+1)}  sx={{color:"RGB(145 85 253)"}} >
                        <AddCircleOutline />
                    </IconButton>
                  </div>
                  <div>
                    <Button onClick={()=>handleremovecartItem(item?.id)}  sx={{color:"RGB(145 85 253)"}} >remove</Button>
                    </div>

              </div>

     

        

    </div>
  )
}

export default CartItem