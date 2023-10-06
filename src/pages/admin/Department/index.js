import classNames from 'classnames/bind'
import TitleAdmin from '~/components/TitleAdmin'

import styles from './AdminDepartment.module.scss'

const cx = classNames.bind(styles)
const AdminDepartment = () => {
   return (
      <>
         <TitleAdmin>Nhân viên </TitleAdmin>
         <div className={cx('card', 'shadow')}>
            <div className={cx('card_header')}>
               <h5>Hãy nhập đầy đủ thông tin</h5>
            </div>
            <div className={cx('card_body')}></div>
         </div>
      </>
   )
}

export default AdminDepartment
