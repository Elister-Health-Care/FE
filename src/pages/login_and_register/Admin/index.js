import classNames from 'classnames/bind'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './AdminLogin.module.scss'
import config from '~/router/config'

const cx = classNames.bind(styles)

function AdminLoginPage() {
   const navigate = useNavigate()

   useEffect(() => {
      const isAdminLoggedIn = localStorage.getItem('admin')
      if (isAdminLoggedIn) {
         navigate('/admin/view-infor')
      }
   }, [navigate])

   const [adminLogin, setadminLogin] = useState({
      email: '',
      password: '',
   })

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setadminLogin({
         ...adminLogin,
         [name]: value,
      })
   }

   // eslint-disable-next-line no-unused-vars
   const [admin, setAdmin] = useState({
      id: null,
      role: null,
      name: '',
      email: '',
      phone: '',
      date_of_birth: null,
      avatar: null,
      gender: null,
      address: '',
      access_token: '',
      remember_token: null,
      created_at: null,
      updated_at: null,
      email_verified_at: null,
   })

   const handleLogin = async (e) => {
      e.preventDefault()
      try {
         const response = await axios.post(
            config.URL + 'api/admin/login',
            adminLogin
         )
         if (response.status === 200) {
            console.log(response)
            const updatedAdmin = response.data.admin
            updatedAdmin.access_token =
               response.data.message.original.access_token
            setAdmin(updatedAdmin) // Cập nhật giá trị của admin bằng setAdmin
            localStorage.setItem('admin', JSON.stringify(updatedAdmin)) // lưu vào localStorage
            navigate('/admin/view-infor')
            console.log(updatedAdmin)
            console.log('Đăng nhập thành công')
         } else {
            console.log(response)
            console.error('Đăng nhập thất bại')
         }
      } catch (error) {
         console.log(error)
         console.error('Lỗi kết nối đến API', error)
      }
   }
   return (
      <div className={cx('container')}>
         <div className={cx('screen')}>
            <div className={cx('screen_content')}>
               <div className={cx('title')}>Hello Admin!</div>
               <form
                  className={cx('login')}
                  encType="multipart/form-data"
                  onSubmit={handleLogin}
               >
                  <div className={cx('login_field')}>
                     <FontAwesomeIcon
                        icon="fa-solid fa-user"
                        className={cx('login_icon')}
                     />
                     <input
                        onChange={handleInputChange}
                        defaultValue={adminLogin.name}
                        type="email"
                        name="email"
                        className={cx('login_input')}
                        placeholder="User name / Email"
                     ></input>
                  </div>
                  <div className={cx('login_field')}>
                     <FontAwesomeIcon
                        icon="fa-solid fa-lock"
                        className={cx('login_icon')}
                     />
                     <input
                        onChange={handleInputChange}
                        defaultValue={adminLogin.password}
                        type="password"
                        name="password"
                        className={cx('login_input')}
                        placeholder="Password"
                     ></input>
                  </div>
                  <button
                     type="submit"
                     className={cx('button', 'login_submit')}
                  >
                     <span className={cx('button_text')}>Log In Now</span>
                     <FontAwesomeIcon
                        icon="fa-solid fa-chevron-right"
                        className={cx('button_icon')}
                     />
                  </button>
               </form>
               <div className={cx('social_login')}>
                  <h4>log in via</h4>
                  <div className={cx('social_icons')}>
                     <Link>
                        <FontAwesomeIcon
                           icon="fa-brands fa-google"
                           className={cx('social_login_icon')}
                        />
                     </Link>
                     <Link>
                        <FontAwesomeIcon
                           icon="fa-brands fa-facebook"
                           className={cx('social_login_icon')}
                        />
                     </Link>
                  </div>
                  <Link className={cx('back')}>Home &gt;&gt;</Link>
               </div>
            </div>
            <div className={cx('screen_background')}>
               <span
                  className={cx(
                     'screen_background_shape',
                     'screen_background_shape4'
                  )}
               ></span>
               <span
                  className={cx(
                     'screen_background_shape',
                     'screen_background_shape3'
                  )}
               ></span>
               <span
                  className={cx(
                     'screen_background_shape',
                     'screen_background_shape2'
                  )}
               ></span>
               <span
                  className={cx(
                     'screen_background_shape',
                     'screen_background_shape1'
                  )}
               ></span>
            </div>
         </div>
      </div>
   )
}

export default AdminLoginPage
