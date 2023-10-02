import React from 'react'

import './SiderBar.css'
import { Link, useNavigate } from 'react-router-dom'
import { NavLink } from 'reactstrap'

const SiderBar = () => {
   const navigate = useNavigate()
   const userLogout = () => {
      localStorage.removeItem('admin')
      navigate('/admin-login')
   }

   const admin = JSON.parse(localStorage.getItem('admin'))

   return (
      <div id="sider_bar_admin">
         <ul className="nav-links" id="accordion">
            <div id="logo">
               <img id="img_logo" src="/admin/images/logo.png" alt="" />
               <span id="text_logo">Admin</span>
               <span id="show_sidebar">
                  <i className="fa-solid fa-bars bx bx-menu"></i>
               </span>
            </div>
            <li>
               <NavLink className="nav-link-icon" to="/home" tag={Link}>
                  <i className="fa-solid fa-house"></i>
                  <span className="link_name">Home</span>
               </NavLink>
            </li>
            <li>
               <div>
                  <a
                     style={{ fontWeight: 500 }}
                     href={'/'}
                     className="link_arrow"
                     data-toggle="collapse"
                     data-target="#collapseUser"
                     aria-expanded="true"
                     aria-controls="collapseOne"
                  >
                     <i className="fa-solid fa-user-gear"></i>
                     <span className="link_name">Information Settings</span>
                     <i className="bx bxs-chevron-down arrow"></i>
                  </a>
                  <div
                     id="collapseUser"
                     className="collapse"
                     aria-labelledby="headingOne"
                     data-parent="#accordion"
                  >
                     <div className="card-body2 list_card">
                        <NavLink
                           className="nav-link-icon"
                           to="/admin/view-infor"
                           tag={Link}
                        >
                           <i className="fa-solid fa-address-card"></i>
                           <span className="link_name">Update Information</span>
                        </NavLink>
                        <NavLink
                           className="nav-link-icon"
                           to="/admin/change-password"
                           tag={Link}
                        >
                           <i className="fa-solid fa-key"></i>
                           <span className="link_name">Change Password</span>
                        </NavLink>
                     </div>
                  </div>
               </div>
            </li>
            <li>
               <div>
                  <a
                     href={'/'}
                     className="link_arrow"
                     data-toggle="collapse"
                     data-target="#collapseArticle"
                     aria-expanded="true"
                     aria-controls="collapseOne"
                  >
                     <i className="fa-brands fa-blogger-b"></i>
                     <span className="link_name">Articles</span>
                     <i className="bx bxs-chevron-down arrow"></i>
                  </a>
                  <div
                     id="collapseArticle"
                     className="collapse"
                     aria-labelledby="headingOne"
                     data-parent="#accordion"
                  >
                     <div className="card-body2 list_card">
                        <a href={'/'}>
                           <i className="fa-solid fa-list"></i>
                           <span className="link_name">All Article</span>
                        </a>
                        <a href={'/'}>
                           <i className="fa-solid fa-heart"></i>
                           <span className="link_name">My Article</span>
                        </a>
                        <a href={'/'}>
                           <i className="fa-solid fa-square-plus"></i>
                           <span className="link_name">Add Article</span>
                        </a>
                     </div>
                  </div>
               </div>
            </li>
            <li>
               <a href={'/'}>
                  <i className="fa-solid fa-circle-user"></i>
                  <span className="link_name">Personal interface</span>
               </a>
            </li>
            <li>
               <NavLink
                  className="nav-link-icon"
                  to="/admin/department"
                  tag={Link}
               >
                  <i className="fa-solid fa-stethoscope"></i>
                  <span className="link_name">Department</span>
               </NavLink>
            </li>
            <li>
               <a href={'/'}>
                  <i className="fa-solid fa-circle-question"></i>
                  <span className="link_name">Help</span>
               </a>
            </li>
            <li>
               <a href={'/'}>
                  <i className="fa-solid fa-circle-info"></i>
                  <span className="link_name">Comment</span>
               </a>
            </li>
            <li>
               <div className="profile-details">
                  <div className="name-job">
                     <div className="profile_name">{admin.name}</div>
                     <div className="job">{admin.role}</div>
                  </div>
                  <Link onClick={userLogout} id="logout">
                     <i className="fa-solid fa-right-from-bracket bx bx-log-out"></i>
                  </Link>
               </div>
            </li>
         </ul>
      </div>
   )
}

export default SiderBar
