import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { NavLink } from 'reactstrap'

import config from '~/router/config'
import './LoginPage.css'

const LoginPage = () => {
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
            navigate('/user/view-infor')
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
         {/* <h1>Login Page</h1>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin} className="btn btn-primary">Primary Button</button> */}

         <div>
            {/* <link rel="stylesheet" href="/blog/css/login.css" /> */}
            <div className="container-fluid ps-md-0">
               <div className="row g-0">
                  <div
                     className="d-none d-md-flex col-md-4 col-lg-6 bg-image"
                     style={{
                        backgroundImage: `url('/user/image/login.jfif')`,
                     }}
                  ></div>
                  <div className="col-md-8 col-lg-6">
                     <div className="login d-flex align-items-center py-5">
                        <div className="container">
                           <div className="row">
                              <div className="col-md-9 col-lg-8 mx-auto">
                                 <h3 className="login-heading mb-4">
                                    Welcome back!
                                 </h3>
                                 <form
                                    encType="multipart/form-data"
                                    onSubmit={handleLogin}
                                 >
                                    <div className="form-group">
                                       <input
                                          name="email"
                                          onChange={handleInputChange}
                                          defaultValue={userLogin.name}
                                          type="email"
                                          className="form-control"
                                          aria-describedby="emailHelp"
                                          placeholder="Email@example.com"
                                       />
                                    </div>

                                    <div className="form-group">
                                       <input
                                          name="password"
                                          onChange={handleInputChange}
                                          defaultValue={userLogin.password}
                                          type="password"
                                          className="form-control"
                                          aria-describedby="emailHelp"
                                          placeholder="Password"
                                       />
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

                                    <div className="d-grid">
                                       <button
                                          className="col-12 btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                                          type="submit"
                                       >
                                          Sign in
                                       </button>
                                       <div className="text-center">
                                          <NavLink
                                             className="nav-link-icon small"
                                             to="/user-register"
                                             tag={Link}
                                          >
                                             Do not have an account ? Sign up
                                             here.
                                          </NavLink>
                                       </div>
                                       <div className="text-center">
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

                                    <hr className="my-4" />
                                    <div className="social google">
                                       <a href="/google">
                                          <img
                                             src="/user/image/google.png"
                                             alt=""
                                          />{' '}
                                          Sign up with Google
                                       </a>
                                    </div>
                                    <div className="social github">
                                       <a href="/github">
                                          <img
                                             src="/user/image/github.png"
                                             alt=""
                                          />{' '}
                                          Sign up with Github
                                       </a>
                                    </div>
                                 </form>
                                 <hr className="my-4" />
                                 <div className="d-flex justify-content-center">
                                    <NavLink
                                       className="nav-link-icon"
                                       to="/"
                                       tag={Link}
                                    >
                                       {' '}
                                       <button
                                          style={{ borderRadius: '10px' }}
                                          type="button"
                                          className="btn btn-outline-primary"
                                       >
                                          <i className="fa-solid fa-house"></i>{' '}
                                          Home
                                       </button>
                                    </NavLink>
                                 </div>

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

export default LoginPage
