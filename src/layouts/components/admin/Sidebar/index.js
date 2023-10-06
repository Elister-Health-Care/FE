import Menu from './Menu'
import classNames from 'classnames/bind'

import styles from './Sidebar.module.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import config from '~/router/config'

const cx = classNames.bind(styles)

function Sidebar() {
   const [avatar, setAvatar] = useState('/image/avatar_admin_default.png')
   const admin = JSON.parse(localStorage.getItem('admin'))
   useEffect(() => {
      if (admin.avatar) {
         setAvatar(config.URL + admin.avatar)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   return (
      <div className={cx('left_side')}>
         <div className={cx('user_box')}>
            <div className={cx('float_left')}>
               <img src={avatar} alt="" className={cx('rounded_circle')}></img>
            </div>
            <div className={cx('user_infor')}>
               <Link className={cx('user_name')}>{admin.name}</Link>
               <p className={cx('m_0', 'text_muted')}>{admin.role}</p>
            </div>
         </div>

         <Menu></Menu>
      </div>
   )
}

export default Sidebar
