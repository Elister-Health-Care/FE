import classNames from 'classnames/bind'
import TitleAdmin from '~/components/TitleAdmin'

import styles from './Department.module.scss'

const cx = classNames.bind(styles)
function HospitalDepartmentPage() {
   return (
      <>
         <TitleAdmin>Chuyên khoa</TitleAdmin>
         <div className={cx('card', 'shadow')}>
            <div className={cx('card_header')}>
               <span>button, tittle or filter here</span>
            </div>
            <div className={cx('card_body')}>Content here</div>
         </div>
      </>
   )
}

export default HospitalDepartmentPage
