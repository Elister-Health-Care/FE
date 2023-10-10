import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { NavLink } from 'reactstrap'

import config from '~/router/config'
import './UserLogin.css'

const UserLoginPage = () => {
   const navigate = useNavigate()

   useEffect(() => {
      const isAdminLoggedIn = localStorage.getItem('admin')
      if (isAdminLoggedIn) {
         navigate('/user/view-infor')
      }
   }, [navigate])

   const [userLogin, setUserLogin] = useState({
      email: '',
      password: '',
   })

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setUserLogin({
         ...userLogin,
         [name]: value,
      })
   }

   // eslint-disable-next-line no-unused-vars
   const [user, setUser] = useState({
      id: null,
      id_user: null,
      is_accept: null,
      role: null,
      name: '',
      username: '',
      email: '',
      phone: '',
      google_id: null,
      date_of_birth: null,
      avatar: null,
      gender: null,
      address: '',
      status: null,
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
            config.URL + 'api/user/login',
            userLogin
         )
         if (response.status === 200) {
            console.log(response)
            const updatedUser = response.data.user
            updatedUser.access_token =
               response.data.message.original.access_token
            setUser(updatedUser) // Cập nhật giá trị của user bằng setUser
            localStorage.setItem('user', JSON.stringify(updatedUser)) // lưu vào localStorage
            navigate('/home')
            console.log(updatedUser)
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
      <div>
         <div className="login d-flex">
            <div className="container m-auto ps-md-0">
               <div className="row g-0 pt-3 pb-3 body-login">
                  <div className="d-none d-md-block col-md-5 col-lg-6">
                     <img
                        alt=""
                        src="/blog/image/doctor-main.png"
                        className="w-100 h-auto"
                     />
                  </div>
                  <div className="col-md-7 col-lg-6">
                     <div className="d-flex align-items-center">
                        <div className="container">
                           <div className="row">
                              <div className="col-md-10 mx-auto">
                                 <NavLink
                                    className="nav-link-icon d-flex"
                                    to="/home"
                                    tag={Link}
                                 >
                                    <img
                                       alt=""
                                       src="/blog/image/logo.png"
                                       className="m-auto w-75"
                                    />
                                 </NavLink>
                                 <h3 className="login-heading mb-4 mt-4 text-center">
                                    <b>Đăng nhập</b>
                                 </h3>
                                 <form
                                    encType="multipart/form-data"
                                    onSubmit={handleLogin}
                                 >
                                    <div className="form-group">
                                       <label for="email">Email:</label>
                                       <input
                                          name="email"
                                          onChange={handleInputChange}
                                          defaultValue={userLogin.name}
                                          type="email"
                                          id="email"
                                          className="login-input"
                                          aria-describedby="emailHelp"
                                          placeholder="Email@example.com"
                                       />
                                    </div>

                                    <div className="form-group">
                                       <label for="email">Mật khẩu:</label>
                                       <input
                                          name="password"
                                          onChange={handleInputChange}
                                          defaultValue={userLogin.password}
                                          type="password"
                                          className="login-input"
                                          aria-describedby="emailHelp"
                                          placeholder="Password"
                                       />
                                    </div>
                                    <div className="mb-3 float-left">
                                       <input
                                          name="check-box"
                                          onChange={handleInputChange}
                                          defaultValue={userLogin.password}
                                          type="checkbox"
                                          aria-describedby="emailHelp"
                                          placeholder="Password"
                                       />{' '}
                                       Nhớ mật khẩu
                                    </div>
                                    <div className="mb-3">
                                       <div className="float-right">
                                          <Link
                                             className="small"
                                             data-toggle="modal"
                                             data-target="#modalForGotPassword"
                                             href="#"
                                          >
                                             Forgot password?
                                          </Link>
                                       </div>
                                    </div>
                                    {/* 
                      <div className="row mb-3">
                        <div className="col-7 p-0">
                          <div className="ml-3 g-recaptcha" data-sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY}></div>
                          {errors.has('g-recaptcha-response') && (
                            <span className="text-danger ml-3">{errors.first('g-recaptcha-response')}</span>
                          )}
                        </div>
                      </div> */}

                                    <div className="d-grid mt-5">
                                       <button
                                          className="col-12 btn btn-lg btn-login text-uppercase fw-bold mb-2"
                                          type="submit"
                                       >
                                          Đăng nhập
                                       </button>
                                       <div className="text-center mt-2">
                                          <NavLink
                                             className="nav-link-icon small ml-2 mr-2"
                                             to="/user-register"
                                             tag={Link}
                                          >
                                             Bạn chưa có tài khoản? Đăng ký tại
                                             đây
                                          </NavLink>
                                       </div>
                                    </div>

                                    <p className="mt-2 text-center">Hoặc</p>
                                    <div className="social google">
                                       <a href="/google">
                                          <img
                                             src="/blog/image/google.png"
                                             alt=""
                                          />{' '}
                                          Đăng nhập với Google
                                       </a>
                                    </div>
                                    <div className="social github">
                                       <a href="/github">
                                          <img
                                             src="/blog/image/github.png"
                                             alt=""
                                          />{' '}
                                          Đăng nhập với Github
                                       </a>
                                    </div>
                                 </form>
                                 {/* Modal */}
                                 <div
                                    className="modal fade"
                                    id="modalForGotPassword"
                                    tabIndex="-1"
                                    role="dialog"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                 >
                                    <div
                                       className="modal-dialog"
                                       role="document"
                                    >
                                       <div className="modal-content">
                                          <div className="modal-header">
                                             <h5
                                                className="modal-title"
                                                id="exampleModalLabel"
                                             >
                                                Forgot Password
                                             </h5>
                                             <button
                                                style={{ outline: 'none' }}
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                             >
                                                <span aria-hidden="true">
                                                   &times;
                                                </span>
                                             </button>
                                          </div>
                                          <div className="modal-body">
                                             <form
                                                method="POST"
                                                action="/forgot.sendcode"
                                                encType="multipart/form-data"
                                             >
                                                <div className="form-group row">
                                                   <label
                                                      htmlFor="staticEmail"
                                                      className="col-sm-2 col-form-label"
                                                   >
                                                      Email
                                                   </label>
                                                   <div className="col-sm-10">
                                                      <input
                                                         name="email"
                                                         type="email"
                                                         className="form-control"
                                                         id="staticEmail"
                                                         placeholder="email@example.com"
                                                         defaultValue=""
                                                      />
                                                   </div>
                                                </div>
                                             </form>
                                          </div>
                                          <div className="modal-footer">
                                             <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-dismiss="modal"
                                             >
                                                Close
                                             </button>
                                             <button
                                                type="submit"
                                                className="btn btn-primary"
                                             >
                                                Submit
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default UserLoginPage
