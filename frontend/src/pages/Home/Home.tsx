import { useEffect } from "react";

// Types
import article from "../../types/articles";

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

// Axios
import { baseUrl, articles } from "../../configs/axios";

// React Query
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  useEffect(() => {
    AOS.init({ delay: 0, duration: 400, once: false });
  }, []);

  const { data: events, isLoading: isEventsLoading } = useQuery({
    queryKey: ["Events"],
    queryFn: async () => {
      const events = await articles.get("/events", {
        method: "GET",
      });

      return events?.data;
    },
    refetchInterval: 2 * 60 * 1000,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 2 * 60 * 1000,
  });
  const { data: news, isLoading: isNewsLoading } = useQuery({
    queryKey: ["News"],
    queryFn: async () => {
      const events = await articles.get("/news", {
        method: "GET",
      });

      return events?.data;
    },
    refetchInterval: 2 * 60 * 1000,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 2 * 60 * 1000,
  });

  return (
    <>
      <Header />
      <main>
        <Banner />
        {!isEventsLoading && !!events?.data?.events && (
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
              {events?.data?.events.map((el: article) => (
                <SwiperSlide key={el._id}>
                  <ImagesCards
                    title={el.title}
                    description={el.article}
                    link={`/article/${el._id}`}
                    img={`${baseUrl}/${el.image}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </SectionWrapper>
        )}

        {!isNewsLoading && !!news?.data?.news && (
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
              {news?.data?.news.map((el: article) => (
                <SwiperSlide key={el._id}>
                  <ImagesCards
                    title={el.title}
                    description={el.article}
                    link={`/article/${el._id}`}
                    img={`${baseUrl}/${el.image}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </SectionWrapper>
        )}

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
