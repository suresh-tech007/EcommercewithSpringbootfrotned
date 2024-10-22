import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './customer/components/navigation/Navigation'
import Footer from './customer/components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import CustomerRouters from './Routes/CustomerRouters'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Navigation />
      
      
      <Routes>
        <Route path='/*' element={<CustomerRouters />} />
      </Routes>
      
       
      <Footer />
    </div>
  )
}

export default App
