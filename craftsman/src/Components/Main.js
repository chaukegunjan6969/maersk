import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../maincomponent/Footer'

const Main = () => {
  return (
    <div>
         <Outlet/>
         
    </div>
  )
}

export default Main