import React from 'react'
import { Navbar, Container, NavDropdown, Collapse, Nav } from 'react-bootstrap'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { useSelector } from 'react-redux'
import config from '~/router/config'
import { Link, useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react'

const Navbars = () => {
   const user = JSON.parse(localStorage.getItem('HealthCareUser'))
   const [avatar, setAvatar] = useState('/image/avatar_admin_default.png')
   const [name, setName] = useState(user && user.name ? user.name : 'User')

   const isUserUpdated = useSelector((state) => state.user.keyUserUpdated)

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem('HealthCareUser'))
      if (user && user.avatar) {
         setAvatar(config.URL + user.avatar)
      }
      if (user && user.name) {
         setName(user.name)
      }
   }, [isUserUpdated])

   useEffect(() => {
      if (user) {
         if (user.avatar) {
            setAvatar(config.URL + user.avatar)
         }
      }
   }, [])
   return (
      <Navbar expand="lg" className="bg-body-tertiary">
         <div className="container-fluid">
            <Navbar.Brand href="#home">
               <img src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
               className="justify-content-end"
               id="basic-navbar-nav"
            >
               <Nav className="me-auto">
                  <NavDropdown title="Chuyên mục" id="basic-nav-dropdown">
                     <NavDropdown.Item href="">About Us</NavDropdown.Item>
                     <NavDropdown.Item href="">Our Team</NavDropdown.Item>
                     <NavDropdown.Item href="">FAQ's</NavDropdown.Item>
                     <NavDropdown.Item href="">Booking</NavDropdown.Item>
                     <NavDropdown.Item href="">Error 404</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                     title="Kiểm tra sức khỏe"
                     id="basic-nav-dropdown"
                  >
                     <NavDropdown.Item href="#action/3.1">
                        Services
                     </NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">
                        Something
                     </NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">
                        Separated link
                     </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                     title="Đặc lịch với bác sĩ"
                     id="basic-nav-dropdown"
                  >
                     <NavDropdown.Item href="#action/3.1">
                        Action
                     </NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">
                        Another action
                     </NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">
                        Something
                     </NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">
                        Separated link
                     </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Cộng đồng" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">
                        Action
                     </NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">
                        Another action
                     </NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">
                        Something
                     </NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">
                        Separated link
                     </NavDropdown.Item>
                  </NavDropdown>
                  {user ? (
                     <NavDropdown
                        title={
                           <div className="pull-left d-flex">
                              <img
                                 className="avatar"
                                 src={avatar}
                                 alt="user pic"
                              />
                              <span className="my-auto ml-1">{user.name}</span>
                           </div>
                        }
                        id="basic-nav-dropdown"
                     >
                        <NavDropdown.Item className="p-2">
                           <Link to={'user/profile'} tag={Link}>
                              <div className="d-flex info-user">
                                 <img
                                    className="avatar"
                                    src={avatar}
                                    alt="user pic"
                                 />
                                 <p className="ml-1">
                                    {name}
                                    <div>
                                       <small>
                                          Xem hồ sơ của bạn
                                          <i className="fa-solid fa-chevron-right"></i>
                                       </small>
                                    </div>
                                 </p>
                              </div>
                           </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="p-2" href="#action/3.2">
                           Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item className="p-2" href="#action/3.3">
                           Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="p-2" href="#action/3.4">
                           Separated link
                        </NavDropdown.Item>
                     </NavDropdown>
                  ) : (
                     <Link to={'/user-login'} tag={Link}>
                        <button className="">
                           Đăng nhập
                           <span>
                              <i className="fa-solid fa-chevron-right"></i>
                           </span>
                        </button>
                     </Link>
                  )}
               </Nav>
            </Navbar.Collapse>
         </div>
      </Navbar>
   )
}

export default Navbars
