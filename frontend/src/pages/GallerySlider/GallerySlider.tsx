import { useEffect } from "react";

// SwiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// React Query
import { useQuery } from "@tanstack/react-query";

// Axios
import { baseUrl, gallery } from "../../configs/axios";

// Ant Design
import { notification } from "antd";

const GallerySlider = () => {
  useEffect(() => {
    notification.info({
      duration: 4,
      message: "راهنما",
      description: "با موس بر روی تصاویر کلیک کرده و به بالا یا پایین بکشید.",
    });
  }, []);

  const { data: galleryImgs, isLoading: isGalleryImgsLoading } = useQuery({
    queryKey: ["GalleryImgs?limit=80"],
    queryFn: async () => {
      const galleryData = await gallery.get("/?limit=80", {
        method: "GET",
      });

      return galleryData?.data;
    },
    refetchInterval: 60 * 60 * 1000,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 60 * 60 * 1000,
  });

  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={
        "w-screen h-[100dvh] -mt-20 flex items-center justify-center bg-black"
      }
    >
      {!isGalleryImgsLoading &&
        !!galleryImgs?.data?.gallery?.length &&
        galleryImgs.data.gallery.map((el: any) => (
          <SwiperSlide key={el._id}>
            <div
              className={
                "w-screen h-[100dvh] flex items-center justify-center text-white hover:cursor-grab active:cursor-grabbing"
              }
            >
              <div className={"h-[90dvh] w-[80%] relative"}>
                <img
                  src={`${baseUrl}/${el.image}`}
                  alt="img"
                  className={"object-contain overflow-hidden rounded-2xl"}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default GallerySlider;
