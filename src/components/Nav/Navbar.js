import React from 'react'
import { Navbar, Container, NavDropdown, Collapse, Nav } from 'react-bootstrap'
import logo from '~/Assets/logo.png'
import './Navbar.css'
import { useSelector } from 'react-redux'
import config from '~/router/config'
import { Link, useNavigate } from 'react-router-dom'
import { BsFillSaveFill, BsChevronDown } from 'react-icons/bs'
import { BiSolidHelpCircle } from 'react-icons/bi'
import { IoShareSocialSharp } from 'react-icons/io5'
import {
   AiOutlineHistory,
   AiOutlineLogout,
   AiFillSetting,
} from 'react-icons/ai'
import { GiHealthNormal } from 'react-icons/gi'
import { useEffect, useState } from 'react'

const Navbars = () => {
   const user = JSON.parse(localStorage.getItem('HealthCareUser'))
   const [avatar, setAvatar] = useState('/image/avatar_admin_default.png')
   const [name, setName] = useState(user && user.name ? user.name : 'User')

   const isUserUpdated = useSelector((state) => state.user.keyUserUpdated)

   const navigate = useNavigate()

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem('HealthCareUser'))
      if (user && user.avatar) {
         var https_regex = /^(https)/
         if (https_regex.test(String(user.avatar).toLowerCase()) == true) {
            setAvatar(user.avatar)
         } else {
            setAvatar(config.URL + user.avatar)
         }
      }
      if (user && user.name) {
         setName(user.name)
      }
   }, [isUserUpdated])
   const handleHome = () => {
      navigate('/')
   }
   const handleLogout = () => {
      localStorage.removeItem('HealthCareUser')
   }

   return (
      <Navbar expand="lg" className="bg-body-tertiary">
         <div className="container-fluid">
            <Navbar.Brand onClick={handleHome}>
               <img src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
               className="justify-content-end"
               id="basic-navbar-nav"
            >
               <Nav className="me-auto">
                  <NavDropdown
                     title={
                        <div>
                           Chuyên mục <BsChevronDown />
                        </div>
                     }
                     className="has-megamenu"
                     id="basic-nav-dropdown"
                  >
                     <Container>
                        <div className="row w-100">
                           <div className="col-lg-3 col-md-5 border-right pt-2 pb-2">
                              <h6>
                                 <b>Chuyên mục sức khỏe</b>
                              </h6>
                              <ul className="w-100 mt-3">
                                 <li>
                                    <img
                                       className="icon"
                                       src={require('~/Assets/Oral-Health.webp')}
                                    />
                                    <Link>Sức khỏe răng miệng</Link>
                                 </li>
                                 <li>
                                    <img
                                       className="icon"
                                       src={require('~/Assets/Oral-Health.webp')}
                                    />
                                    <Link>Dược liệu</Link>
                                 </li>
                                 <li>
                                    <img
                                       className="icon"
                                       src={require('~/Assets/Oral-Health.webp')}
                                    />
                                    <Link>Tâm lý - tâm thành</Link>
                                 </li>
                                 <li>
                                    <img
                                       className="icon"
                                       src={require('~/Assets/Oral-Health.webp')}
                                    />
                                    <Link>Thể dục thể thao</Link>
                                 </li>
                                 <li>
                                    <img
                                       className="icon"
                                       src={require('~/Assets/Oral-Health.webp')}
                                    />
                                    <Link>Lão hóa lành mạnh</Link>
                                 </li>
                                 <li>
                                    <img
                                       className="icon"
                                       src={require('~/Assets/Oral-Health.webp')}
                                    />
                                    <Link>Thói quen lành mạnh</Link>
                                 </li>
                              </ul>
                              <Link className="btn btn-outline-primary w-100">
                                 Xem tất cả danh mục{' '}
                                 <i className="fa-solid fa-chevron-right"></i>
                              </Link>
                           </div>
                           <div className="col-lg-9 col-md-7"></div>
                        </div>
                     </Container>
                  </NavDropdown>
                  <NavDropdown
                     title={
                        <div>
                           Kiểm tra sức khỏe <BsChevronDown />
                        </div>
                     }
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
                     title={
                        <div>
                           Đặt lịch bác sĩ <BsChevronDown />
                        </div>
                     }
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
                  <NavDropdown
                     title={
                        <div>
                           Cộng đồng <BsChevronDown />
                        </div>
                     }
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
                  {user ? (
                     <NavDropdown
                        className="nav-info"
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
                        <div className="row mr-0 ml-0">
                           <div className="col-lg-6 col-md-6">
                              <div className="dropdown-info">
                                 <Link>
                                    <BsFillSaveFill className="text-success" />
                                    <br />
                                    Đã lưu
                                 </Link>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-6">
                              <div className="dropdown-info">
                                 <Link>
                                    <AiOutlineHistory />
                                    <br />
                                    Quản lý đặt lịch
                                 </Link>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-6">
                              <div className="dropdown-info">
                                 <Link>
                                    <GiHealthNormal className="text-danger" />
                                    <br />
                                    Sức khỏe
                                 </Link>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-6">
                              <div className="dropdown-info">
                                 <Link>
                                    <IoShareSocialSharp className="text-primary" />
                                    <br />
                                    Cộng đồng
                                 </Link>
                              </div>
                           </div>
                        </div>
                        <div className="row mr-0 ml-0">
                           <div className="col-lg-12 col-md-12">
                              <div className="dropdown-info">
                                 <Link
                                    to={'/user-login'}
                                    onClick={handleLogout}
                                 >
                                    <AiOutlineLogout className="mr-1 text-dark" />
                                    Đăng xuất
                                 </Link>
                              </div>
                           </div>
                        </div>
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
