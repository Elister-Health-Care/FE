import classNames from 'classnames/bind'

import styles from './HeaderAdminHospital.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)
function Header() {
   const location = useLocation()

   const [navActive, setNavActive] = useState('')
   const [linkActive, setLinkActive] = useState('')

   useEffect(() => {
      switch (location.pathname) {
         case '/hospital/dashboard':
            setNavActive('dashboard')
            break
         case '/hospital/doctor':
            setNavActive('hospital')
            setLinkActive('doctor')
            break
         case '/hospital/schedule':
            setNavActive('hospital')
            setLinkActive('schedule')
            break
         case '/hospital/service':
            setNavActive('category')
            setLinkActive('service')
            break
         case '/hospital/insurance':
            setNavActive('category')
            setLinkActive('insurance')
            break
         case '/hospital/department':
            setNavActive('category')
            setLinkActive('department')
            break
         default:
            setNavActive('')
            break
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [location.pathname])
   return (
      <header id={cx('topnav')}>
         <div className={cx('nav_custom')}>
            <div className={cx('container-fluid')}>
               {/* proflie */}
               <ul
                  className={cx(
                     'list-unstyled',
                     'topnav-menu',
                     'float-right',
                     'mb-0'
                  )}
               >
                  <li className="dropdown notification-list">
                     <Link
                        className={cx('nav-link', 'nav-user mr-0')}
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="false"
                        aria-expanded="false"
                     >
                        <img
                           src="/image/avatar_admin_default.png"
                           alt={'avatar'}
                           className={cx('rounded-circle', 'avatar')}
                        />
                        <span className="pro-user-name d-none d-xl-inline-block ml-2">
                           Maxine K <i className="mdi mdi-chevron-down"></i>
                        </span>
                     </Link>
                     <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                        <div className="dropdown-header noti-title">
                           <h6 className="text-overflow m-0">Welcome !</h6>
                        </div>

                        <Link to="/" className="dropdown-item notify-item">
                           <i className="mdi mdi-home-import-outline"></i>
                           &ensp;&nbsp;
                           <span>Trang chủ</span>
                        </Link>

                        <Link
                           to="profile"
                           className="dropdown-item notify-item"
                        >
                           <i className="mdi mdi-account-outline"></i>
                           &ensp;&nbsp;
                           <span>Profile</span>
                        </Link>

                        <Link
                           to="change-password"
                           className="dropdown-item notify-item"
                        >
                           <i className="mdi mdi-lock-outline"></i>&ensp;&nbsp;
                           <span>Đổi mật khẩu</span>
                        </Link>

                        <div className="dropdown-divider"></div>

                        <Link className="dropdown-item notify-item">
                           <i className="mdi mdi-logout-variant"></i>
                           &ensp;&nbsp;
                           <span>Logout</span>
                        </Link>
                     </div>
                  </li>
               </ul>
               {/* logo */}
               <div className={cx('logo-box')}>
                  <Link to="/" className={cx('logo')}>
                     <img src="/image/logo_admin.png" alt="logo" />
                  </Link>
               </div>
               {/* mennu */}
               <ul className={cx('navigation-menu')}>
                  <li className={cx('has-submenu')}>
                     <Link
                        to="dashboard"
                        className={cx(
                           navActive === 'dashboard' && 'nav_active'
                        )}
                     >
                        <i className="ti-home"></i>&ensp;&nbsp;Dashboard
                     </Link>
                  </li>

                  <li className={cx('has-submenu')}>
                     <Link
                        className={cx(navActive === 'hospital' && 'nav_active')}
                     >
                        <i className="mdi mdi-hospital-building"></i>
                        &ensp;&nbsp;Bệnh viện
                     </Link>
                     <ul className={cx('submenu')}>
                        <li>
                           <Link
                              to="doctor"
                              className={cx(
                                 linkActive === 'doctor' && 'link_active'
                              )}
                           >
                              <i className="mdi mdi-doctor"></i>&ensp; Bác sĩ
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="schedule"
                              className={cx(
                                 linkActive === 'schedule' && 'link_active'
                              )}
                           >
                              <i className="mdi mdi-calendar-month-outline"></i>
                              &ensp; Lịch trình
                           </Link>
                        </li>
                     </ul>
                  </li>
                  <li className={cx('has-submenu')}>
                     <Link
                        className={cx(navActive === 'category' && 'nav_active')}
                     >
                        <i className="ti-menu-alt"></i>&ensp;&nbsp; Danh mục
                     </Link>
                     <ul className={cx('submenu')}>
                        <li>
                           <Link
                              to="service"
                              className={cx(
                                 linkActive === 'service' && 'link_active'
                              )}
                           >
                              <i className="mdi mdi-database"></i>&ensp; Dịch vụ
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="insurance"
                              className={cx(
                                 linkActive === 'insurance' && 'link_active'
                              )}
                           >
                              <i className="mdi mdi-credit-card-plus-outline"></i>
                              &ensp; Bảo hiểm
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="department"
                              className={cx(
                                 linkActive === 'department' && 'link_active'
                              )}
                           >
                              <i className="mdi mdi-progress-alert"></i>&ensp;
                              Chuyên khoa
                           </Link>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   )
}

export default Header
