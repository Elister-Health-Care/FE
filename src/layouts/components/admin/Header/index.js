import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'

import styles from './Header.module.scss'
import config from '~/router/config'

const cx = classNames.bind(styles)
function Header() {
   const [open, setOpen] = useState(false)
   const [avatar, setAvatar] = useState('/image/avatar_admin_default.png')
   const handleOpen = () => {
      setOpen(!open)
   }

   const handleLogout = () => {
      localStorage.removeItem('admin')
   }
   const admin = JSON.parse(localStorage.getItem('admin'))
   useEffect(() => {
      if (admin.avatar) {
         setAvatar(config.URL + admin.avatar)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   function getLastWord(inputString) {
      const words = inputString.split(' ')
      if (words.length > 0) {
         return words[words.length - 1]
      } else {
         return '' // Trong trường hợp chuỗi rỗng hoặc không có khoảng trắng
      }
   }
   return (
      <>
         <div className={cx('cus_header')}>
            <div className={cx('header_left')}>
               <div className="logo_box">
                  <a href={'/'}>
                     <span className={cx('logo')}>
                        <img
                           src={'/image/logo_admin.png'}
                           alt=""
                           height="26"
                        ></img>
                     </span>
                  </a>
               </div>
            </div>
            <ul className={cx('topbar_left')}></ul>
            <ul className={cx('topbar_right')}>
               <li className={cx('li_block', 'dropdown')}>
                  <button onClick={handleOpen}>
                     <img className={cx('avatar')} src={avatar} alt=""></img>
                     <span>
                        {getLastWord(admin.name)}
                        <i className="mdi mdi-chevron-down"></i>
                     </span>
                  </button>
                  <div className={cx('dropdown_content', open && 'show')}>
                     <span className={cx('title_item')}>Wellcome !</span>

                     <Link to={'/'}>
                        <i className="mdi mdi-home-import-outline"></i>
                        <span className={cx('icon_item')}>Trang chủ</span>
                     </Link>
                     <Link to={'/'}>
                        <i className="mdi mdi-account-outline"></i>
                        <span className={cx('icon_item')}>Profile</span>
                     </Link>
                     <Link to={'change-password'}>
                        <i className="mdi mdi-key-outline"></i>
                        <span className={cx('icon_item')}>Đổi mật khẩu</span>
                     </Link>
                     <hr className={cx('m_0')} />
                     <Link to={'/admin-login'} onClick={handleLogout}>
                        <i className="mdi mdi-logout-variant"></i>
                        <span className={cx('icon_item')}>Đăng xuất</span>
                     </Link>
                  </div>
               </li>
            </ul>
         </div>
      </>
   )
}

export default Header
