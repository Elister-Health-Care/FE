import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import "./hospital.css";
import { Container, Nav } from "reactstrap";
import { GrFormNext } from "react-icons/gr";
import { ReactComponent as Search } from "~/Assets/search.svg";
import { FaLocationDot, FaUserDoctor } from "react-icons/fa6";
import { RiServiceFill } from "react-icons/ri";
import { BiChevronDown  } from "react-icons/bi";
import http from "~/utils/http";
import config from "~/router/config";
import LoadingDot from "~/components/Loading/LoadingDot";

const HospitalDetail = () => {
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctor] = useState([]);
  const [services, setService] = useState([]);
  const [active, setActive] = useState("infor");
  const { id, tab } = useParams();

  const [timeWork, setTimeWork] = useState({
    friday: {
      night: {
        time: [],
        enable: null,
      },
      enable: null,
      morning: {
        time: [],
        enable: true,
      },
      afternoon: {
        time: [],
        enable: true,
      },
    },
    monday: {
      night: {
        time: [],
        enable: null,
      },
      enable: null,
      morning: {
        time: [],
        enable: true,
      },
      afternoon: {
        time: [],
        enable: true,
      },
    },
    sunday: {
      night: {
        time: [],
        enable: null,
      },
      enable: null,
      morning: {
        time: [],
        enable: true,
      },
      afternoon: {
        time: [],
        enable: true,
      },
    },
    tuesday: {
      night: {
        time: [],
        enable: null,
      },
      enable: null,
      morning: {
        time: [],
        enable: true,
      },
      afternoon: {
        time: [],
        enable: true,
      },
    },
    saturday: {
      night: {
        time: [],
        enable: null,
      },
      enable: null,
      morning: {
        time: [],
        enable: true,
      },
      afternoon: {
        time: [],
        enable: true,
      },
    },
    thursday: {
      night: {
        time: [],
        enable: null,
      },
      enable: null,
      morning: {
        time: [],
        enable: true,
      },
      afternoon: {
        time: [],
        enable: true,
      },
    },
    wednesday: {
      night: {
        time: [],
        enable: null,
      },
      enable: null,
      morning: {
        time: [],
        enable: true,
      },
      afternoon: {
        time: [],
        enable: true,
      },
    },
  });
  const dayOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  useEffect(() => {
    setActive("infor");
    if(tab) {
      setActive(tab);
    }
    else {
      setActive("infor");
    }
    }, [tab]
  )

  useEffect(() => {
    const getDoctor = async () => {
      try {
        setLoading(true);
        const response = await http.get("/infor-hospital/doctors-home/" + id + "?sortname=true");
        setDoctor(response.data.data);
      } catch (error) {
        console.log("Lỗi kết nối đến API !", error);
      } finally {
        setLoading(false);
      }
    };
    getDoctor();
  }, [id,tab]);  

  const formatDayVN = (day) => {
    switch (day) {
      case "monday":
        return "Thứ Hai";
      case "tuesday":
        return "Thứ Ba";
      case "wednesday":
        return "Thứ Tư";
      case "thursday":
        return "Thứ Năm";
      case "friday":
        return "Thứ Sáu";
      case "saturday":
        return "Thứ Bảy";
      case "sunday":
        return "Chủ Nhật";
    }
  };
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
    const getService = async () => {
      try {
        setLoading(true);
        const response = await http.get("/hospital-service/hospital/" + id);
        setService(response.data.data);
      } catch (error) {
        console.log("Lỗi kết nối đến API !", error);
      } finally {
        setLoading(false);
      }
    };
    getService();
  }, [active, tab]);
  const handleChildData = (data) => {
    // setUsers({ ...users, location: data })
  };

  const handleInfor = () => {
    setActive("infor");
  };
  const handleService = () => {
    setActive("service");
  };
  const handleDoctor = () => {
    setActive("doctor");
  };
  const handleInsurance = () => {
    setActive("insurance");
  };
  return (
    <>
      {loading && <LoadingDot />}
      <div className="header-hospital">
        <div className="breadcrumb">
          <Container className="d-flex">
            <div className="first-link">
              <Link>Đặt lịch với bác sĩ</Link>
            </div>
            <div className="between">
              <GrFormNext />
            </div>
            <div className="second-link">
              <Link>{hospital.name}</Link>
            </div>
          </Container>
        </div>
        <Container className="main-hospital">
          <div>
            <div className="banner">
              <div className="thumbnail-cover">
                <div className="thumbnail">
                  <div className="grid-layout">
                    <img
                      src="https://cdn-healthcare.hellohealthgroup.com/2023/06/1687490654_6495105ef02194.17483979.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="infor-hospital">
              <div className="logo-hospital">
                <img
                  src={
                    hospital.avatar
                      ? config.URL + hospital.avatar
                      : "/image/avatar_admin_default.png"
                  }
                  alt=""
                />
              </div>
              <div className="name-hospital">
                <h2>{hospital.name}</h2>
                <p className="address">
                  <span className="icon-location">
                    <FaLocationDot />
                  </span>
                  441 Lê Văn Lương, Tân Phong, Quận 7, Ho Chi Minh City, Vietnam
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="non-space"></div>
      <div className="body-hospital">
        <Container>
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="list-link">
                <Link
                  onClick={handleInfor}
                  to={"/hospital/" + id}
                  className={
                    active == "infor" ? "active link-item" : "link-item"
                  }
                >
                  Thông tin chung
                </Link>
                <Link
                  onClick={handleService}
                  to={"/hospital/" + id + "/service"}
                  className={
                    active == "service" ? "active link-item" : "link-item"
                  }
                >
                  Dịch vụ {"("+services.length+")"}
                </Link>
                <Link
                  onClick={handleDoctor}
                  to={"/hospital/" + id+"/doctor"}
                  className={
                    active == "doctor" ? "active link-item" : "link-item"
                  }
                >
                 Bác sĩ {"("+doctors.length+")"}
                </Link>
                <Link
                  onClick={handleInsurance}
                  to={"/hospital/" + id+"/insurance"}
                  className={
                    active == "insurance" ? "active link-item" : "link-item"
                  }
                >
                 Bảo hiểm 
                </Link>
              </div>
              <Outlet />
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="modal-booking">
                <h5 className="title">Đặt lịch ngay</h5>
                <p className="advice">
                  Lựa chọn bác sĩ phù hợp, dịch vụ y tế cần khám và tiến hành
                  đặt lịch ngay.
                </p>
                <ul className="list-choice">
                  <li className="active"> <FaUserDoctor className="mr-1"/> Bác sĩ</li>
                  <li><RiServiceFill className="mr-1"/>Dịch vụ</li>
                </ul>
                <div className="form-booking">
                  <div>
                    <label htmlFor="hospital">Bệnh viện</label>
                    <div className="selected-hospital">
                      <div className="input-hospital">
                        <input type="text" disabled defaultValue="Phòng khám Đa khoa Quốc tế Sài Gòn Chi nhánh Quận 7"/>
                        <div className="logo-hospital">
                          <img src="https://cdn-healthcare.hellohealthgroup.com/2023/07/1689066725_64ad1ce5dbc5c9.91037231.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input-booking">
                    <div>
                      <label className="department">Chuyên khoa</label>
                      <div className="select-department">
                        <div className="input-department">
                          <div className="dropdown-input">
                              <div className="p-relative">
                                <input type="text" className="dropdown-department" placeholder="Tìm chuyên khoa"/>
                                <div className="icon-search">
                                  <Search className="icon"/>
                                </div>
                                <div className="icon-down">
                                  <BiChevronDown className="icon"/> 
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="department">Bác sĩ</label>
                      <div className="select-department">
                        <div className="input-department">
                          <div className="dropdown-input">
                              <div className="p-relative">
                                <input type="text" className="dropdown-department" placeholder="Tìm bác sĩ"/>
                                <div className="icon-search">
                                  <Search className="icon"/>
                                </div>
                                <div className="icon-down">
                                  <BiChevronDown className="icon"/> 
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>  
                    <div>
                      <button disabled className="btn-booking">Đặt lịch ngay</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HospitalDetail;
