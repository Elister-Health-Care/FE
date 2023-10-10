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
import { ToastContainer, toast } from 'react-toastify'
const cx = classNames.bind(styles)
const AdminAllUserPage = () => {
   const location = useLocation()
   const [loadingTable, setLoadingTable] = useState(false)
   const [users, setUsers] = useState([])

   const defaultSearchParams = {
      search: '',
      paginate: 5,
      page: 1,
      role: '',
      is_accept: 'both',
      sortlatest: true,
      sortname: false,
   }

   const parseSearchParams = () => {
      const searchParams = new URLSearchParams(location.search)

      if (searchParams.get('paginate') === null) {
         return defaultSearchParams
      }

      return {
         search: searchParams.get('search') || defaultSearchParams.search,
         paginate:
            parseInt(searchParams.get('paginate')) ||
            defaultSearchParams.paginate,
         page: parseInt(searchParams.get('page')) || defaultSearchParams.page,
         role: searchParams.get('role') || defaultSearchParams.role,
         is_accept:
            searchParams.get('is_accept') || defaultSearchParams.is_accept,
         sortlatest: searchParams.get('sortlatest') === 'true',
         sortname: searchParams.get('sortname') === 'true',
      }
   }

   const [search, setSearch] = useState(parseSearchParams())

   // Sử dụng useEffect để cập nhật search khi location.search thay đổi
   useEffect(() => {
      setSearch(parseSearchParams())
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [location.search])

   const [perPage, setPerPage] = useState(6)
   const [total, setTotal] = useState(0)

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
      console.log(location)
      const getUser = async () => {
         try {
            setLoadingTable(true)
            const queryParams = `?search=${search.search}&page=${search.page}&paginate=${search.paginate}&role=${search.role}&sortname=${search.sortname}&sortlatest=${search.sortlatest}&is_accept=${search.is_accept}`
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

   const handleChangeSelectedAccpect = (e) => {
      console.log(e.target.value)

      updateSearchParams({ is_accept: e.target.value })
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

   const handleChangeSelectedPaginate = (e) => {
      updateSearchParams({ page: 1, paginate: e.target.value })
   }
   const updateUser = (userId, acceptValue) => {
      const updatedUsers = users.map((user) => {
         if (user.id === userId) {
            return { ...user, is_accept: acceptValue }
         }
         return user
      })

      setUsers(updatedUsers)
   }
   const handleChangeRole = async (id, value) => {
      try {
         const data = { is_accept: value }
         await http.post('admin/change-accept/' + id, data)
         console.log('Gọi API thành công')
         if (value === 2) {
            toast.warning(' Đã khóa tài khoản có id ' + id, {
               position: 'top-right',
               autoClose: 4000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: 'light',
            })
         } else {
            toast.success(' Thành công', {
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
         updateUser(id, value)
         console.log(setUsers)
      } catch (error) {
         console.log('Đã có lỗi xảy ra')
      }
   }

   return (
      <>
         <ToastContainer />
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
                     defaultValue={search.is_accept}
                     onChange={handleChangeSelectedAccpect}
                     className={cx('custom-select', 'fontz_14')}
                  >
                     <option value="both">Trạng thái</option>
                     <option value="0">Chưa duyệt</option>
                     <option value="1">Đã duyệt</option>
                     <option value="2">Đã khóa</option>
                  </select>
               </div>
               <div className={cx('filter_box')}>
                  <select
                     defaultValue={search.role}
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
                     defaultValue={
                        search.sortlatest === false
                           ? 'un_sortlatest'
                           : search.sortname === true
                           ? 'sortname'
                           : 'sortlatest'
                     }
                     onChange={handleChangeSelectedName}
                     className={cx('custom-select', 'fontz_14')}
                  >
                     <option value="sortlatest">Mới nhất</option>
                     <option value="un_sortlatest">Cũ nhất</option>
                     <option value="sortname">Theo tên</option>
                  </select>
               </div>
               <div className={cx('box_left')}>
                  <select
                     onChange={handleChangeSelectedPaginate}
                     className={cx('custom-select', 'fontz_14')}
                  >
                     <option value="5">5</option>
                     <option value="10">10</option>
                     <option value="15">15</option>
                     <option value="20">20</option>
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
                                 {user.email_verified_at === 0
                                    ? 'Đã xác nhận'
                                    : 'Chưa xác nhận'}
                              </td>
                              <td>
                                 {user.created_at
                                    ? formatDateTime(user.created_at)
                                    : 'N/A'}
                              </td>
                              <td>
                                 {user.is_accept === 0 ? (
                                    <>
                                       <Tippy content="Duyệt">
                                          <button
                                             onClick={() =>
                                                handleChangeRole(user.id, 1)
                                             }
                                             className="btn btn-info btn-sm sua"
                                             data-toggle="modal"
                                             data-target="#updateModal"
                                          >
                                             <i className="ti-check-box" />
                                          </button>
                                       </Tippy>
                                    </>
                                 ) : user.is_accept === 1 ? (
                                    <Tippy content="Khóa">
                                       <button
                                          onClick={() =>
                                             handleChangeRole(user.id, 2)
                                          }
                                          className="btn btn-danger btn-sm mt-1"
                                       >
                                          <i className="ti-lock" />
                                       </button>
                                    </Tippy>
                                 ) : (
                                    <Tippy content="Mở khóa">
                                       <button
                                          onClick={() =>
                                             handleChangeRole(user.id, 1)
                                          }
                                          className="btn btn-secondary btn-sm mt-1"
                                       >
                                          <i className="ti-unlock" />
                                       </button>
                                    </Tippy>
                                 )}
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
