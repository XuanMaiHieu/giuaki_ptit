import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

function App() {
  return (
    <div>
      <div className="Top_bar" style={{ display: "block", height: "149px" }}>
        <div className="container">
          <div className="logo-ptit">
            <a id="logo" href="http://localhost:3000/">
              <img
                class="scale-with-grid"
                src="https://portal.ptit.edu.vn/wp-content/uploads/2016/04/ptit-logo.png"
                alt=" "
              />
            </a>
          </div>
          <div className="cluster">
            <div
              class="lang"
              style={{ textAlign: "right", padding: "5px 12px 0 0" }}
            >
              <a href="#">
                <img
                  src="https://portal.ptit.edu.vn/wp-content/uploads/2016/04/quoc-ky-viet-nam.jpg"
                  title="Tiếng Việt"
                  style={{ textAlign: "center" }}
                ></img>
              </a>
              &nbsp;
              <a href="#">
                <img
                  src="https://portal.ptit.edu.vn/wp-content/uploads/2016/04/quoc-ky-anh.jpg"
                  title="Tiếng Anh"
                  style={{ textAlign: "right" }}
                ></img>
              </a>
            </div>
            <a href="#">
              <img
                src="https://portal.ptit.edu.vn/wp-content/uploads/2016/06/mailbox.png"
                title="Mailbox"
                style={{ textAlign: "right" }}
              ></img>
            </a>
            &nbsp;
            <a href="#">
              <img
                src="https://portal.ptit.edu.vn/wp-content/uploads/2016/06/edocman.png"
                title="eDocman"
                style={{ textAlign: "right" }}
              ></img>
            </a>
            &nbsp;
            <div className="btn">s</div>
          </div>
          <div class="hv">
            <p
              style={{ margin: "15px 0 0", color: "#000000", fontSize: "19px" }}
            >
              HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
            </p>
          </div>
          <div class="hve">
            <p
              style={{ margin: "10px 0 0", color: "#D30000", fontSize: "18px" }}
            >
              Posts and Telecommunications Institute of Technology
            </p>
          </div>

          <nav class="navbar navbar-expand-lg">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link active" href="#">
                    Trang chủ
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Tin tức
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Thông báo
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link active" href="#">
                    Giới thiệu
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Thông điệp của Giám đốc Học viện
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Tổng quan
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Cơ cấu tổ chức
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Nguồn nhân lực
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Cơ sở vật chất học viện
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link active" href="#">
                    Giáo dục và đào tạo
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Đào tạo sau đại học
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Đào tạo đại học
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Đào tạo quốc tế
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Đào tạo ngắn hạn
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Văn bằng
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Văn bản quy định
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link active" href="#">
                    Khoa học công nghệ
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Chiến lực phát triển khoa học công nghệ giai đoạn
                        2017-2022
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Tạp chí khoa học
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Kết quả nghiên cứu
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Hội nghị - Hội thảo
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Liên kết cục SHTT
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Hợp tác quốc tế
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Tuyển sinh
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Thư viện
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link active" href="#">
                    Thư viện điện tử
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Hộp thư đến
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Đổi mật khẩu
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link active" href="#">
                    Covid19
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Thông báo từ học viện
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Tìm hiểu về dịch Covid19
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Tờ khai y tế
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Số liệu thống kê
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <section style={{ backgroundColor: "#f3f7f9" }}>
        <div class="container-fluid p-5">
          <div id="carouselExampleIndicators" class="carousel slide mb-5">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://portal.ptit.edu.vn/wp-content/uploads/2018/12/banner-duc-huy.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://portal.ptit.edu.vn/wp-content/uploads/2023/03/banner-website.final-01-01.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://portal.ptit.edu.vn/wp-content/uploads/2020/09/119778765_1480191512166754_1067154317866188844_n.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://portal.ptit.edu.vn/wp-content/uploads/2020/09/119606855_774533900011736_451855316106159614_n.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="mb-4">
            <a href="#">
              <img
                src="https://portal.ptit.edu.vn/wp-content/uploads/2022/08/baner_tuyendung.jpg"
                alt=""
                class="w-100"
              />
            </a>
          </div>
          <div>
            <img
              src="https://portal.ptit.edu.vn/wp-content/uploads/2015/12/home_blogger2_sep.png"
              alt=""
            />
          </div>
          <div class="mt-3">
            <h4 class="fs-5 fw-bolder hover-text-decoration">Tin tức</h4>
            <div class="row g-5 px-3 mb-3">
              <div class="col-4">
                <div class="card border-0 fs-6 h-100">
                  <a href="#">
                    <img
                      src="https://portal.ptit.edu.vn/wp-content/uploads/2023/03/1-10.jpg"
                      class=""
                      alt="Lễ công bố các quyết định về công tác cán bộ"
                    />
                  </a>
                  <div class="card-body">
                    <h5 class="card-title fs-6 fw-semibold">
                      Lễ công bố các quyết định về công tác cán bộ
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card border-0 h-100">
                  <a href="#">
                    <img
                      src="https://portal.ptit.edu.vn/wp-content/uploads/2023/03/9.jpg"
                      class=""
                      alt="Tọa đàm “Thanh niên sáng tạo, chủ động trong công cuộc chuyển đổi số hiện nay”"
                    />
                  </a>
                  <div class="card-body">
                    <h5 class="card-title fs-6 fw-semibold">
                      Tọa đàm “Thanh niên sáng tạo, chủ động trong công cuộc
                      chuyển đổi số hiện nay”
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card border-0 h-100">
                  <a href="#">
                    <img
                      src="https://portal.ptit.edu.vn/wp-content/uploads/2017/04/anh-cu-nhan.png"
                      class=""
                      alt="Năm học 2022-2023, Học viện Công nghệ Bưu chính Viễn thông miễn giảm 9 tỷ đồng học phí cho sinh viên"
                    />
                  </a>
                  <div class="card-body">
                    <h5 class="card-title fs-6 fw-semibold">
                      Năm học 2022-2023, Học viện Công nghệ Bưu chính Viễn thông
                      miễn giảm 9 tỷ đồng học phí cho sinh viên
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card border-0 h-100">
                  <a href="#">
                    <img
                      src="https://portal.ptit.edu.vn/wp-content/uploads/2023/03/1-8.jpg"
                      class=""
                      alt="Tưng bừng ngày hội Tư vấn tuyển sinh, hướng nghiệp 2023"
                    />
                  </a>
                  <div class="card-body">
                    <h5 class="card-title fs-6 fw-semibold">
                      Tưng bừng ngày hội Tư vấn tuyển sinh, hướng nghiệp 2023
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card border-0 h-100">
                  <a href="#">
                    <img
                      src="https://portal.ptit.edu.vn/wp-content/uploads/2023/03/1-9.jpg"
                      class=""
                      alt="Thanh niên PTIT, tiên phong chuyển đổi số tại Hội trại Thanh niên Hội báo toàn quốc năm 2023"
                    />
                  </a>
                  <div class="card-body">
                    <h5 class="card-title fs-6 fw-semibold">
                      Thanh niên PTIT, tiên phong chuyển đổi số tại Hội trại
                      Thanh niên Hội báo toàn quốc năm 2023
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card border-0 h-100">
                  <a href="#">
                    <img
                      src="https://portal.ptit.edu.vn/wp-content/uploads/2023/03/1-11.jpg"
                      class=""
                      alt="10 Sinh viên PTIT hoàn thành xuất sắc chương trình gPBL tại Nhật Bản"
                    />
                  </a>
                  <div class="card-body">
                    <h5 class="card-title fs-6 fw-semibold">
                      10 Sinh viên PTIT hoàn thành xuất sắc chương trình gPBL
                      tại Nhật Bản
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-end">
              <a href="#">Xem thêm</a>
            </div>
          </div>
          <div class="mt-3">
            <div class="row gy-5">
              <div class="col-2-4">
                <div
                  style={{
                    background:
                      "url(https://portal.ptit.edu.vn/wp-content/uploads/2015/12/home_blogger2_sep.png) no-repeat left top",
                    height: "3px",
                  }}
                  class="mb-4"
                ></div>
                <a
                  href="#"
                  class="text-decoration-none text-dark fw-semibold fs-5 hover-text-decoration"
                >
                  Sinh viên tương lai
                </a>
                <a href="#">
                  <img
                    src="https://portal.ptit.edu.vn/wp-content/uploads/2016/05/sv-1.png"
                    alt="Sinh viên tương lai"
                    width="100%"
                    class="mt-4"
                  />
                </a>
              </div>
              <div class="col-2-4">
                <div
                  style={{
                    background:
                      "url(https://portal.ptit.edu.vn/wp-content/uploads/2015/12/home_blogger2_sep.png) no-repeat left top",
                    height: "3px",
                  }}
                  class="mb-4"
                ></div>
                <a
                  href="#"
                  class="text-decoration-none text-dark fw-semibold fs-5 hover-text-decoration"
                >
                  Sinh viên
                </a>
                <a href="#">
                  <img
                    src="https://portal.ptit.edu.vn/wp-content/uploads/2016/05/sinhvien.png"
                    alt="Sinh viên"
                    width="100%"
                    class="mt-4"
                  />
                </a>
              </div>
              <div class="col-2-4">
                <div
                  style={{
                    background:
                      "url(https://portal.ptit.edu.vn/wp-content/uploads/2015/12/home_blogger2_sep.png) no-repeat left top",
                    height: "3px",
                  }}
                  class="mb-4"
                ></div>
                <a
                  href="#"
                  class="text-decoration-none text-dark fw-semibold fs-5 hover-text-decoration"
                >
                  Cựu sinh viên
                </a>
                <a href="#">
                  <img
                    src="https://portal.ptit.edu.vn/wp-content/uploads/2016/05/cuu-sv-1.png"
                    alt="Cựu sinh viên"
                    width="100%"
                    class="mt-4"
                  />
                </a>
              </div>
              <div class="col-2-4">
                <div
                  style={{
                    background:
                      "url(https://portal.ptit.edu.vn/wp-content/uploads/2015/12/home_blogger2_sep.png) no-repeat left top",
                    height: "3px",
                  }}
                  class="mb-4"
                ></div>
                <a
                  href="#"
                  class="text-decoration-none text-dark fw-semibold fs-5 hover-text-decoration"
                >
                  CB - GV - NCV
                </a>
                <a href="#">
                  <img
                    src="https://portal.ptit.edu.vn/wp-content/uploads/2019/05/can-bo-nv-moi-246x146-2.png"
                    alt="
                CB - GV - NCV"
                    width="100%"
                    class="mt-4"
                  />
                </a>
              </div>
              <div class="col-2-4">
                <div
                  style={{
                    background:
                      "url(https://portal.ptit.edu.vn/wp-content/uploads/2015/12/home_blogger2_sep.png) no-repeat left top",
                    height: "3px",
                  }}
                  class="mb-4"
                ></div>
                <a
                  href="#"
                  class="text-decoration-none text-dark fw-semibold fs-5 hover-text-decoration"
                >
                  Tốt nghiệp - Văn bằng
                </a>
                <a href="#">
                  <img
                    src="https://portal.ptit.edu.vn/wp-content/uploads/2019/05/tracuuketqua.jpg"
                    alt="
                Tốt nghiệp - Văn bằng"
                    width="100%"
                    class="mt-4"
                  />
                </a>
              </div>
              <div class="col-3">
                <div
                  style={{
                    background:
                      "url(https://portal.ptit.edu.vn/wp-content/uploads/2015/12/home_blogger2_sep.png) no-repeat left top",
                    height: "3px",
                  }}
                  class="mb-4"
                ></div>
                <a
                  href="#"
                  class="text-decoration-none text-dark fw-semibold fs-5 hover-text-decoration"
                >
                  Video
                </a>
                <div>
                  <iframe
                    width="100%"
                    height="220"
                    src="https://www.youtube.com/embed/Km1T57ZX7Yg"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
              <div class="col-3">
                <div
                  style={{
                    background:
                      "url(https://portal.ptit.edu.vn/wp-content/uploads/2015/12/home_blogger2_sep.png) no-repeat left top",
                    height: "3px",
                  }}
                  class="mb-4"
                ></div>
                <a
                  href="#"
                  class="text-decoration-none text-dark fw-semibold fs-5 hover-text-decoration"
                >
                  Liên kết nhanh
                </a>
                <ul>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-uppercase text-decoration-none fw-bold fs-6 hover-text-decoration text-d3"
                    >
                      Học viện cơ sở TPHCM
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-uppercase text-decoration-none fw-bold fs-6 hover-text-decoration text-d3"
                    >
                      CÁC KHOA ĐÀO TẠO
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-uppercase text-decoration-none fw-bold fs-6 hover-text-decoration text-d3"
                    >
                      ĐÀO TẠO ĐẠI HỌC TỪ XA
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-uppercase text-decoration-none fw-bold fs-6 hover-text-decoration text-d3"
                    >
                      ĐÀO TẠO SAU ĐẠI HỌC
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-uppercase text-decoration-none fw-bold fs-6 hover-text-decoration text-d3"
                    >
                      GIÁO VỤ
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-uppercase text-decoration-none fw-bold fs-6 hover-text-decoration text-d3"
                    >
                      TRUNG TÂM KHẢO THÍ
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-uppercase text-decoration-none fw-bold fs-6 hover-text-decoration text-d3"
                    >
                      TRUNG TÂM ĐÀO TẠO QUỐC TẾ
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-uppercase text-decoration-none fw-bold fs-6 hover-text-decoration text-d3"
                    >
                      BA CÔNG KHAI
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-uppercase text-decoration-none fw-bold fs-6 hover-text-decoration text-d3"
                    >
                      VIỆN CNTT&TT CDIT
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-3">
                <div
                  style={{
                    background:
                      "url(https://portal.ptit.edu.vn/wp-content/uploads/2015/12/home_blogger2_sep.png) no-repeat left top",
                    height: "3px",
                  }}
                  class="mb-4"
                ></div>
                <a
                  href="#"
                  class="text-decoration-none text-dark fw-semibold fs-5 hover-text-decoration"
                >
                  Video
                </a>
                <div class="mt-3">
                  <a href="#">Xem tất cả</a>
                </div>
              </div>
              <div class="col-3">
                <div
                  style={{
                    background:
                      "url(https://portal.ptit.edu.vn/wp-content/uploads/2015/12/home_blogger2_sep.png) no-repeat left top",
                    height: "3px",
                  }}
                  class="mb-4"
                ></div>
                <a
                  href="#"
                  class="text-decoration-none text-dark fw-semibold fs-5 hover-text-decoration"
                >
                  Đối tác
                </a>
                <div id="carouselExample" class="carousel slide mt-4">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="https://portal.ptit.edu.vn/wp-content/uploads/2022/06/HCL1.png"
                        class="d-block w-100"
                        alt="HLC"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://portal.ptit.edu.vn/wp-content/uploads/2022/06/SAMSUNG1.png"
                        class="d-block w-100"
                        alt="SAMSUNG1"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://portal.ptit.edu.vn/wp-content/uploads/2016/07/200601_Du-an-Motive_logo.png"
                        class="d-block w-100"
                        alt="motive"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://portal.ptit.edu.vn/wp-content/uploads/2022/06/VNPT1.png"
                        class="d-block w-100"
                        alt="motive"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://portal.ptit.edu.vn/wp-content/uploads/2021/11/Viettellogo.png"
                        class="d-block w-100"
                        alt="vittel"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://portal.ptit.edu.vn/wp-content/uploads/2021/11/Logo-FPT-1l.png"
                        class="d-block w-100"
                        alt="FPTs"
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="col-9">
                <img
                  src="https://portal.ptit.edu.vn/wp-content/uploads/2022/06/banner_mini.jpg"
                  alt=""
                  width="100%"
                />
              </div>
              <div class="col-3">
                <a
                  href="#"
                  class="text-decoration-none text-dark fw-semibold fs-5 hover-text-decoration"
                >
                  Tuyển dụng
                </a>
                <ul>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-uppercase text-decoration-none fw-bold fs-6 hover-text-decoration text-d3"
                    >
                      TRANG KẾT NỐI DOANH NGHIỆP VÀ ĐÀO TẠO KỸ NĂNG CHO SINH
                      VIÊN
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-uppercase text-decoration-none fw-bold fs-6 hover-text-decoration text-d3"
                    >
                      TRANG VIỆC LÀM CHO SINH VIÊN
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-uppercase text-decoration-none fw-bold fs-6 hover-text-decoration text-d3"
                    >
                      TUYỂN DỤNG GIẢNG VIÊN
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="border-bottom border-danger border-5">
        <h5 class="text-center mt-4">
          HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
        </h5>
        <div class="pt-3 pb-4 container">
          <div class="row">
            <div class="col-3">
              <p>
                Trụ sở chính: <br />
                122 Hoàng Quốc Việt, Q.Cầu Giấy, Hà Nội.
              </p>

              <p>
                Cơ sở đào tạo tại Hà Nội:
                <br />
                Km10, Đường Nguyễn Trãi, Q.Hà Đông, Hà Nội
              </p>
            </div>
            <div class="col-3">
              <p>
                Học viện cơ sở tại TP. Hồ Chí Minh: <br />
                11 Nguyễn Đình Chiểu, P. Đa Kao, Q.1 TP Hồ Chí Minh
              </p>

              <p>
                Cơ sở đào tạo tại TP Hồ Chí Minh:
                <br />
                Đường Man Thiện, P. Hiệp Phú, Q.9 TP Hồ Chí Minh
              </p>
            </div>
            <div class="col-3">
              <ul style={{ listStyleType: "square" }}>
                <li>
                  <a href="#" class="text-decoration-none text-dark"></a>
                  Tra cứu bằng tốt nghiệp
                </li>
                <li>
                  <a href="#" class="text-decoration-none text-dark"></a>
                  Các đơn vị thành viên
                </li>
                <li>
                  <a href="#" class="text-decoration-none text-dark"></a>
                  Tạp chí khoa học công nghệ
                </li>
                <li>
                  <a href="#" class="text-decoration-none text-dark"></a>
                  Bộ công khai
                </li>
                <button class="btn btn-primary mt-2" type="button">
                  <i class="fa-brands fa-facebook"></i>
                  <span>Facebook</span>
                </button>
              </ul>
            </div>
            <div class="col-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.292513152142!2d105.7852492142445!3d20.980908494787613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdd8a1ad71%3A0xa2f9b16036648187!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IGNow61uaCB2aeG7hW4gdGjDtG5n!5e0!3m2!1svi!2s!4v1679571097243!5m2!1svi!2s"
                width="100%"
                height="180"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
