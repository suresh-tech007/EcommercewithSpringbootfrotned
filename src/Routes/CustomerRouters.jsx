import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/components/pages/Homapage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import CheckOut from '../customer/components/checkout/CheckOut'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import { Product } from '../customer/components/Product/Product'
import PaymentSuccess from '../customer/components/payment/PaymentSuccess'

const CustomerRouters = () => {
  return (
    <>
      {/* Define your routes without wrapping them in Routes again */}
<Routes>
<Route path='/' element={<HomePage />} />
<Route path='/login' element={<HomePage />} />
<Route path='/register' element={<HomePage />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />} />
      <Route path='/product/:productId' element={<ProductDetails />}  />
      <Route path='/checkout' element={<CheckOut />}  />
      <Route path='/account/order' element={<Order />}  />
      <Route path='/account/order/:orderId' element={<OrderDetails />}  />
      <Route path='/payment/:orderId' element={<PaymentSuccess />}  />
</Routes>
    </>
  )
}

export default CustomerRouters
