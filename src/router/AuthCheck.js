// AuthCheck.js
import React from 'react'
import { Navigate } from 'react-router-dom'

const UserAuthCheck = ({ component: Component }) => {
   const user = localStorage.getItem('user')
   if (!user) {
      return <Navigate to="/user-login" />
   }
   return <Component />
}

const AdminAuthCheck = ({ component: Component }) => {
   const admin = localStorage.getItem('admin')
   if (!admin) {
      return <Navigate to="/admin-login" />
   }
   return <Component />
}

export { UserAuthCheck, AdminAuthCheck }
