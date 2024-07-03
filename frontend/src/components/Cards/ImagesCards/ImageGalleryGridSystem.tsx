import { useState } from "react";

// SwiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";

// Axios
import { baseUrl, gallery } from "../../../configs/axios.ts";

// React Query
import { useQuery } from "@tanstack/react-query";

// Mobile Detect
import MobileDetect from "mobile-detect";

// TippyJs
import Tippy from "@tippyjs/react";
import { followCursor } from "tippy.js";
import "tippy.js/dist/tippy.css";

const ImageGalleryGridSystem = () => {
  const [md] = useState(new MobileDetect(window.navigator.userAgent));

  const { data: galleryImgs, isLoading: isGalleryImgsLoading } = useQuery({
    queryKey: ["GalleryImgs"],
    queryFn: async () => {
      const galleryData = await gallery.get("/?limit=15", {
        method: "GET",
      });

      return galleryData?.data;
    },
    refetchInterval: 2 * 60 * 1000,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 2 * 60 * 1000,
  });

  return (
    <div>
      <Swiper
        style={{ width: "100%" }}
        effect={"coverflow"}
        loop={true}
        modules={[Autoplay, A11y, EffectCoverflow]}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className={"ltr"}
      >
        {!isGalleryImgsLoading &&
          !!galleryImgs?.data?.gallery.length &&
          galleryImgs?.data?.gallery.map((el: any) => (
            <SwiperSlide
              key={el._id}
              style={{
                width: "max-content",
                height: "300px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Tippy
                plugins={[followCursor]}
                followCursor={!md.mobile()}
                content={<span className={"font-dana"}>{el.title}</span>}
              >
                <img
                  className={"rounded-2xl block w-full"}
                  src={`${baseUrl}/${el.image}`}
                />
              </Tippy>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ImageGalleryGridSystem;
