import { useEffect } from "react";

// Imgs
import banner from "../../assets/imgs/banner.jpg";

// TypeWriter
import { Typewriter } from "react-simple-typewriter";

// Aos Css
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      delay: 2000,
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={"py-4"}>
      <div>
        <div
          className={
            "w-full md:h-[500px] lg:h-[700px] overflow-hidden rounded-xl relative"
          }
        >
          {/*
                Content Container
          */}
          <div
            className={
              "absolute top-0 bottom-0 h-full right-8 md:right-24 z-10 flex flex-col justify-center"
            }
          >
            <h2
              className={"text-2xl md:text-5xl font-danaBold text-white mb-6"}
            >
              <Typewriter
                words={["دبیرستان شهید بابائی قزوین"]}
                typeSpeed={80}
                cursor={true}
              />
            </h2>
            <ul
              className={
                "text-white font-dana md:mr-8 text-sm md:text-base flex flex-col gap-1 child:line-clamp-1 child:pr-4"
              }
            >
              <li
                data-aos="fade-left"
                className="relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-0 before:my-auto before:size-2 before:bg-white before:rounded-full before:z-10"
              >
                فضایی مناسب و دوستانه جهت تفریح و رقابت
              </li>
              <li
                data-aos="fade-left"
                className="relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-0 before:my-auto before:size-2 before:bg-white before:rounded-full before:z-10"
              >
                دارای بوفه، با مدیریت استاد ترید، آقای محمودی
              </li>
              <li
                data-aos="fade-left"
                className="relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-0 before:my-auto before:size-2 before:bg-white before:rounded-full before:z-10"
              >
                دارای کلاس ها درسی مجهز به بروزترین ابزار های آموزشی
              </li>
              <li
                data-aos="fade-left"
                className="relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-0 before:my-auto before:size-2 before:bg-white before:rounded-full before:z-10"
              >
                زمین چمن مصنوعی و چندین امکانات ورزشی دیگر جهت رفاه دانش اموزان
              </li>
            </ul>
          </div>

          {/*
                Banner Container
          */}
          <div className={"size-full object-cover brightness-[40%]"}>
            <img src={banner} alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
