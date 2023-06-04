import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MyNavbar = () => {
  return <>
    <div>MyNavbar</div>
    <Outlet/>
    <Footer/>
  </>
  
}

export default MyNavbar