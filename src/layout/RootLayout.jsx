import React, { useState } from 'react'
import Header from '../components/user/Header'
import Footer from '../components/user/Footer'
import UserHeader from '../components/user/UserHeader'
import { Outlet } from 'react-router-dom'


export const RootLayout = () => {
  const [isUserAuth,setIsUserAuth] = useState(false)
  return (
    <div>
      {isUserAuth?<UserHeader/>:<Header/>}
        <div className='min-h-96'>
        <Outlet />
        </div>
        
        
       <Footer/>
       
    </div>
  )
}
export default RootLayout

