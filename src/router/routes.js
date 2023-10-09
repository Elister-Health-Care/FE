import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserAuthCheck, AdminAuthCheck } from './AuthCheck'

// Page Not Found
import PageNotFoundPage from '~/pages/error/PageNotFound'
// Import login pages
import UserLoginPage from '~/pages/login_and_register/user/Login/UserLoginPage'
import UserUpdateInfor from '~/pages/login_and_register/user/UpdateInfor/UserUpdateInfor'
import UserRegisterPage from '~/pages/login_and_register/user/Register/UserRegisterPage'
import AdminLoginPage from '~/pages/login_and_register/Admin'
import UserLoginPage from '~/pages/login_and_register/user/Login/LoginPage'
// import UserRegisterPage from '~/pages/login_and_register/user/HospitalRegister'
import HospitalRegisterPage from '~/pages/login_and_register/user/HospitalRegister'

// Import main pages(public)
import HomePage from '~/pages/main/Home'
import UserProductDetailPage from '~/pages/main/Product'

// Import user pages
import UserLayout from '~/layouts/UserLayout'
import UserViewInforPage from '~/pages/user/Infor'
import UserChangePasswordPage from '~/pages/user/ChangePassword'
import ChatBox from '~/pages/user/chat/ChatBox'
import UserDashboardPage from '~/pages/user/Dashboard'

// Import admin pages
import AdminLayout from '~/layouts/AdminLayout'
import AdminDashboardPage from '~/pages/admin/Dashboard'
import AdminViewInforPage from '~/pages/admin/Infor'
import AdminChangePasswordPage from '~/pages/admin/ChangePassword'
import AdminDepartment from '~/pages/admin/Department'

const BigRoutes = () => (
   <Routes>
      {/* Login route */}
      <Route path="user-login" element={<UserLoginPage />} />
      <Route path="user-update" element={<UserUpdateInfor />} />
      <Route path="user-register" element={<UserRegisterPage />} />
      <Route path="admin-login" element={<AdminLoginPage />} />

      {/* Public route */}
      <Route path="home" element={<HomePage />}>
         <Route path="product/:id" element={<UserProductDetailPage />} />
      </Route>

      {/* Private route user */}
      <Route path="user" element={<UserAuthCheck component={UserLayout} />}>
         <Route path="dashboard" element={<UserDashboardPage />}></Route>
         <Route path="view-infor" element={<UserViewInforPage />} />
         <Route path="change-password" element={<UserChangePasswordPage />} />
         <Route path="chat/:id" element={<ChatBox />} />
      </Route>

      {/* Private route admin */}
      <Route path="admin" element={<AdminAuthCheck component={AdminLayout} />}>
         <Route path="dashboard" element={<AdminDashboardPage />}></Route>
         <Route path="view-infor" element={<AdminViewInforPage />} />
         <Route path="change-password" element={<AdminChangePasswordPage />} />
         <Route path="department" element={<AdminDepartment />} />
      </Route>

      {/* Error route */}
      <Route path="*" element={<PageNotFoundPage />} />
   </Routes>
)

export { BigRoutes }
