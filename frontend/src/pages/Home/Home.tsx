import { useEffect } from "react";

// Components
import {
  Header,
  Footer,
  Banner,
  SectionWrapper,
  ImagesCards,
  MemoryCard,
  ImageGalleryGridSystem,
  ClassesCards,
} from "../../configs/layout";

// SwiperJs
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Aos Css
import AOS from "aos";
import "aos/dist/aos.css";

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
          >
            <SwiperSlide>
              <ImagesCards
                title={"دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش"}
                description={
                  "در ایران این وزارتخانه از سال ۱۳۴۳ که از وزارت فرهنگ جدا گردید مسئولیت آموزش عالی (دانشگاه‌ها) را نیز عهده‌دار بوده‌است؛ اما پس از تشکیل وزارت علوم، برای ادارهٔ امور دانشگاه‌ها و امور پژوهشی در سطوح عالی، وزارت آموزش و پرورش وظیفهٔ آموزش رایگان همهٔ افراد در مقاطع پیش دبستان، دبستان، دورهٔ اول متوسطه، دورهٔ دوم متوسطه و همچنین ادارهٔ دانشگاه فرهنگیان برای تربیت معلم و دانشگاه تربیت دبیر شهید رجایی را بر عهده دارد. "
                }
                link={"/"}
                img={
                  "https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImagesCards
                title={"دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش"}
                description={
                  "در ایران این وزارتخانه از سال ۱۳۴۳ که از وزارت فرهنگ جدا گردید مسئولیت آموزش عالی (دانشگاه‌ها) را نیز عهده‌دار بوده‌است؛ اما پس از تشکیل وزارت علوم، برای ادارهٔ امور دانشگاه‌ها و امور پژوهشی در سطوح عالی، وزارت آموزش و پرورش وظیفهٔ آموزش رایگان همهٔ افراد در مقاطع پیش دبستان، دبستان، دورهٔ اول متوسطه، دورهٔ دوم متوسطه و همچنین ادارهٔ دانشگاه فرهنگیان برای تربیت معلم و دانشگاه تربیت دبیر شهید رجایی را بر عهده دارد. "
                }
                link={"/"}
                img={
                  "https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImagesCards
                title={"دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش"}
                description={
                  "در ایران این وزارتخانه از سال ۱۳۴۳ که از وزارت فرهنگ جدا گردید مسئولیت آموزش عالی (دانشگاه‌ها) را نیز عهده‌دار بوده‌است؛ اما پس از تشکیل وزارت علوم، برای ادارهٔ امور دانشگاه‌ها و امور پژوهشی در سطوح عالی، وزارت آموزش و پرورش وظیفهٔ آموزش رایگان همهٔ افراد در مقاطع پیش دبستان، دبستان، دورهٔ اول متوسطه، دورهٔ دوم متوسطه و همچنین ادارهٔ دانشگاه فرهنگیان برای تربیت معلم و دانشگاه تربیت دبیر شهید رجایی را بر عهده دارد. "
                }
                link={"/"}
                img={
                  "https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImagesCards
                title={"دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش"}
                description={
                  "در ایران این وزارتخانه از سال ۱۳۴۳ که از وزارت فرهنگ جدا گردید مسئولیت آموزش عالی (دانشگاه‌ها) را نیز عهده‌دار بوده‌است؛ اما پس از تشکیل وزارت علوم، برای ادارهٔ امور دانشگاه‌ها و امور پژوهشی در سطوح عالی، وزارت آموزش و پرورش وظیفهٔ آموزش رایگان همهٔ افراد در مقاطع پیش دبستان، دبستان، دورهٔ اول متوسطه، دورهٔ دوم متوسطه و همچنین ادارهٔ دانشگاه فرهنگیان برای تربیت معلم و دانشگاه تربیت دبیر شهید رجایی را بر عهده دارد. "
                }
                link={"/"}
                img={
                  "https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImagesCards
                title={"دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش"}
                description={
                  "در ایران این وزارتخانه از سال ۱۳۴۳ که از وزارت فرهنگ جدا گردید مسئولیت آموزش عالی (دانشگاه‌ها) را نیز عهده‌دار بوده‌است؛ اما پس از تشکیل وزارت علوم، برای ادارهٔ امور دانشگاه‌ها و امور پژوهشی در سطوح عالی، وزارت آموزش و پرورش وظیفهٔ آموزش رایگان همهٔ افراد در مقاطع پیش دبستان، دبستان، دورهٔ اول متوسطه، دورهٔ دوم متوسطه و همچنین ادارهٔ دانشگاه فرهنگیان برای تربیت معلم و دانشگاه تربیت دبیر شهید رجایی را بر عهده دارد. "
                }
                link={"/"}
                img={
                  "https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImagesCards
                title={"دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش"}
                description={
                  "در ایران این وزارتخانه از سال ۱۳۴۳ که از وزارت فرهنگ جدا گردید مسئولیت آموزش عالی (دانشگاه‌ها) را نیز عهده‌دار بوده‌است؛ اما پس از تشکیل وزارت علوم، برای ادارهٔ امور دانشگاه‌ها و امور پژوهشی در سطوح عالی، وزارت آموزش و پرورش وظیفهٔ آموزش رایگان همهٔ افراد در مقاطع پیش دبستان، دبستان، دورهٔ اول متوسطه، دورهٔ دوم متوسطه و همچنین ادارهٔ دانشگاه فرهنگیان برای تربیت معلم و دانشگاه تربیت دبیر شهید رجایی را بر عهده دارد. "
                }
                link={"/"}
                img={
                  "https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                }
              />
            </SwiperSlide>
          </Swiper>
        </SectionWrapper>
        <SectionWrapper title={"اخبار"} link={"/"}>
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
          >
            <SwiperSlide>
              <ImagesCards
                title={"دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش"}
                description={
                  "در ایران این وزارتخانه از سال ۱۳۴۳ که از وزارت فرهنگ جدا گردید مسئولیت آموزش عالی (دانشگاه‌ها) را نیز عهده‌دار بوده‌است؛ اما پس از تشکیل وزارت علوم، برای ادارهٔ امور دانشگاه‌ها و امور پژوهشی در سطوح عالی، وزارت آموزش و پرورش وظیفهٔ آموزش رایگان همهٔ افراد در مقاطع پیش دبستان، دبستان، دورهٔ اول متوسطه، دورهٔ دوم متوسطه و همچنین ادارهٔ دانشگاه فرهنگیان برای تربیت معلم و دانشگاه تربیت دبیر شهید رجایی را بر عهده دارد. "
                }
                link={"/"}
                img={
                  "https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImagesCards
                title={"دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش"}
                description={
                  "در ایران این وزارتخانه از سال ۱۳۴۳ که از وزارت فرهنگ جدا گردید مسئولیت آموزش عالی (دانشگاه‌ها) را نیز عهده‌دار بوده‌است؛ اما پس از تشکیل وزارت علوم، برای ادارهٔ امور دانشگاه‌ها و امور پژوهشی در سطوح عالی، وزارت آموزش و پرورش وظیفهٔ آموزش رایگان همهٔ افراد در مقاطع پیش دبستان، دبستان، دورهٔ اول متوسطه، دورهٔ دوم متوسطه و همچنین ادارهٔ دانشگاه فرهنگیان برای تربیت معلم و دانشگاه تربیت دبیر شهید رجایی را بر عهده دارد. "
                }
                link={"/"}
                img={
                  "https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImagesCards
                title={"دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش"}
                description={
                  "در ایران این وزارتخانه از سال ۱۳۴۳ که از وزارت فرهنگ جدا گردید مسئولیت آموزش عالی (دانشگاه‌ها) را نیز عهده‌دار بوده‌است؛ اما پس از تشکیل وزارت علوم، برای ادارهٔ امور دانشگاه‌ها و امور پژوهشی در سطوح عالی، وزارت آموزش و پرورش وظیفهٔ آموزش رایگان همهٔ افراد در مقاطع پیش دبستان، دبستان، دورهٔ اول متوسطه، دورهٔ دوم متوسطه و همچنین ادارهٔ دانشگاه فرهنگیان برای تربیت معلم و دانشگاه تربیت دبیر شهید رجایی را بر عهده دارد. "
                }
                link={"/"}
                img={
                  "https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImagesCards
                title={"دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش"}
                description={
                  "در ایران این وزارتخانه از سال ۱۳۴۳ که از وزارت فرهنگ جدا گردید مسئولیت آموزش عالی (دانشگاه‌ها) را نیز عهده‌دار بوده‌است؛ اما پس از تشکیل وزارت علوم، برای ادارهٔ امور دانشگاه‌ها و امور پژوهشی در سطوح عالی، وزارت آموزش و پرورش وظیفهٔ آموزش رایگان همهٔ افراد در مقاطع پیش دبستان، دبستان، دورهٔ اول متوسطه، دورهٔ دوم متوسطه و همچنین ادارهٔ دانشگاه فرهنگیان برای تربیت معلم و دانشگاه تربیت دبیر شهید رجایی را بر عهده دارد. "
                }
                link={"/"}
                img={
                  "https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImagesCards
                title={"دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش"}
                description={
                  "در ایران این وزارتخانه از سال ۱۳۴۳ که از وزارت فرهنگ جدا گردید مسئولیت آموزش عالی (دانشگاه‌ها) را نیز عهده‌دار بوده‌است؛ اما پس از تشکیل وزارت علوم، برای ادارهٔ امور دانشگاه‌ها و امور پژوهشی در سطوح عالی، وزارت آموزش و پرورش وظیفهٔ آموزش رایگان همهٔ افراد در مقاطع پیش دبستان، دبستان، دورهٔ اول متوسطه، دورهٔ دوم متوسطه و همچنین ادارهٔ دانشگاه فرهنگیان برای تربیت معلم و دانشگاه تربیت دبیر شهید رجایی را بر عهده دارد. "
                }
                link={"/"}
                img={
                  "https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImagesCards
                title={"دعوت به همکاری مدرس آموزش خانواده در آموزش و پرورش"}
                description={
                  "در ایران این وزارتخانه از سال ۱۳۴۳ که از وزارت فرهنگ جدا گردید مسئولیت آموزش عالی (دانشگاه‌ها) را نیز عهده‌دار بوده‌است؛ اما پس از تشکیل وزارت علوم، برای ادارهٔ امور دانشگاه‌ها و امور پژوهشی در سطوح عالی، وزارت آموزش و پرورش وظیفهٔ آموزش رایگان همهٔ افراد در مقاطع پیش دبستان، دبستان، دورهٔ اول متوسطه، دورهٔ دوم متوسطه و همچنین ادارهٔ دانشگاه فرهنگیان برای تربیت معلم و دانشگاه تربیت دبیر شهید رجایی را بر عهده دارد. "
                }
                link={"/"}
                img={
                  "https://img9.irna.ir/d/r2/2022/04/30/4/169640693.jpg?ts=1651285348627"
                }
              />
            </SwiperSlide>
          </Swiper>
        </SectionWrapper>
        <SectionWrapper title={"خاطرات"} link={"/"}>
          <div
            className={
              "w-full grid grid-cols-4 gap-4 py-4 overflow-x-hidden child:overflow-x-hidden"
            }
          >
            <MemoryCard
              year={1403}
              link={"/"}
              fadeEffect={"left"}
              img={
                "https://www.sampadia.com/forum/data/xfmg/thumbnail/0/81-6852206493687b51f951a2d8a77675cb.jpg?1587808790"
              }
            />
            <MemoryCard
              year={1402}
              link={"/"}
              fadeEffect={"right"}
              img={
                "https://www.sampadia.com/forum/data/xfmg/thumbnail/0/81-6852206493687b51f951a2d8a77675cb.jpg?1587808790"
              }
            />
            <MemoryCard
              year={1401}
              link={"/"}
              fadeEffect={"left"}
              img={
                "https://www.sampadia.com/forum/data/xfmg/thumbnail/0/81-6852206493687b51f951a2d8a77675cb.jpg?1587808790"
              }
            />
            <MemoryCard
              year={1400}
              link={"/"}
              fadeEffect={"right"}
              img={
                "https://www.sampadia.com/forum/data/xfmg/thumbnail/0/81-6852206493687b51f951a2d8a77675cb.jpg?1587808790"
              }
            />
          </div>
        </SectionWrapper>
        <SectionWrapper title={"گالری تصاویر"} link={"/"}>
          <ImageGalleryGridSystem />
        </SectionWrapper>
        <SectionWrapper title={"برنامه های تابستانه"} link={"/"}>
          <ClassesCards />
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
};

export default Home;
