import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import config from "~/router/config";
import http from '~/utils/http'
import { AiFillEdit } from "react-icons/ai";
import validateForm from '~/helpers/validation'
import { BsCameraFill } from "react-icons/bs";
import { FormControl } from "react-bootstrap";
import { updateUser } from '~/redux/userSlice'
import axios from 'axios';
import { useSelector } from 'react-redux';

const FormEditProfile = () => {
  const user = JSON.parse(localStorage.getItem("HealthCareUser"));
  const [provinces, setProvinvces] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [avatar, setAvatar] = useState("/image/avatar_admin_default.png");
  const [errors, setErrors] = useState({});

  const [name, setName] = useState(user.name ? user.name : 'User')

  const isUserUpdated = useSelector((state) => state.user.keyUserUpdated)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('HealthCareUser'))
    if (user && user.name) {
       setName(user.name)
    }
   }, [isUserUpdated])

  const rules = {
    name: {
       required: true,
    },
    email: {
       required: true,
       email: true,
    },
    date_of_birth: {
       date_of_birth: true,
    },
 }
  const [users, setUsers] = useState({
    email: user.email,
    address: user.address,
    username:user.username,
    date_of_birth: user.date_of_birth,
    phone: user.phone,
    name: user.name,
    gender: user.gender,
 })
  const dispatch = useDispatch()
  useEffect(() => {
    if (user.avatar) {
      setAvatar(config.URL + user.avatar);
    }
  }, []);

  const handleChangeInput = (e) => {
    if (isButtonDisabled === true) {
       setIsButtonDisabled(false)
    }
    const { name, value } = e.target
    setUsers({
       ...users,
       [name]: value,
    })
 }

 const handleChangeAvatar = (e) => {
    if (isButtonDisabled === true) {
       setIsButtonDisabled(false)
    }
    const file = e.target.files[0]
    if (file) {
       const reader = new FileReader()
       reader.onload = (e) => setAvatar(e.target.result)
       reader.readAsDataURL(file)

       setUsers({
          ...users,
          avatar: file,
       })
    }
 }

 const handleUpdateUser = async () => {
  try {
     const response = await http.get('infor-user/profile')
     if (response.status === 200) {
        console.log('Get profile thành công')
        const profile = response.data.data
        const updatedUser = {
           ...user,
           id: profile.id,
           email: profile.email,
           address: profile.address,
           date_of_birth: profile.date_of_birth,
           phone: profile.phone,
           name: profile.name,
           gender: profile.gender,
           avatar: profile.avatar,
        }
        localStorage.setItem('HealthCareUser', JSON.stringify(updatedUser))
        dispatch(updateUser())
     } else {
        console.log(errors)
     }
  } catch (error) {
     console.log(error)
     console.error('Lỗi kết nối đến API', error)
  }
}
const handleClickUpdateProfile = async (e) => {
  e.preventDefault()

  const validationErrors = validateForm(users, rules)
  if (Object.keys(validationErrors).length === 0) {
     const formDataToSubmit = new FormData()

     for (const key in users) {
        formDataToSubmit.append(key, users[key])
     }
     try {
        const response = await http.post(
           'infor-user/update',
           formDataToSubmit,
           {
              headers: {
                 'Content-Type': 'multipart/form-data',
              },
           }
        )
        console.log('Cập nhật thành công')
        if (response.status === 200) {
           console.log(response)
           handleUpdateUser()
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
           console.log('Cập nhật thành công')
        } else {
           console.log(errors)
        }
     } catch (error) {
        console.log(error)
        console.error('Lỗi kết nối đến API', error)
     } finally {
        setIsButtonDisabled(true)
     }
  } else {
     setErrors(validationErrors)
     console.log(errors)
  }
}
//gọi api lấy provice
useEffect(() => {
  try {
     axios.get(config.URL + 'api/province').then((response) => {
        setProvinvces(response.data.provinces)
     })
  } catch {
     console.error('Lỗi kết nối đến API')
  }
}, [])

  return (
    <div className="col-md-10 col-lg-10">
      <div className="title">
        <h3>Hồ sơ</h3>
      </div>
      <div className="info mt-5">
        <label className="edit-image" htmlFor="image">
          <img className="avatar" src={avatar}  alt="user pic" />
          <span className="icon-change">
            <BsCameraFill />
          </span>
        </label>
        <input id="image" onChange={handleChangeAvatar} type="file" className="d-none" />
        <div className="my-auto name ml-4">
          {user.name} <br/>
          <span className="email">{user.email}</span>
        </div>
      </div>
      <form>
      <div className="main-form mt-3 mb-5">
        <div className="item-form">
          <label htmlFor="name" className="item-title">
            Họ và tên:
          </label>
          <FormControl
            onChange={handleChangeInput}
            type="text"
            id="name"
            name="name"
            placeholder="Full name"
            defaultValue={user.name}
          />
        </div>
        <div className="item-form">
          <label htmlFor="email" className="item-title">
            Email:
          </label>
          <FormControl
            onChange={handleChangeInput}
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            defaultValue={user.email}
          />
        </div>
        <div className="item-form">
          <label htmlFor="username" className="item-title">
            Tên người dùng:
          </label>
          <FormControl
            onChange={handleChangeInput}
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            defaultValue={user.username}
          />
        </div>
        <div className="item-form">
          <label htmlFor="birth" className="item-title">
            Ngày sinh:
          </label>
          <p className="item-content">
            <FormControl
              onChange={handleChangeInput}
              type="date"
              id="birth"
              name="date_of_birth"
              placeholder="Your Birthday"
              defaultValue={user.date_of_birth}
            />
          </p>
        </div>
        <div className="item-form">
          <span className="item-title">Giới tính</span>
            <div className="pl-0 col-lg-3 col-md-3">
               <select
                  onChange={handleChangeInput}
                     name="gender"
                     defaultValue={user.gender}
                     className="form-control"
                     type="text"
               >
                  <option value={1}>Nam</option>
                  <option value={0}>Nữ</option>
                  <option value={2}>Khác</option>
               </select>
            </div>
        </div>
        <div className="item-form">
          <span className="item-title">Quê quán:</span>
          <select
                        onChange={handleChangeInput}
                        name="province_code"
                        className="form-control"
                     >
                        <option defaultValue="">Chọn tỉnh/thành</option>
                        {provinces.map((province) => (
                           <option
                              key={province.id}
                              value={province.province_code}
                           >
                              {province.name}
                           </option>
                        ))}
                     </select>
                     
        </div>
        <div className="item-form">
          <label className="item-title" htmlFor="phone">Số điện thoại:</label>
          <FormControl
            onChange={handleChangeInput}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            defaultValue={user.phone}
          />
        </div>
        <div className="item-form">
          <Link className="btn btn-outline-primary mr-2" to={'/user/profile'}>Hủy </Link>
          <button 
            onClick={handleClickUpdateProfile}
            disabled={isButtonDisabled} className="btn btn-primary">Lưu thay đổi</button>
        </div>
      </div>
      </form>
    </div>
  );
};
export default FormEditProfile;
