import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import config from "~/router/config";
import { AiFillEdit } from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";
import { FormControl } from "react-bootstrap";

const FormEditProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [avatar, setAvatar] = useState("/image/avatar_admin_default.png");
  useEffect(() => {
    if (user.avatar) {
      setAvatar(config.URL + user.avatar);
    }
  }, []);

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
                checked = {user.gender ==0 ? true : false}
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
                checked = {user.gender ==1 ? true : false}
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
                checked = {user.gender ==2 ? true : false}
                required
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Khác
              </label>
            </div>
          </p>
        </div>
        <div className="item-form">
          <span className="item-title">Quê quán</span>
          <p className="item-content">{user.address}</p>
        </div>
        <div className="item-form">
          <span className="item-title">Số điện thoại</span>
          <p className="item-content">
            {user.phone ? (
              user.phone
            ) : (
              <span className="text-danger">
                <b>--</b>
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
export default FormEditProfile;
