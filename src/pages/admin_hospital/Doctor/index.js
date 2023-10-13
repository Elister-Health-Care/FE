import classNames from 'classnames/bind'
import TitleAdmin from '~/components/TitleAdmin'

import styles from './Doctor.module.scss'

const cx = classNames.bind(styles)
function HospitalDoctorPage() {
   return (
      <>
         <TitleAdmin>Bác sĩ</TitleAdmin>
         <div className={cx('card', 'shadow')}>
            <div className={cx('card_header')}>
               <span>button, tittle or filter here</span>
            </div>
            <div className={cx('card_body')}>Content here</div>
         </div>
      </>
   )
}

export default HospitalDoctorPage
