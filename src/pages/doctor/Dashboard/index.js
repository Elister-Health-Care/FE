import classNames from 'classnames/bind'
import TitleAdmin from '~/components/TitleAdmin'

import styles from '~/pages/doctor/Doctor.module.scss'

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles)
function DoctorDasboardPage() {
   return (
      <>
         <TitleAdmin>Bài viết của bạn </TitleAdmin>
         <p>Trang này sẽ thống kê 1 chút cho doctor</p>
      </>
   )
}

export default DoctorDasboardPage
