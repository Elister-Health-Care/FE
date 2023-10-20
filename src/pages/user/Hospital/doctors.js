import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import "./hospital.css";
import { Container, Nav } from "reactstrap";
import { GrFormNext } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import http from "~/utils/http";
import config from "~/router/config";
import LoadingDot from "~/components/Loading/LoadingDot";
import { Accordion } from "react-bootstrap";
import Map from "~/components/Map";

const HospitalDoctor = () => {
  const [doctors, setDoctor] = useState([]);
  const { id,tab } = useParams();
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  const [hospital, setHospital] = useState({
    id: null,
    email: "",
    username: "",
    name: "",
    phone: "",
    address: "",
    avatar: null,
    is_accept: null,
    role: "",
    email_verified_at: "",
    created_at: "",
    updated_at: "",
    id_hospital: null,
    province_code: null,
    infrastructure: null,
    description: "",
    location: null,
    search_number: null,
    time_work: null,
    enable: null,
    departments: null,
  });

  useEffect(() => {
    const getHospital = async () => {
      try {
        setLoading(true);
        const response = await http.get("/infor-hospital/view-profile/" + id);
        setHospital(response.data.data);
      } catch (error) {
        console.log("Lỗi kết nối đến API !", error);
      } finally {
        setLoading(false);
      }
    };
    getHospital();
  }, [id, tab]);
  

  useEffect(() => {
    const getDoctor = async () => {
      try {
        setLoading(true);
        const response = await http.get("/infor-hospital/doctors-home/" + id + "?sortname=true&search="+keyword);
        setDoctor(response.data.data);
      } catch (error) {
        console.log("Lỗi kết nối đến API !", error);
      } finally {
        setLoading(false);
      }
    };
    getDoctor();
  }, [id,tab,keyword]);
  const formatMoney = (money) => {
    return money.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    console.log (value);
    setKeyword(value);
 }
  return (
    <>
    {loading && <LoadingDot />}
       <div className="service">
            <div className="search">
                <div className="input-service">
                    <input
                    type="text"
                    placeholder="Tìm bác sĩ"
                    className="form-control"
                    onKeyUp={handleChangeInput}
                    />
                </div>
            </div>
            <div className="service-list mt-4">
                {doctors.map((doctor) => (
                    <div className="service-card">
                    <div className="main-card">
                        <div className="content">
                        <Link className="avatar-doctor">
                            <img src={  doctor.avatar
                                ? config.URL + doctor.avatar
                                : "/image/avatar_admin_default.png"} />
                        </Link>
                        <div className="service-info">
                            <Link>
                            <h6>{doctor.name_doctor}</h6>
                            </Link>
                            <Link>
                             <p className="department">{doctor.name_department}</p>   
                            </Link>
                            <div className="major">
                                <Link className="major-item">
                                    <div className="major-name">
                                        <p>Đặt lịch khám</p>
                                    </div>
                                </Link>
                                <Link className="major-item">
                                    <div className="major-name-unselect">
                                        <p>Dành cho trẻ em</p>
                                    </div>
                                </Link>
                                <Link className="major-item">
                                    <div className="major-name-unselect">
                                        <p>Dành cho người lớn</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="price">
                            <RiMoneyDollarCircleFill />
                            <p className="sub"> Phí tư vấn ban đầu từ </p> 
                            <p className="number">{formatMoney(doctor.price)} (Giá dịch vụ)</p>
                            </div>
                        </div>
                        </div>
                        <div className="infor-hospital">
                        <span className="avatar-hospital">
                            <img src={  hospital.avatar
                            ? config.URL + hospital.avatar
                            : "/image/avatar_admin_default.png"} />
                        </span>
                        <div className="detail-hospital">
                            <p>{hospital.name}</p>
                            <div className="address-hospital">
                            <div className="address">
                                <p>
                                441 Lê Văn Lương, Tân Phong, Quận 7, Ho Chi Minh City,
                                Vietnam
                                </p>
                            </div>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-book">
                            Đặt lịch hẹn
                        </button>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
        </div>
    </>
  );
};
export default HospitalDoctor;