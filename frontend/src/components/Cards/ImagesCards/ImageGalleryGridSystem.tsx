// SwiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";

const ImageGalleryGridSystem = () => {
  return (
    <div>
      <Swiper
        style={{ width: "100%" }}
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        dir={"rtl"}
      >
        <SwiperSlide
          style={{
            width: "max-content",
            height: "300px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            loading={"lazy"}
            className={"rounded-2xl block w-full"}
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "max-content",
            height: "300px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            loading={"lazy"}
            className={"rounded-2xl block w-full"}
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "max-content",
            height: "300px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            loading={"lazy"}
            className={"rounded-2xl block w-full"}
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "max-content",
            height: "300px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            loading={"lazy"}
            className={"rounded-2xl block w-full"}
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "max-content",
            height: "300px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            loading={"lazy"}
            className={"rounded-2xl block w-full"}
            src="https://swiperjs.com/demos/images/nature-5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "max-content",
            height: "300px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            loading={"lazy"}
            className={"rounded-2xl block w-full"}
            src="https://swiperjs.com/demos/images/nature-6.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "max-content",
            height: "300px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            loading={"lazy"}
            className={"rounded-2xl block w-full"}
            src="https://swiperjs.com/demos/images/nature-7.jpg"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "max-content",
            height: "300px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            loading={"lazy"}
            className={"rounded-2xl block w-full"}
            src="https://swiperjs.com/demos/images/nature-8.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageGalleryGridSystem;
