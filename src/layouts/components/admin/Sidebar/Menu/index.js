import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

import styles from './Menu.module.scss'
import { Link, useLocation } from 'react-router-dom'

const cx = classNames.bind(styles)

function Menu({ children }) {
   const location = useLocation()

   const [selected, setSelected] = useState('')
   const [ulSeclect, setUlSelected] = useState('')
   const [isOpenUl, setisOpenUl] = useState('')

   useEffect(() => {
      if (location.pathname === '/admin/dashboard') {
         setSelected('Dashboard')
      } else if (location.pathname === '/admin/department') {
         setSelected('Quản lý')
         setUlSelected('Nhân viên')
         setisOpenUl('Quản lý')
      } else if (location.pathname === '/category-dish-manager') {
         setSelected('Quản lý')
         setUlSelected('Danh mục món ăn')
         setisOpenUl('Quản lý')
      } else if (location.pathname === '/desk-manager') {
         setSelected('Quản lý')
         setUlSelected('Bàn')
         setisOpenUl('Quản lý')
      } else if (location.pathname === '/dish-manager') {
         setSelected('Quản lý')
         setUlSelected('Món ăn')
         setisOpenUl('Quản lý')
      } else if (location.pathname === '/statistical-manager') {
         setSelected('Thống kê')
         setUlSelected('Thống kê')
         setisOpenUl('Thống kê')
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const handleClickSelect = (value) => {
      if (selected === value) {
         setSelected('')
         setUlSelected('')
         setisOpenUl('')
      } else {
         setSelected(value)
         setUlSelected('')
         setisOpenUl(value)
      }
   }
   const handleClickSelectUl = (value) => {
      setUlSelected(value)
   }

   return (
      <div className={cx('sidebar_menu')}>
         {children}
         <ul className="p_0">
            <li className={cx('menu_title')}>Navigation</li>
            <li className="">
               <Link
                  to="dashboard"
                  onClick={() => handleClickSelect('Dashboard')}
                  className={cx(selected === 'Dashboard' && 'active')}
               >
                  <i className="ti-home"></i>
                  <span className={cx('space_icon')}>Dashboard</span>
               </Link>
            </li>
            <li className="">
               <Link
                  onClick={() => handleClickSelect('Quản lý')}
                  className={cx(selected === 'Quản lý' && 'active')}
               >
                  <i className="ti-menu-alt"></i>
                  <span className={cx('space_icon')}>Quản lý</span>
                  <span
                     className={cx(
                        'icon_right',
                        'ti-angle-right',
                        isOpenUl === 'Quản lý' && 'routate_90'
                     )}
                  ></span>
               </Link>
               <ul className={cx('ul_close', isOpenUl === 'Quản lý' && 'open')}>
                  <li>
                     <Link
                        to="/staff-manager"
                        onClick={() => handleClickSelectUl('Nhân viên')}
                        className={cx(ulSeclect === 'Nhân viên' && 'active')}
                     >
                        Nhân viên
                     </Link>
                  </li>
                  <li>
                     <Link
                        to="/desk-manager"
                        onClick={() => handleClickSelectUl('Bàn')}
                        className={cx(ulSeclect === 'Bàn' && 'active')}
                     >
                        Bàn
                     </Link>
                  </li>
                  <li>
                     <Link
                        to="/category-dish-manager"
                        onClick={() => handleClickSelectUl('Danh mục món ăn')}
                        className={cx(
                           ulSeclect === 'Danh mục món ăn' && 'active'
                        )}
                     >
                        Danh mục món ăn
                     </Link>
                  </li>
                  <li>
                     <Link
                        to="/dish-manager"
                        onClick={() => handleClickSelectUl('Món ăn')}
                        className={cx(ulSeclect === 'Món ăn' && 'active')}
                     >
                        Món ăn
                     </Link>
                  </li>
               </ul>
            </li>
            <li className="">
               <Link
                  onClick={() => handleClickSelect('Thống kê')}
                  className={cx(selected === 'Thống kê' && 'active')}
               >
                  <i className="ti-pie-chart"></i>
                  <span className={cx('space_icon')}>Thống kê</span>
                  <span
                     className={cx(
                        'icon_right',
                        'ti-angle-right',
                        isOpenUl === 'Thống kê' && 'routate_90'
                     )}
                  ></span>
               </Link>

               <ul
                  className={cx('ul_close', isOpenUl === 'Thống kê' && 'open')}
               >
                  <li>
                     <Link
                        to="/statistical-manager"
                        onClick={() => handleClickSelectUl('Thống kê')}
                        className={cx(ulSeclect === 'Thống kê' && 'active')}
                     >
                        Thống kê
                     </Link>
                  </li>
               </ul>
            </li>
         </ul>
      </div>
   )
}

export default Menu
