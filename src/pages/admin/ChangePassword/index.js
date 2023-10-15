import classNames from 'classnames/bind'

import TitleAdmin from '~/components/TitleAdmin'
import styles from './AdminChangePasswordPage.module.scss'
import { useState } from 'react'
import validateForm from '~/helpers/validation'
import http from '~/utils/http'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const cx = classNames.bind(styles)
const HospitalChangepasswordPage = () => {
   const [errors, setErrors] = useState({})
   const [password, setPassword] = useState({
      current_password: '',
      new_password: '',
      new_password_confirmation: '',
   })

   const rules = {
      current_password: {
         password: true,
      },
      new_password: {
         password: true,
      },
   }

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setPassword({
         ...password,
         [name]: value,
      })
   }

   const handleSubmitPassWord = async (e) => {
      e.preventDefault()

      const validationErrors = validateForm(password, rules)
      if (Object.keys(validationErrors).length === 0) {
         try {
            const response = await http.post('admin/change-password', password)

            if (response.status === 200) {
               console.log('Đổi ok')
               setPassword({
                  current_password: '',
                  new_password: '',
                  new_password_confirmation: '',
               })
               setErrors({})
               toast.success(' Đổi thành công!', {
                  position: 'top-right',
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'light',
               })
            }
         } catch (error) {
            if (error.response.data.message === 'Validation errors') {
               setErrors({
                  new_password: 'Mật khẩu phải giống nhau',
               })
            } else {
               setErrors({
                  current_password: 'Mật khẩu chưa chính xác',
               })
            }
            console.log(errors.current_password, errors.new_password)
         }
      } else {
         setErrors(validationErrors)
      }
   }
   return (
      <>
         <ToastContainer />
         <TitleAdmin>Đổi mật khẩu</TitleAdmin>
         <div className={cx('card', 'shadow')}>
            <div className={cx('card_body')}>
               <form className="form-horizontal mt-3">
                  <div className="form-group row">
                     <label
                        htmlFor="inputPassword1"
                        className="col-md-3 control-label"
                     >
                        Mật khẩu hiện tại
                     </label>
                     <div className="col-md-9">
                        <input
                           onChange={handleInputChange}
                           value={password.current_password}
                           name="current_password"
                           type="password"
                           className="form-control"
                           id="inputPassword1"
                           placeholder="Nhập mật khẩu"
                        />
                        {errors.current_password && (
                           <p className={cx('error')}>
                              {errors.current_password}
                           </p>
                        )}
                     </div>
                  </div>
                  <div className="form-group row">
                     <label
                        htmlFor="inputPassword2"
                        className="col-md-3 control-label"
                     >
                        Mật khẩu mới
                     </label>
                     <div className="col-md-9">
                        <input
                           onChange={handleInputChange}
                           value={password.new_password}
                           name="new_password"
                           type="password"
                           className="form-control"
                           id="inputPassword2"
                           placeholder="Nhập mật khẩu mới"
                        />
                        {errors.new_password && (
                           <p className={cx('error')}>{errors.new_password}</p>
                        )}
                     </div>
                  </div>
                  <div className="form-group row">
                     <label
                        htmlFor="inputPassword3"
                        className="col-md-3 control-label"
                     >
                        Xác nhận mật khẩu
                     </label>
                     <div className="col-md-9">
                        <input
                           onChange={handleInputChange}
                           value={password.new_password_confirmation}
                           name="new_password_confirmation"
                           type="password"
                           className="form-control"
                           id="inputPassword3"
                           placeholder="Nhập lại mật khẩu"
                        />
                     </div>
                  </div>

                  <div className="form-group row justify-content-end mb-0">
                     <div className="col-lg-2 col-md-9">
                        <button
                           onClick={handleSubmitPassWord}
                           className="btn btn-info"
                        >
                           Xác nhận
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </>
   )
}
export default HospitalChangepasswordPage
