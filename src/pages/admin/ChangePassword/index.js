import React from 'react'

import './AdminChangePasswordPage.module.scss'
import TitleAdmin from '~/components/TitleAdmin'

const AdminChangePasswordPage = () => {
   return (
      <>
         <TitleAdmin>Đổi mật khẩu</TitleAdmin>
         <form className="form-horizontal mt-3">
            <div className="form-group row">
               <label for="inputPassword3" className="col-md-3 control-label">
                  Password
               </label>
               <div className="col-md-9">
                  <input
                     type="password"
                     className="form-control"
                     id="inputPassword3"
                     placeholder="Password"
                  />
               </div>
            </div>
            <div className="form-group row">
               <label for="inputPassword4" className="col-md-3 control-label">
                  Re Password
               </label>
               <div className="col-md-9">
                  <input
                     type="password"
                     className="form-control"
                     id="inputPassword4"
                     placeholder="Retype Password"
                  />
               </div>
            </div>

            <div className="form-group row justify-content-end mb-0">
               <div className="col-md-9">
                  <button type="submit" className="btn btn-info">
                     Xác nhận
                  </button>
               </div>
            </div>
         </form>
      </>
   )
}
export default AdminChangePasswordPage
