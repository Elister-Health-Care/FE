import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./home.css";
import { Container } from "reactstrap";
import { ReactComponent as Community } from "~/Assets/community.svg";
import { ReactComponent as Care } from "~/Assets/care.svg";
import { ReactComponent as Discover } from "~/Assets/discover.svg";
import { ReactComponent as HealthTools } from "~/Assets/health-tools.svg";
import { BsFillBookmarkFill } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className="home">
      <div className="w-100 banner">
        <Container>
          <div className="row">
            <div className="col-lg-6 col-md-6 banner-left">
              <h3>Bệnh viện - Bác sĩ - Dịch vụ y tế: Đặt hẹn khám ngay</h3>
              <p>
                Trải nghiệm tính năng đặt khám trực tuyến tại các Bệnh viện,
                Phòng khám, Bác sĩ chuyên khoa và Dịch vụ y tế uy tín hoàn toàn
                miễn phí với Elister Health Care ngay hôm nay!
              </p>
            </div>
            <div className="col-lg-6 col-md-6 banner-right">
              <span>
                <img src={require("~/Assets/Doctor-Care.webp")} />
              </span>
            </div>
          </div>
        </Container>
      </div>
      <div className="main-section container">
        <div className="link-nav row">
          <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
            <Link className="item-link">
              <Discover />
              Chuyên mục
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
            <Link className="item-link">
              <Care />
              Đặt lịch hẹn
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
            <Link className=" item-link">
              <HealthTools />
              Kiểm tra sức khỏe
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
            <Link className="item-link">
              <Community />
              Cộng đồng
            </Link>
          </div>
        </div>
        <div className="justify-content-center hr px-5">
          <hr />
        </div>
        <div className="featured-article">
          <div className="top-section">
            <Link to={""}>Bài viết nổi bật</Link>
            <Link to={""}>Bài viết mới nhất</Link>
          </div>
          <div className="row main-section">
            <div className="col-lg-7 col-md-7 section-left">
              <article className="article">
                <div className="banner-article">
                  <span>
                    <img src="https://cdn.hellobacsi.com/wp-content/uploads/2021/08/thuoc-ngua-dot-quy.jpg?w=1920&q=75" />
                  </span>
                </div>
                <div className="content">
                  <div className="inner-content">
                    <p className="category-name">
                      <Link className="name">Đột quỵ và phình mạch não</Link>
                      <Link className="bookmark">
                        <BsFillBookmarkFill />
                      </Link>
                    </p>
                    <h4 className="title-article">
                      <Link>
                        Thuốc ngừa đột quỵ và các biện pháp phòng ngừa đột quỵ
                        tái phát
                      </Link>
                    </h4>
                    <p>
                      Sau điều trị đột quỵ, thiếu máu thoáng qua, dù các triệu
                      chứng đã hết nhưng nguy cơ tái phát vẫn rất cao, nhất là
                      trong 90 ngày đầu. Do đó, người bệnh cần tuân thủ việc
                      dùng thuốc ngừa đột quỵ theo đúng hướng dẫn, không tự ý
                      ngưng thuốc khi chưa có sự Sau điều trị đột quỵ, thiếu máu
                      thoáng qua, dù các triệu chứng đã hết nhưng nguy cơ tái
                      phát vẫn rất cao, nhất là trong 90 ngày đầu. Do đó, người
                      bệnh cần tuân thủ việc dùng thuốc ngừa đột quỵ theo đúng
                      hướng dẫn, không tự ý ngưng thuốc khi chưa có sự
                    </p>
                    <div className="footer-article d-flex">
                      <img
                        className="img-doctor"
                        src="https://cdn.hellobacsi.com/wp-content/uploads/2022/08/bsnguyenthuonghanh-150x150.png?w=32&q=75"
                      />
                      <p>
                        Tham vấn y khoa:
                        <span className="name-doctor ml-1">
                          Bác sĩ Nguyễn Thường Hanh
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-5 col-md-5 section-right">
              <article className="article">
                <div className="banner-article">
                  <span>
                    <img src="https://cdn.hellobacsi.com/wp-content/uploads/2021/08/thuoc-ngua-dot-quy.jpg?w=1920&q=75" />
                  </span>
                </div>
                <div className="content">
                  <div className="inner-content">
                    <p className="category-name">
                      <Link className="name">Đột quỵ và phình mạch não</Link>
                      <Link className="bookmark">
                        <BsFillBookmarkFill />
                      </Link>
                    </p>
                    <h5 className="title-article">
                      <Link>
                        Thuốc ngừa đột quỵ và các biện pháp phòng ngừa đột quỵ
                        tái phát
                      </Link>
                    </h5>
                    <div className="footer-article d-flex">
                      <img
                        className="img-doctor"
                        src="https://cdn.hellobacsi.com/wp-content/uploads/2022/08/bsnguyenthuonghanh-150x150.png?w=32&q=75"
                      />
                      <p>
                        Tham vấn y khoa:
                        <span className="name-doctor ml-1">
                          Bác sĩ Nguyễn Thường Hanh
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
              <div className="justify-content-center hr">
                <hr />
              </div>
              <article className="article row">
                <div className="content col-lg-7 col-md-7">
                  <div className="inner-content">
                    <p className="category-name">
                      <Link className="name">Đột quỵ và phình mạch não</Link>
                      <Link className="bookmark">
                        <BsFillBookmarkFill />
                      </Link>
                    </p>
                    <h5 className="title-article">
                      <Link>
                        Thuốc ngừa đột quỵ và các biện pháp phòng ngừa đột quỵ
                        tái phát
                      </Link>
                    </h5>
                    <div className="footer-article d-flex">
                      <img
                        className="img-doctor"
                        src="https://cdn.hellobacsi.com/wp-content/uploads/2022/08/bsnguyenthuonghanh-150x150.png?w=32&q=75"
                      />
                      <p>
                        Tham vấn y khoa:
                        <span className="name-doctor ml-1">
                          Bác sĩ Nguyễn Thường Hanh
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="banner-article horizontal col-lg-5 col-md-5">
                  <span>
                    <img src="https://cdn.hellobacsi.com/wp-content/uploads/2021/08/thuoc-ngua-dot-quy.jpg?w=1920&q=75" />
                  </span>
                </div>
              </article>
            </div>
          </div>
          <div className="justify-content-center hr">
            <hr />
          </div>
          {/* List Article */}
          <div className="row main-section">
            <div className="col-lg-3 col-md-3 list-article">
              <article className="article">
                <div className="banner-article">
                  <span>
                    <img src="https://cdn.hellobacsi.com/wp-content/uploads/2021/08/thuoc-ngua-dot-quy.jpg?w=1920&q=75" />
                  </span>
                </div>
                <div className="content">
                  <div className="inner-content">
                    <p className="category-name">
                      <Link className="name">Đột quỵ và phình mạch não</Link>
                      <Link className="bookmark">
                        <BsFillBookmarkFill />
                      </Link>
                    </p>
                    <h5 className="title-article">
                      <Link>
                        Thuốc ngừa đột quỵ và các biện pháp phòng ngừa đột quỵ
                        tái phát
                      </Link>
                    </h5>
                    <div className="footer-article d-flex">
                      <img
                        className="img-doctor"
                        src="https://cdn.hellobacsi.com/wp-content/uploads/2022/08/bsnguyenthuonghanh-150x150.png?w=32&q=75"
                      />
                      <p>
                        Tham vấn y khoa:
                        <span className="name-doctor ml-1">
                          Bác sĩ Nguyễn Thường Hanh
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-3 list-article">
              <article className="article">
                <div className="banner-article">
                  <span>
                    <img src="https://cdn.hellobacsi.com/wp-content/uploads/2021/08/thuoc-ngua-dot-quy.jpg?w=1920&q=75" />
                  </span>
                </div>
                <div className="content">
                  <div className="inner-content">
                    <p className="category-name">
                      <Link className="name">Đột quỵ và phình mạch não</Link>
                      <Link className="bookmark">
                        <BsFillBookmarkFill />
                      </Link>
                    </p>
                    <h5 className="title-article">
                      <Link>
                        Thuốc ngừa đột quỵ và các biện pháp phòng ngừa đột quỵ
                        tái phát
                      </Link>
                    </h5>
                    <div className="footer-article d-flex">
                      <img
                        className="img-doctor"
                        src="https://cdn.hellobacsi.com/wp-content/uploads/2022/08/bsnguyenthuonghanh-150x150.png?w=32&q=75"
                      />
                      <p>
                        Tham vấn y khoa:
                        <span className="name-doctor ml-1">
                          Bác sĩ Nguyễn Thường Hanh
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-3 list-article">
              <article className="article">
                <div className="banner-article">
                  <span>
                    <img src="https://cdn.hellobacsi.com/wp-content/uploads/2021/08/thuoc-ngua-dot-quy.jpg?w=1920&q=75" />
                  </span>
                </div>
                <div className="content">
                  <div className="inner-content">
                    <p className="category-name">
                      <Link className="name">Đột quỵ và phình mạch não</Link>
                      <Link className="bookmark">
                        <BsFillBookmarkFill />
                      </Link>
                    </p>
                    <h5 className="title-article">
                      <Link>
                        Thuốc ngừa đột quỵ và các biện pháp phòng ngừa đột quỵ
                        tái phát
                      </Link>
                    </h5>
                    <div className="footer-article d-flex">
                      <img
                        className="img-doctor"
                        src="https://cdn.hellobacsi.com/wp-content/uploads/2022/08/bsnguyenthuonghanh-150x150.png?w=32&q=75"
                      />
                      <p>
                        Tham vấn y khoa:
                        <span className="name-doctor ml-1">
                          Bác sĩ Nguyễn Thường Hanh
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-3 list-article">
              <article className="article">
                <div className="banner-article">
                  <span>
                    <img src="https://cdn.hellobacsi.com/wp-content/uploads/2021/08/thuoc-ngua-dot-quy.jpg?w=1920&q=75" />
                  </span>
                </div>
                <div className="content">
                  <div className="inner-content">
                    <p className="category-name">
                      <Link className="name">Đột quỵ và phình mạch não</Link>
                      <Link className="bookmark">
                        <BsFillBookmarkFill />
                      </Link>
                    </p>
                    <h5 className="title-article">
                      <Link>
                        Thuốc ngừa đột quỵ và các biện pháp phòng ngừa đột quỵ
                        tái phát
                      </Link>
                    </h5>
                    <div className="footer-article d-flex">
                      <img
                        className="img-doctor"
                        src="https://cdn.hellobacsi.com/wp-content/uploads/2022/08/bsnguyenthuonghanh-150x150.png?w=32&q=75"
                      />
                      <p>
                        Tham vấn y khoa:
                        <span className="name-doctor ml-1">
                          Bác sĩ Nguyễn Thường Hanh
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
