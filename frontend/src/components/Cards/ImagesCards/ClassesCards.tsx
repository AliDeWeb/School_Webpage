// Ant Design
import { Avatar, Card } from "antd";
const { Meta } = Card;

// SwiperJs
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// React Router
import { Link } from "react-router-dom";

const ClassesCards = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Autoplay, A11y]}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        loop={true}
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
        dir={"rtl"}
      >
        <SwiperSlide className={"pt-4 pb-8 px-1"}>
          <Card
            style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
            cover={
              <Link to={"/"}>
                <img
                  alt="img"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  loading={"lazy"}
                />
              </Link>
            }
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={
                <Link to={"/"} className={"font-danaBold"}>
                  کلاس آموزش برنامه نویسی و بازی سازی
                </Link>
              }
              description={
                <span className={"line-clamp-2 font-dana"}>
                  آموزش برنامه نویسی و بازی سازی مقدماتی تا پیشرفته با استفاده
                  از موتور unity و زبان قدرتمند C#
                </span>
              }
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide className={"pt-4 pb-8 px-1"}>
          <Card
            style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
            cover={
              <Link to={"/"}>
                <img
                  alt="img"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  loading={"lazy"}
                />
              </Link>
            }
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={
                <Link to={"/"} className={"font-danaBold"}>
                  کلاس آموزش برنامه نویسی و بازی سازی
                </Link>
              }
              description={
                <span className={"line-clamp-2 font-dana"}>
                  آموزش برنامه نویسی و بازی سازی مقدماتی تا پیشرفته با استفاده
                  از موتور unity و زبان قدرتمند C#
                </span>
              }
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide className={"pt-4 pb-8 px-1"}>
          <Card
            style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
            cover={
              <Link to={"/"}>
                <img
                  alt="img"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  loading={"lazy"}
                />
              </Link>
            }
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={
                <Link to={"/"} className={"font-danaBold"}>
                  کلاس آموزش برنامه نویسی و بازی سازی
                </Link>
              }
              description={
                <span className={"line-clamp-2 font-dana"}>
                  آموزش برنامه نویسی و بازی سازی مقدماتی تا پیشرفته با استفاده
                  از موتور unity و زبان قدرتمند C#
                </span>
              }
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide className={"pt-4 pb-8 px-1"}>
          <Card
            style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
            cover={
              <Link to={"/"}>
                <img
                  alt="img"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  loading={"lazy"}
                />
              </Link>
            }
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={
                <Link to={"/"} className={"font-danaBold"}>
                  کلاس آموزش برنامه نویسی و بازی سازی
                </Link>
              }
              description={
                <span className={"line-clamp-2 font-dana"}>
                  آموزش برنامه نویسی و بازی سازی مقدماتی تا پیشرفته با استفاده
                  از موتور unity و زبان قدرتمند C#
                </span>
              }
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide className={"pt-4 pb-8 px-1"}>
          <Card
            style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
            cover={
              <Link to={"/"}>
                <img
                  alt="img"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  loading={"lazy"}
                />
              </Link>
            }
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={
                <Link to={"/"} className={"font-danaBold"}>
                  کلاس آموزش برنامه نویسی و بازی سازی
                </Link>
              }
              description={
                <span className={"line-clamp-2 font-dana"}>
                  آموزش برنامه نویسی و بازی سازی مقدماتی تا پیشرفته با استفاده
                  از موتور unity و زبان قدرتمند C#
                </span>
              }
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide className={"pt-4 pb-8 px-1"}>
          <Card
            style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
            cover={
              <Link to={"/"}>
                <img
                  alt="img"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  loading={"lazy"}
                />
              </Link>
            }
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={
                <Link to={"/"} className={"font-danaBold"}>
                  کلاس آموزش برنامه نویسی و بازی سازی
                </Link>
              }
              description={
                <span className={"line-clamp-2 font-dana"}>
                  آموزش برنامه نویسی و بازی سازی مقدماتی تا پیشرفته با استفاده
                  از موتور unity و زبان قدرتمند C#
                </span>
              }
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide className={"pt-4 pb-8 px-1"}>
          <Card
            style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
            cover={
              <Link to={"/"}>
                <img
                  alt="img"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  loading={"lazy"}
                />
              </Link>
            }
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={
                <Link to={"/"} className={"font-danaBold"}>
                  کلاس آموزش برنامه نویسی و بازی سازی
                </Link>
              }
              description={
                <span className={"line-clamp-2 font-dana"}>
                  آموزش برنامه نویسی و بازی سازی مقدماتی تا پیشرفته با استفاده
                  از موتور unity و زبان قدرتمند C#
                </span>
              }
            />
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ClassesCards;
