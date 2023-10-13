import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import config from "~/router/config";
import { AiFillEdit } from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";
import { FormControl } from "react-bootstrap";
import axios from 'axios'

const FormEditProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [provinces, setProvinvces] = useState([])
  const [avatar, setAvatar] = useState("/image/avatar_admin_default.png");
  useEffect(() => {
    if (user.avatar) {
      setAvatar(config.URL + user.avatar);
    }
  }, []);
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
        <label className="edit-image" for="image">
          <img className="avatar" src={avatar} alt="user pic" />
          <span className="icon-change">
            <BsCameraFill />
          </span>
        </label>
        <input id="image" type="file" className="d-none" />
        <div className="my-auto name ml-4">
          {user.name}
          <span className="email">{user.email}</span>
        </div>
      </div>
      <div className="main-form mt-3 mb-5">
        <div className="item-form">
          <lable htmlFor="name" className="item-title">
            Họ và tên:
          </lable>
          <FormControl
            type="text"
            id="name"
            name="name"
            placeholder="Full name"
            value={user.name}
          />
        </div>
        <div className="item-form">
          <label htmlFor="email" className="item-title">
            Email:
          </label>
          <FormControl
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={user.email}
          />
        </div>
        <div className="item-form">
          <label htmlFor="username" className="item-title">
            Tên người dùng:
          </label>
          <FormControl
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={user.username}
          />
        </div>
        <div className="item-form">
          <label htmlFor="birth" className="item-title">
            Ngày sinh:
          </label>
          <p className="item-content">
            <FormControl
              type="date"
              id="birth"
              name="date_of_birth"
              placeholder="Your Birthday"
              value={user.date_of_birth}
            />
          </p>
        </div>
        <div className="item-form">
          <span className="item-title">Giới tính</span>
          <p className="item-content">
            <div className="form-check">
              <input
                name="gender"
                className="form-check-input"
                type="radio"
                id="gridRadios1"
                defaultValue="0"
                defaultChecked
                required
              />
              <label className="form-check-label" htmlFor="gridRadios1">
                Nam
              </label>
            </div>
            <div className="form-check">
              <input
                name="gender"
                className="form-check-input"
                type="radio"
                id="gridRadios2"
                defaultValue="1"
                required
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Nữ
              </label>
            </div>
            <div className="form-check">
              <input
                name="gender"
                className="form-check-input"
                type="radio"
                id="gridRadios3"
                defaultValue="2"
                required
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Khác
              </label>
            </div>
          </p>
        </div>
        <div className="item-form">
          <span className="item-title">Quê quán:</span>
          <select
                        name="province_code"
                        className="form-control"
                     >
                        <option value="">Chọn tỉnh/thành</option>
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
          <label className="item-title" for="phone">Số điện thoại:</label>
          <FormControl
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            value={user.phone}
          />
        </div>
        <div className="item-form">
          <Link className="btn btn-outline-primary mr-2" to={'/user/profile'}>Hủy </Link>
          <button className="btn btn-primary">Lưu thay đổi</button>
        </div>
      </div>
    </div>
  );
};
export default FormEditProfile;
