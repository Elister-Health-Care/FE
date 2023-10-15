import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
   UserAuthCheck,
   AdminAuthCheck,
   HospitalAuthCheck,
   DoctorAuthCheck,
} from './AuthCheck'

// Page Not Found
import PageNotFoundPage from '~/pages/error/PageNotFound'
// Import login pages
import UserLoginPage from '~/pages/login_and_register/user/Login/UserLoginPage'
import UserUpdateInfor from '~/pages/login_and_register/user/UpdateInfor/UserUpdateInfor'
import UserRegisterPage from '~/pages/login_and_register/user/Register/UserRegisterPage'

// import UserRegisterPage from '~/pages/login_and_register/user/HospitalRegister'
import HospitalRegisterPage from '~/pages/login_and_register/user/HospitalRegister'
import AdminLoginPage from '~/pages/login_and_register/Admin'

// Import main pages(public)
import HomePage from '~/pages/main/Home'
import UserProductDetailPage from '~/pages/main/Product'

// Import user pages
import UserMainLayout from '~/layouts/UserMainLayout'
import UserLayout from '~/layouts/UserLayout'
import UserViewInforPage from '~/pages/user/Infor'
import UserChangePasswordPage from '~/pages/user/ChangePassword'
import ChatBox from '~/pages/user/chat/ChatBox'
import UserDashboardPage from '~/pages/user/Dashboard'
import UserProfile from '~/pages/user/Profile'
import UserEditProfile from '~/pages/user/Profile/edit'
import FormEditProfile from '~/pages/user/Profile/form-edit'
// Import admin pages
import AdminLayout from '~/layouts/AdminLayout'
import AdminDashboardPage from '~/pages/admin/Dashboard'
import AdminProfilePage from '~/pages/admin/Profile'
import AdminViewInforPage from '~/pages/admin/Infor'
import AdminChangePasswordPage from '~/pages/admin/ChangePassword'
import AdminDepartment from '~/pages/admin/Department'
import AdminHealthInsurance from '~/pages/admin/HealthInsurance'
import AdminAllUserPage from '~/pages/admin/UserManager'
import AdminService from '~/pages/admin/Service'
import AdminCategory from '~/pages/admin/Category'
import AdminStatistical from '~/pages/admin/Statistical'
import AdminManager from '~/pages/admin/AdminManager'

//Import admin hospital pages
import AdminHospitalLayout from '~/layouts/AdminHospitalLayout'
import HospitalDepartmentPage from '~/pages/admin_hospital/Department'
import HospitalDoctorPage from '~/pages/admin_hospital/Doctor'
import HospitalArticlePage from '~/pages/admin_hospital/Article'
import HospitalServicePage from '~/pages/admin_hospital/Service'
import HospitalInsurancePage from '~/pages/admin_hospital/Insurance'
import HospitalProfilePage from '~/pages/admin_hospital/Profile'
import HospitalChangepasswordPage from '~/pages/admin_hospital/ChangePassword'
import DoctorDasboardPage from '~/pages/doctor/Dashboard'
import DoctorSchedulePage from '~/pages/doctor/Schedule'
import DoctorArticlePage from '~/pages/doctor/Article'
import DoctorProfilePage from '~/pages/doctor/Profile'

//Import Test

const BigRoutes = () => (
   <Routes>
      {/* Login route **************************/}
      <Route path="user-login" element={<UserLoginPage />} />
      <Route path="user-update" element={<UserUpdateInfor />} />
      <Route path="user-register" element={<UserRegisterPage />} />
      {/* <Route path="user-register" element={<UserRegisterPage />} /> */}
      <Route path="hospital-register" element={<HospitalRegisterPage />} />
      <Route path="admin-login" element={<AdminLoginPage />} />

      {/* Public route */}
      <Route path="/" element={<UserMainLayout />}>
         <Route path="" element={<HomePage />} />
         <Route path="product/:id" element={<UserProductDetailPage />} />
         {/* private route user-main */}
         <Route path="user" element={<UserAuthCheck component={UserProfile} />}>
            <Route path="profile" element={<UserEditProfile />} />
            <Route path="edit-profile" element={<FormEditProfile />} />
         </Route>
      </Route>

      {/* Private route user-hospital ********************/}
      <Route
         path="user-hospital"
         element={<UserAuthCheck component={UserLayout} />}
      >
         <Route path="dashboard" element={<UserDashboardPage />}></Route>
         <Route path="view-infor" element={<UserViewInforPage />} />
         <Route path="change-password" element={<UserChangePasswordPage />} />
         <Route path="chat/:id" element={<ChatBox />} />
      </Route>

      {/* Private route hospital ***********************/}
      <Route
         path="hospital"
         element={<HospitalAuthCheck component={AdminHospitalLayout} />}
      >
         <Route
            path="dashboard"
            element={<DoctorAuthCheck component={AdminDashboardPage} />}
         ></Route>
         <Route
            path="doctor"
            element={<DoctorAuthCheck component={HospitalDoctorPage} />}
         ></Route>
         <Route
            path="service"
            element={<DoctorAuthCheck component={HospitalServicePage} />}
         ></Route>
         <Route
            path="insurance"
            element={<DoctorAuthCheck component={HospitalInsurancePage} />}
         ></Route>
         <Route
            path="department"
            element={<DoctorAuthCheck component={HospitalDepartmentPage} />}
         ></Route>
         <Route
            path="article"
            element={<DoctorAuthCheck component={HospitalArticlePage} />}
         ></Route>

         <Route
            path="profile"
            element={<DoctorAuthCheck component={HospitalProfilePage} />}
         ></Route>
         <Route
            path="change-password"
            element={<HospitalChangepasswordPage />}
         ></Route>
         <Route
            path="doctor-dashboard"
            element={<DoctorDasboardPage />}
         ></Route>
         <Route path="doctor-schedule" element={<DoctorSchedulePage />}></Route>
         <Route path="doctor-article" element={<DoctorArticlePage />}></Route>
         <Route path="doctor-profile" element={<DoctorProfilePage />}></Route>
      </Route>

      {/* Private route admin *************************/}
      <Route path="admin" element={<AdminAuthCheck component={AdminLayout} />}>
         <Route path="dashboard" element={<AdminDashboardPage />}></Route>
         <Route path="view-infor" element={<AdminViewInforPage />} />
         <Route path="profile" element={<AdminProfilePage />} />
         <Route path="change-password" element={<AdminChangePasswordPage />} />
         <Route path="user-manager" element={<AdminAllUserPage />} />
         <Route path="admin-manager" element={<AdminManager />} />
         <Route path="department" element={<AdminDepartment />} />
         <Route path="health-insurance" element={<AdminHealthInsurance />} />
         <Route path="service" element={<AdminService />} />
         <Route path="category" element={<AdminCategory />} />
         <Route path="statistical" element={<AdminStatistical />} />
      </Route>

      {/* Error route **********************************/}
      <Route path="*" element={<PageNotFoundPage />} />
      <Route path="/page-not-found" element={<PageNotFoundPage />} />
   </Routes>
)

export { BigRoutes }
