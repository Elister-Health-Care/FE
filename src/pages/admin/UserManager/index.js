import { useLocation } from 'react-router-dom'
import classNames from 'classnames/bind'
import TitleAdmin from '~/components/TitleAdmin'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import styles from './UserManager.module.scss'
import { useEffect, useState } from 'react'
import http from '~/utils/http'
import config from '~/router/config'
import ReactPaginate from 'react-paginate'
import LoadingTable from '~/components/Loading/LoadingTable'
import { formatDateTime, pushSearchKeyToUrl } from '~/helpers/utils'
const cx = classNames.bind(styles)
const AdminAllUserPage = () => {
   const [loadingTable, setLoadingTable] = useState(false)
   const [users, setUsers] = useState([])
   const [search, setSearch] = useState({
      search: '',
      paginate: 5,
      page: 1,
      role: '',
      is_accept: 'both', // "0" , "1" , "both"
      sortlatest: true,
      sortname: false,
   })
   const [perPage, setPerPage] = useState(6)
   const [total, setTotal] = useState(0)

   const location = useLocation()
   const itemsPerPage = perPage
   const pageCount = Math.ceil(total / itemsPerPage)

   // const updateSearchParams = (newSearchParams) => {
   //    setSearch({
   //       ...search,
   //       ...newSearchParams,
   //    })

   //    pushSearchKeyToUrl(search, location)
   // }
   // Hàm ở cmt trên sẽ cập nhật trễ 1 nhịp do bất đồng bộ của useStage(thường cập nhật stage sau khi render),
   // nên là sử dụng useEffect để khi nào search được cập nhật rồi pushSearchkeyToUrl
   useEffect(() => {
      pushSearchKeyToUrl(search, location)
   }, [search, location])

   const updateSearchParams = (newSearchParams) => {
      setSearch((prevSearch) => ({
         ...prevSearch,
         ...newSearchParams,
      }))
   }

   useEffect(() => {
      const getUser = async () => {
         try {
            setLoadingTable(true)
            const queryParams = `?search=${search.search}&page=${search.page}&paginate=${search.paginate}&role=${search.role}&sortname=${search.sortname}&sortlatest=${search.sortlatest}`
            const response = await http.get('admin/all-user' + queryParams)
            if (response.status === 200) {
               setUsers(response.data.data.data)
               setPerPage(response.data.data.per_page)
               setTotal(response.data.data.total)
               console.log('Gọi API lấy users thành công')
            }
         } catch (error) {
            console.error('Lỗi kết nối đến API:', error)
         } finally {
            setLoadingTable(false)
            console.log(users)
         }
      }
      console.log(search)
      getUser()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [search])

   const handlePageClick = (event) => {
      const selectedPage = event.selected + 1
      updateSearchParams({ page: selectedPage })
   }

   const handleChangeInput = (e) => {
      const newSearchValue = e.target.value
      updateSearchParams({ search: newSearchValue, page: 1 })
      console.log(location)
   }

   const handleChangeSelectedRole = (e) => {
      console.log(e.target.value)
      if (e.target.value === '') {
         updateSearchParams({ role: '' })
      } else {
         updateSearchParams({ role: e.target.value })
      }
   }

   const handleChangeSelectedName = (e) => {
      if (e.target.value === 'sortlatest') {
         updateSearchParams({ sortlatest: true, sortname: false })
      } else if (e.target.value === 'un_sortlatest') {
         updateSearchParams({ sortlatest: false })
      } else {
         updateSearchParams({ sortname: true })
      }
   }

   return (
      <>
         <TitleAdmin>Tài khoản bệnh viện </TitleAdmin>
         <div className={cx('card', 'shadow')}>
            <div className={cx('card_header')}>
               <div className={cx('search_box')}>
                  <div className={cx('input-group', 'fontz_14')}>
                     <span className="input-group-prepend">
                        <button type="button" className="btn btn-primary">
                           <i className="fa fa-search"></i>
                        </button>
                     </span>
                     <input
                        defaultValue={search.search}
                        onChange={handleChangeInput}
                        type="text"
                        id="example-input1-group2"
                        className="form-control"
                        placeholder="Search"
                     />
                  </div>
               </div>
               <div className={cx('filter_box')}>
                  <select
                     onChange={handleChangeSelectedRole}
                     className={cx('custom-select', 'fontz_14')}
                  >
                     <option value="">Mặc định</option>
                     <option value="hospital">Bệnh viện</option>
                     <option value="doctor">Bác sĩ</option>
                     <option value="user">Người dùng</option>
                  </select>
               </div>
               <div className={cx('filter_box')}>
                  <select
                     onChange={handleChangeSelectedName}
                     className={cx('custom-select', 'fontz_14')}
                  >
                     <option value="sortlatest">Mới nhất</option>
                     <option value="un_sortlatest">Cũ nhất</option>
                     <option value="sortname">Theo tên</option>
                  </select>
               </div>
            </div>
            <div className={cx('card_body')}>
               {loadingTable ? (
                  <>
                     <table className={cx('table', 'table_bordered')}>
                        <thead>
                           <tr>
                              <th>ID</th>
                              <th>Email</th>
                              <th>Tài khoản</th>
                              <th>Tên</th>
                              <th>Số điện thoại</th>
                              <th>Địa chỉ</th>
                              <th>Avatar</th>
                              <th>Phân loại</th>
                              <th>Xác nhận Email</th>
                              <th>Thời gian đăng ký</th>
                              <th>Thao tác</th>
                           </tr>
                        </thead>
                     </table>
                     <LoadingTable row={search.paginate} />
                  </>
               ) : (
                  <table className={cx('table', 'table_bordered')}>
                     <thead>
                        <tr>
                           <th>ID</th>
                           <th>Email</th>
                           <th>Tài khoản</th>
                           <th>Tên</th>
                           <th>Số điện thoại</th>
                           <th>Địa chỉ</th>
                           <th>Avatar</th>
                           <th>Phân loại</th>
                           <th>Xác nhận Email</th>
                           <th>Thời gian đăng ký</th>
                           <th>Thao tác</th>
                        </tr>
                     </thead>

                     <tbody>
                        {users.map((user, index) => (
                           <tr key={index}>
                              <td>{user.id}</td>
                              <td>{user.email}</td>
                              <td>{user.username}</td>
                              <td>{user.name}</td>
                              <td>{user.phone}</td>

                              <td>{user.address}</td>
                              <td>
                                 <img
                                    className={cx('avatar')}
                                    alt=""
                                    src={
                                       user.avatar && config.URL + user.avatar
                                    }
                                 />
                              </td>
                              <td>
                                 {user.role === 'hospital'
                                    ? 'Bệnh viện'
                                    : 'Bác sĩ'}
                              </td>
                              <td>
                                 {user.is_accept === 0
                                    ? 'Chưa duyệt'
                                    : 'Đã duyệt'}
                              </td>
                              <td>
                                 {user.created_at
                                    ? formatDateTime(user.created_at)
                                    : 'N/A'}
                              </td>
                              <td>
                                 <Tippy content="Duyệt">
                                    <button
                                       className="btn btn-info btn-sm sua"
                                       data-toggle="modal"
                                       data-target="#updateModal"
                                    >
                                       <i className="ti-check-box" />
                                    </button>
                                 </Tippy>

                                 <Tippy content="Khóa">
                                    <button className="btn btn-danger btn-sm mt-1">
                                       <i className="ti-lock" />
                                    </button>
                                 </Tippy>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               )}
               <div className={cx('paginate_department')}>
                  <ReactPaginate
                     breakLabel="..."
                     nextLabel="Next >"
                     onPageChange={handlePageClick}
                     pageRangeDisplayed={4}
                     pageCount={pageCount}
                     previousLabel="< Previous"
                     renderOnZeroPageCount={null}
                  />
               </div>
            </div>
         </div>
      </>
   )
}

export default AdminAllUserPage
