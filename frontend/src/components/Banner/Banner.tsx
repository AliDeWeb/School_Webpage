// Imgs
import banner from "../../assets/imgs/banner.jpg";

// TypeWriter
import { Typewriter } from "react-simple-typewriter";

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
              <li>فضایی مناسب و دوستانه جهت تفریح و رقابت</li>
              <li>دارای بوفه، با مدیریت استاد ترید، آقای محمودی</li>
              <li>دارای کلاس ها درسی مجهز به بروزترین ابزار های آموزشی</li>
              <li>
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
