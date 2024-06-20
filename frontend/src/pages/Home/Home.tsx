import { useEffect } from "react";

// Components
import { Header, Banner, SectionWrapper } from "../../configs/layout";

// SwiperJs
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Ant Design
import { Card } from "antd";
const { Meta } = Card;

// Aos Css
import AOS from "aos";
import "aos/dist/aos.css";

// React Router
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init({ delay: 0, duration: 400, once: false });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Banner />
        <SectionWrapper title={"رویداد ها"} link={"/"}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Pagination, Autoplay, A11y]}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              370: {
                slidesPerView: 1.1,
              },
              410: {
                slidesPerView: 1.2,
              },
              470: {
                slidesPerView: 1.4,
              },
              540: {
                slidesPerView: 1.6,
              },
              610: {
                slidesPerView: 1.8,
              },
              768: {
                slidesPerView: 2.3,
              },
              1024: {
                slidesPerView: 3.1,
              },
              1280: {
                slidesPerView: 3.6,
              },
              1536: {
                slidesPerView: 4.2,
              },
            }}
          >
            <SwiperSlide className={"pt-4 pb-8 px-1"}>
              <Card
                style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
                cover={
                  <Link to={"/"} className={"w-[350px] h-[300px] object-cover"}>
                    <img
                      alt="Image"
                      src="https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                    />
                  </Link>
                }
              >
                <Meta
                  title={
                    <Link to={"/"}>
                      دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش
                    </Link>
                  }
                  description={
                    <span className={"font-dana line-clamp-4"}>
                      آموزش و پرورش استان خراسان جنوبی بر اساس ابلاغیه رسمی
                      وزارت آموزش و پرورش همزمان با سراسر کشوردر راستای شناسایی
                      نیروی انسانی متخصص برای آموزش و توانمند سازی اولیا دانش
                      آموزان از بین همکاران فرهنگی شاغل و بازنشسته واجد شرایط و
                      اساتید دانشگاه از طریق آزمون کتبی و مصاحبه متمرکز در مرکز
                      استان، مدرس آموزش خانواده جذب می کند.
                    </span>
                  }
                />
              </Card>
            </SwiperSlide>
            <SwiperSlide className={"pt-4 pb-8 px-1"}>
              <Card
                style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
                cover={
                  <Link to={"/"} className={"w-[350px] h-[300px] object-cover"}>
                    <img
                      alt="Image"
                      src="https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                    />
                  </Link>
                }
              >
                <Meta
                  title={
                    <Link to={"/"}>
                      دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش
                    </Link>
                  }
                  description={
                    <span className={"font-dana line-clamp-4"}>
                      آموزش و پرورش استان خراسان جنوبی بر اساس ابلاغیه رسمی
                      وزارت آموزش و پرورش همزمان با سراسر کشوردر راستای شناسایی
                      نیروی انسانی متخصص برای آموزش و توانمند سازی اولیا دانش
                      آموزان از بین همکاران فرهنگی شاغل و بازنشسته واجد شرایط و
                      اساتید دانشگاه از طریق آزمون کتبی و مصاحبه متمرکز در مرکز
                      استان، مدرس آموزش خانواده جذب می کند.
                    </span>
                  }
                />
              </Card>
            </SwiperSlide>
            <SwiperSlide className={"pt-4 pb-8 px-1"}>
              <Card
                style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
                cover={
                  <Link to={"/"} className={"w-[350px] h-[300px] object-cover"}>
                    <img
                      alt="Image"
                      src="https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                    />
                  </Link>
                }
              >
                <Meta
                  title={
                    <Link to={"/"}>
                      دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش
                    </Link>
                  }
                  description={
                    <span className={"font-dana line-clamp-4"}>
                      آموزش و پرورش استان خراسان جنوبی بر اساس ابلاغیه رسمی
                      وزارت آموزش و پرورش همزمان با سراسر کشوردر راستای شناسایی
                      نیروی انسانی متخصص برای آموزش و توانمند سازی اولیا دانش
                      آموزان از بین همکاران فرهنگی شاغل و بازنشسته واجد شرایط و
                      اساتید دانشگاه از طریق آزمون کتبی و مصاحبه متمرکز در مرکز
                      استان، مدرس آموزش خانواده جذب می کند.
                    </span>
                  }
                />
              </Card>
            </SwiperSlide>
            <SwiperSlide className={"pt-4 pb-8 px-1"}>
              <Card
                style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
                cover={
                  <Link to={"/"} className={"w-[350px] h-[300px] object-cover"}>
                    <img
                      alt="Image"
                      src="https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                    />
                  </Link>
                }
              >
                <Meta
                  title={
                    <Link to={"/"}>
                      دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش
                    </Link>
                  }
                  description={
                    <span className={"font-dana line-clamp-4"}>
                      آموزش و پرورش استان خراسان جنوبی بر اساس ابلاغیه رسمی
                      وزارت آموزش و پرورش همزمان با سراسر کشوردر راستای شناسایی
                      نیروی انسانی متخصص برای آموزش و توانمند سازی اولیا دانش
                      آموزان از بین همکاران فرهنگی شاغل و بازنشسته واجد شرایط و
                      اساتید دانشگاه از طریق آزمون کتبی و مصاحبه متمرکز در مرکز
                      استان، مدرس آموزش خانواده جذب می کند.
                    </span>
                  }
                />
              </Card>
            </SwiperSlide>
            <SwiperSlide className={"pt-4 pb-8 px-1"}>
              <Card
                style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
                cover={
                  <Link to={"/"} className={"w-[350px] h-[300px] object-cover"}>
                    <img
                      alt="Image"
                      src="https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                    />
                  </Link>
                }
              >
                <Meta
                  title={
                    <Link to={"/"}>
                      دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش
                    </Link>
                  }
                  description={
                    <span className={"font-dana line-clamp-4"}>
                      آموزش و پرورش استان خراسان جنوبی بر اساس ابلاغیه رسمی
                      وزارت آموزش و پرورش همزمان با سراسر کشوردر راستای شناسایی
                      نیروی انسانی متخصص برای آموزش و توانمند سازی اولیا دانش
                      آموزان از بین همکاران فرهنگی شاغل و بازنشسته واجد شرایط و
                      اساتید دانشگاه از طریق آزمون کتبی و مصاحبه متمرکز در مرکز
                      استان، مدرس آموزش خانواده جذب می کند.
                    </span>
                  }
                />
              </Card>
            </SwiperSlide>
          </Swiper>
        </SectionWrapper>
        <SectionWrapper title={"اخبار"} link={"/"}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Pagination, Autoplay, A11y]}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              370: {
                slidesPerView: 1.1,
              },
              410: {
                slidesPerView: 1.2,
              },
              470: {
                slidesPerView: 1.4,
              },
              540: {
                slidesPerView: 1.6,
              },
              610: {
                slidesPerView: 1.8,
              },
              768: {
                slidesPerView: 2.3,
              },
              1024: {
                slidesPerView: 3.1,
              },
              1280: {
                slidesPerView: 3.6,
              },
              1536: {
                slidesPerView: 4.2,
              },
            }}
          >
            <SwiperSlide className={"pt-4 pb-8 px-1"}>
              <Card
                style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
                cover={
                  <Link to={"/"} className={"w-[350px] h-[300px] object-cover"}>
                    <img
                      alt="Image"
                      src="https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                    />
                  </Link>
                }
              >
                <Meta
                  title={
                    <Link to={"/"}>
                      دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش
                    </Link>
                  }
                  description={
                    <span className={"font-dana line-clamp-4"}>
                      آموزش و پرورش استان خراسان جنوبی بر اساس ابلاغیه رسمی
                      وزارت آموزش و پرورش همزمان با سراسر کشوردر راستای شناسایی
                      نیروی انسانی متخصص برای آموزش و توانمند سازی اولیا دانش
                      آموزان از بین همکاران فرهنگی شاغل و بازنشسته واجد شرایط و
                      اساتید دانشگاه از طریق آزمون کتبی و مصاحبه متمرکز در مرکز
                      استان، مدرس آموزش خانواده جذب می کند.
                    </span>
                  }
                />
              </Card>
            </SwiperSlide>
            <SwiperSlide className={"pt-4 pb-8 px-1"}>
              <Card
                style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
                cover={
                  <Link to={"/"} className={"w-[350px] h-[300px] object-cover"}>
                    <img
                      alt="Image"
                      src="https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                    />
                  </Link>
                }
              >
                <Meta
                  title={
                    <Link to={"/"}>
                      دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش
                    </Link>
                  }
                  description={
                    <span className={"font-dana line-clamp-4"}>
                      آموزش و پرورش استان خراسان جنوبی بر اساس ابلاغیه رسمی
                      وزارت آموزش و پرورش همزمان با سراسر کشوردر راستای شناسایی
                      نیروی انسانی متخصص برای آموزش و توانمند سازی اولیا دانش
                      آموزان از بین همکاران فرهنگی شاغل و بازنشسته واجد شرایط و
                      اساتید دانشگاه از طریق آزمون کتبی و مصاحبه متمرکز در مرکز
                      استان، مدرس آموزش خانواده جذب می کند.
                    </span>
                  }
                />
              </Card>
            </SwiperSlide>
            <SwiperSlide className={"pt-4 pb-8 px-1"}>
              <Card
                style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
                cover={
                  <Link to={"/"} className={"w-[350px] h-[300px] object-cover"}>
                    <img
                      alt="Image"
                      src="https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                    />
                  </Link>
                }
              >
                <Meta
                  title={
                    <Link to={"/"}>
                      دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش
                    </Link>
                  }
                  description={
                    <span className={"font-dana line-clamp-4"}>
                      آموزش و پرورش استان خراسان جنوبی بر اساس ابلاغیه رسمی
                      وزارت آموزش و پرورش همزمان با سراسر کشوردر راستای شناسایی
                      نیروی انسانی متخصص برای آموزش و توانمند سازی اولیا دانش
                      آموزان از بین همکاران فرهنگی شاغل و بازنشسته واجد شرایط و
                      اساتید دانشگاه از طریق آزمون کتبی و مصاحبه متمرکز در مرکز
                      استان، مدرس آموزش خانواده جذب می کند.
                    </span>
                  }
                />
              </Card>
            </SwiperSlide>
            <SwiperSlide className={"pt-4 pb-8 px-1"}>
              <Card
                style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
                cover={
                  <Link to={"/"} className={"w-[350px] h-[300px] object-cover"}>
                    <img
                      alt="Image"
                      src="https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                    />
                  </Link>
                }
              >
                <Meta
                  title={
                    <Link to={"/"}>
                      دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش
                    </Link>
                  }
                  description={
                    <span className={"font-dana line-clamp-4"}>
                      آموزش و پرورش استان خراسان جنوبی بر اساس ابلاغیه رسمی
                      وزارت آموزش و پرورش همزمان با سراسر کشوردر راستای شناسایی
                      نیروی انسانی متخصص برای آموزش و توانمند سازی اولیا دانش
                      آموزان از بین همکاران فرهنگی شاغل و بازنشسته واجد شرایط و
                      اساتید دانشگاه از طریق آزمون کتبی و مصاحبه متمرکز در مرکز
                      استان، مدرس آموزش خانواده جذب می کند.
                    </span>
                  }
                />
              </Card>
            </SwiperSlide>
            <SwiperSlide className={"pt-4 pb-8 px-1"}>
              <Card
                style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
                cover={
                  <Link to={"/"} className={"w-[350px] h-[300px] object-cover"}>
                    <img
                      alt="Image"
                      src="https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                    />
                  </Link>
                }
              >
                <Meta
                  title={
                    <Link to={"/"}>
                      دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش
                    </Link>
                  }
                  description={
                    <span className={"font-dana line-clamp-4"}>
                      آموزش و پرورش استان خراسان جنوبی بر اساس ابلاغیه رسمی
                      وزارت آموزش و پرورش همزمان با سراسر کشوردر راستای شناسایی
                      نیروی انسانی متخصص برای آموزش و توانمند سازی اولیا دانش
                      آموزان از بین همکاران فرهنگی شاغل و بازنشسته واجد شرایط و
                      اساتید دانشگاه از طریق آزمون کتبی و مصاحبه متمرکز در مرکز
                      استان، مدرس آموزش خانواده جذب می کند.
                    </span>
                  }
                />
              </Card>
            </SwiperSlide>
          </Swiper>
        </SectionWrapper>
        <SectionWrapper title={"خاطرات"} link={"/"}>
          <div
            className={
              "w-full grid grid-cols-4 gap-4 py-4 overflow-x-hidden child:overflow-x-hidden"
            }
          >
            <div
              data-aos="fade-left"
              className={
                "col-span-2 h-40 w-full rounded-xl overflow-hidden object-cover relative"
              }
            >
              <Link to={"/"} className={"size-full"}>
                <img
                  src="https://www.sampadia.com/forum/data/xfmg/thumbnail/0/81-6852206493687b51f951a2d8a77675cb.jpg?1587808790"
                  alt="img"
                  className={"brightness-[40%]"}
                />

                <span
                  className={
                    " font-danaBold text-3xl sm:text-4xl md:text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                  }
                >
                  1403
                </span>
              </Link>
            </div>
            <div
              data-aos="fade-right"
              className={
                "col-span-2 h-40 w-full rounded-xl overflow-hidden object-cover relative"
              }
            >
              <Link to={"/"} className={"size-full"}>
                <img
                  src="https://www.sampadia.com/forum/data/xfmg/thumbnail/0/81-6852206493687b51f951a2d8a77675cb.jpg?1587808790"
                  alt="img"
                  className={"brightness-[40%]"}
                />

                <span
                  className={
                    " font-danaBold text-3xl sm:text-4xl md:text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                  }
                >
                  1402
                </span>
              </Link>
            </div>
            <div
              data-aos="fade-left"
              className={
                "col-span-2 h-40 w-full rounded-xl overflow-hidden object-cover relative"
              }
            >
              <Link to={"/"} className={"size-full"}>
                <img
                  src="https://www.sampadia.com/forum/data/xfmg/thumbnail/0/81-6852206493687b51f951a2d8a77675cb.jpg?1587808790"
                  alt="img"
                  className={"brightness-[40%]"}
                />

                <span
                  className={
                    " font-danaBold text-3xl sm:text-4xl md:text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                  }
                >
                  1401
                </span>
              </Link>
            </div>
            <div
              data-aos="fade-right"
              className={
                "col-span-2 h-40 w-full rounded-xl overflow-hidden object-cover relative"
              }
            >
              <Link to={"/"} className={"size-full"}>
                <img
                  src="https://www.sampadia.com/forum/data/xfmg/thumbnail/0/81-6852206493687b51f951a2d8a77675cb.jpg?1587808790"
                  alt="img"
                  className={"brightness-[40%]"}
                />

                <span
                  className={
                    " font-danaBold text-3xl sm:text-4xl md:text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                  }
                >
                  1400
                </span>
              </Link>
            </div>
            <div
              data-aos="fade-left"
              className={
                "col-span-2 h-40 w-full rounded-xl overflow-hidden object-cover relative"
              }
            >
              <Link to={"/"} className={"size-full"}>
                <img
                  src="https://www.sampadia.com/forum/data/xfmg/thumbnail/0/81-6852206493687b51f951a2d8a77675cb.jpg?1587808790"
                  alt="img"
                  className={"brightness-[40%]"}
                />

                <span
                  className={
                    " font-danaBold text-3xl sm:text-4xl md:text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                  }
                >
                  1399
                </span>
              </Link>
            </div>
            <div
              data-aos="fade-right"
              className={
                "col-span-2 h-40 w-full rounded-xl overflow-hidden object-cover relative"
              }
            >
              <Link to={"/"} className={"size-full"}>
                <img
                  src="https://www.sampadia.com/forum/data/xfmg/thumbnail/0/81-6852206493687b51f951a2d8a77675cb.jpg?1587808790"
                  alt="img"
                  className={"brightness-[40%]"}
                />

                <span
                  className={
                    " font-danaBold text-3xl sm:text-4xl md:text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                  }
                >
                  1398
                </span>
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </main>
    </>
  );
};

export default Home;
