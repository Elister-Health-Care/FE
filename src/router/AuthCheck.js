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
   const admin = JSON.parse(localStorage.getItem('HealthCareUser'))
   if (admin) {
      if (
         admin.role === 'user' ||
         admin.role === 'doctor' ||
         admin.role === 'hospital'
      ) {
         return <Navigate to="/page-not-found" />
      } else {
         return <Component />
      }
   } else {
      return <Navigate to="/admin-login" />
   }
}
const HospitalAuthCheck = ({ component: Component }) => {
   const hospital = JSON.parse(localStorage.getItem('HealthCareUser'))
   if (hospital) {
      if (
         hospital.role === 'user' ||
         hospital.role === 'admin' ||
         hospital.role === 'superadmin' ||
         hospital.role === 'manager'
      ) {
         return <Navigate to="/page-not-found" />
      } else {
         return <Component />
      }
   } else {
      return <Navigate to="/user-login" />
   }
}

const DoctorAuthCheck = ({ component: Component }) => {
   const doctor = JSON.parse(localStorage.getItem('HealthCareUser'))
   if (doctor.role !== 'hospital') {
      return <Navigate to="/hospital/doctor-dashboard" />
   }
   return <Component />
}
export { UserAuthCheck, AdminAuthCheck, HospitalAuthCheck, DoctorAuthCheck }
