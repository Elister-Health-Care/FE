import classNames from 'classnames/bind'

import styles from './Dasboard.module.scss'
import TitleAdmin from '~/components/TitleAdmin'

const cx = classNames.bind(styles)
function AdminDashboardPage() {
   return (
      <>
         <TitleAdmin>WellCome To Dashboard !</TitleAdmin>
         <div className={cx('row_ds')}>
            <div className={cx('col_ds_12')}>
               <div className={cx('card_box')}>
                  <div className={cx('block_card', 'boder_right')}>
                     <h2>
                        <i
                           className={cx(
                              'color_blue',
                              'mdi mdi-access-point-network mr-2'
                           )}
                        ></i>
                        <b className={cx('space_icon')}>161564</b>
                     </h2>
                     <p>Bệnh viện đăng ký</p>
                  </div>
                  <div className={cx('block_card', 'boder_right')}>
                     <h2>
                        <i
                           className={cx('color_tim', 'mdi mdi-airplay mr-2')}
                        ></i>
                        <b className={cx('space_icon')}>161564</b>
                     </h2>
                     <p>Tài khoản chờ duyệt</p>
                  </div>
                  <div className={cx('block_card', 'boder_right')}>
                     <h2>
                        <i
                           className={cx(
                              'color_green',
                              'mdi mdi-black-mesa mr-2'
                           )}
                        ></i>
                        <b className={cx('space_icon')}>161564</b>
                     </h2>
                     <p>Some thing</p>
                  </div>
                  <div className={cx('block_card')}>
                     <h2>
                        <i
                           className={cx(
                              'color_blue',
                              'mdi mdi-cellphone-link mr-2'
                           )}
                        ></i>
                        <b className={cx('space_icon')}>161564</b>
                     </h2>
                     <p>Some thing</p>
                  </div>
               </div>
            </div>
         </div>
         <div className={cx('row_ds')}>
            <div className={cx('col_ds_12')}></div>
         </div>
      </>
   )
}

export default AdminDashboardPage
