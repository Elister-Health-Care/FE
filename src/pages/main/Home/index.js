import React from 'react'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
   return (
      <div>
         Home Page
         <Outlet />
      </div>
   )
}
export default HomePage
