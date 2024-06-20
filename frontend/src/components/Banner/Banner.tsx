// Imgs
import banner from "../../assets/imgs/banner.jpg";

// TypeWriter
import { Typewriter } from "react-simple-typewriter";

// AOS
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 1000,
  duration: 1000,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

const Banner = () => {
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
            <h2 className={"text-lg md:text-5xl font-danaBold text-white mb-6"}>
              <Typewriter
                words={["دبیرستان شهید بابائی قزوین"]}
                typeSpeed={90}
                cursor={true}
              />
            </h2>
            <ul
              className={
                "text-white font-dana list-disc md:mr-8 text-sm md:text-base flex flex-col gap-1 child:line-clamp-1"
              }
            >
              <li data-aos="fade-left">
                فضایی مناسب و دوستانه جهت تفریح و رقابت
              </li>
              <li data-aos="fade-left">
                دارای بوفه، با مدیریت استاد ترید، آقای محمودی
              </li>
              <li data-aos="fade-left">
                دارای کلاس ها درسی مجهز به بروزترین ابزار های آموزشی
              </li>
              <li data-aos="fade-left">
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
