// SwiperJs
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const GallerySlider = () => {
  return (
    <div
      className={
        "h-[100dvh] w-full bg-black -mt-20 flex items-center justify-center hover:cursor-grab active:cursor-grabbing"
      }
    >
      <div className="container">
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div
              className={
                "w-[80%] mx-auto flex items-center overflow-hidden rounded-2xl shadow-lg shadow-blue-200/30 my-6"
              }
            >
              <img
                src="https://engage-education.com/wp-content/uploads/2022/08/Private-School.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={
                "w-[80%] mx-auto flex items-center overflow-hidden rounded-2xl shadow-lg shadow-blue-200/30 my-6"
              }
            >
              <img
                src="https://engage-education.com/wp-content/uploads/2022/08/Private-School.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={
                "w-[80%] mx-auto flex items-center overflow-hidden rounded-2xl shadow-lg shadow-blue-200/30 my-6"
              }
            >
              <img
                src="https://engage-education.com/wp-content/uploads/2022/08/Private-School.jpg"
                alt="img"
                className={"object-cover"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={
                "w-[80%] max-h-[600px] mx-auto flex items-center overflow-hidden rounded-2xl shadow-lg shadow-blue-200/30 my-6"
              }
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default GallerySlider;
