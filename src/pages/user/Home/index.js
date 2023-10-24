import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./home.css";
import { Container } from "reactstrap";
import { ReactComponent as Community } from "~/Assets/community.svg";
import { ReactComponent as Care } from "~/Assets/care.svg";
import { ReactComponent as Discover } from "~/Assets/discover.svg";
import { ReactComponent as HealthTools } from "~/Assets/health-tools.svg";
import { BsFillBookmarkFill } from "react-icons/bs";
import http from '~/utils/http';
import config from "~/router/config";
import LoadingDot from '~/components/Loading/LoadingDot'

const HomePage = () => {
  const [loading, setLoading] = useState(false)
  const [articles, setArticles] = useState([]);
  const [type_get_article, setTypeGetArticle] = useState(true);
  const [active,setActive] = useState(1);
  useEffect(() => {
		const getArticle = async () => {
			try {
        setLoading(true)
        let queryFilter = `&sort_search_number=true`;
        if(type_get_article==false) {
          queryFilter = `&sortlatest=true`;
        }
        console.log(type_get_article);
				const queryParams = `?&page=1&paginate=7`+queryFilter;
				const response = await http.get('/article'+queryParams);
				setArticles(response.data.data.data);
			} catch (error) {
				console.log('Lỗi kết nối đến API !', error);
			} finally {
        setLoading(false)
      }
		}
		getArticle()
	}, [active, type_get_article]);

  const handleNewestArticle = () => {
    setTypeGetArticle(false);
    setActive(2)
  }
  const handleFeaturedArticle = () => {
    setTypeGetArticle(true);
    setActive(1)
  }
  return (
    <div className="home">
      {loading && <LoadingDot />}
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
            <button className={active==1 && "active"} onClick={handleFeaturedArticle} >Bài viết nổi bật</button>
            <button className={active==2 && "active"} onClick={handleNewestArticle} >Bài viết mới nhất</button>
          </div>
          <div className="row main-section">
            <div className="col-lg-7 col-md-7 section-left">
            {articles.map((article, index) => {
              if(index===0) {
              return(
                <article className="article">
                  <div className="banner-article">
                    <span>
                      <img src={article.thumbnail_article && config.URL + article.thumbnail_article} />
                    </span>
                  </div>
                  <div className="content">
                    <div className="inner-content">
                      <p className="category-name">
                        <Link className="name">{article.name_category}</Link>
                        <Link className="bookmark">
                          <BsFillBookmarkFill />
                        </Link>
                      </p>
                      <h4 className="title-article">
                        <Link to= {"/article/"+article.id_article}>
                          {article.title}
                        </Link>
                      </h4>
                      {/* <div dangerouslySetInnerHTML={{ __html: article.content }}/> */}
                      <div className="footer-article d-flex">
                        <img
                          className="img-doctor"
                          src={article.avatar_user && config.URL + article.avatar_user}
                        />
                        <p>
                          Tham vấn y khoa:
                          <span className="name-doctor ml-1">
                            {article.name_user}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
 
                )}}
              )}
            </div>
            <div className="col-lg-5 col-md-5 section-right">
            {articles.map((article, index) => {
              if(index===1) {
              return(
              <article className="article">
                <div className="banner-article">
                  <span>
                    <img src={article.thumbnail_article && config.URL + article.thumbnail_article} />
                  </span>
                </div>
                <div className="content">
                    <div className="inner-content">
                      <p className="category-name">
                        <Link className="name">{article.name_category}</Link>
                        <Link className="bookmark">
                          <BsFillBookmarkFill />
                        </Link>
                      </p>
                      <h5 className="title-article">
                        <Link>
                          {article.title}
                        </Link>
                      </h5>
                      <div className="footer-article d-flex">
                        <img
                          className="img-doctor"
                          src={article.avatar_user && config.URL + article.avatar_user}
                        />
                        <p>
                          Tham vấn y khoa:
                          <span className="name-doctor ml-1">
                            {article.name_user}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
              </article>
              )}})}
              <div className="justify-content-center hr">
                <hr />
              </div>
              {articles.map((article, index) => {
              if(index===2) {
              return(
              <article className="article row">
                <div className="content col-lg-7 col-md-7">
                  <div className="inner-content">
                      <p className="category-name">
                        <Link className="name">{article.name_category}</Link>
                        <Link className="bookmark">
                          <BsFillBookmarkFill />
                        </Link>
                      </p>
                      <h5 className="title-article">
                        <Link>
                          {article.title}
                        </Link>
                      </h5>
                      <div className="footer-article d-flex">
                        <img
                          className="img-doctor"
                          src={article.avatar_user && config.URL + article.avatar_user}
                        />
                        <p>
                          Tham vấn y khoa:
                          <span className="name-doctor ml-1">
                            {article.name_user}
                          </span>
                        </p>
                      </div>
                    </div>
                </div>
                <div className="banner-article horizontal col-lg-5 col-md-5">
                  <span>
                    <img src={article.thumbnail_article && config.URL + article.thumbnail_article} />
                  </span>
                </div>
              </article>
              )}})}
            </div>
          </div>
          <div className="justify-content-center hr">
            <hr />
          </div>
          {/* List Article */}
          <div className="row main-section">
          {articles.map((article, index) => {
              if(index >=3) {
              return(
            <div className="col-lg-3 col-md-3 list-article">
              <article className="article">
                <div className="banner-article">
                  <span>
                    <img src={article.thumbnail_article && config.URL + article.thumbnail_article} />
                  </span>
                </div>
                <div className="content">
                    <div className="inner-content">
                      <p className="category-name">
                        <Link className="name">{article.name_category}</Link>
                        <Link className="bookmark">
                          <BsFillBookmarkFill />
                        </Link>
                      </p>
                      <h5 className="title-article">
                        <Link>
                          {article.title}
                        </Link>
                      </h5>
                      <div className="footer-article d-flex">
                        <img
                          className="img-doctor"
                          src={article.avatar_user && config.URL + article.avatar_user}
                        />
                        <p>
                          Tham vấn y khoa:
                          <span className="name-doctor ml-1">
                            {article.name_user}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
              </article>
            </div>
              )}})}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
