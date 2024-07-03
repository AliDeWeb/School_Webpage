// Components
import { Header, Footer } from "../../configs/layout";

// React Router
import { Link } from "react-router-dom";

// Imgs
import profileImg from "../../assets/imgs/icons/unknown-profile.svg";

// React Icons
import { FaLessThan } from "react-icons/fa6";

const Article = () => {
  return (
    <>
      <Header />
      <main className={"py-12"}>
        <div>
          <div className="container">
            <div className={"grid grid-cols-6 gap-6"}>
              <article className={"col-span-6 lg:col-span-4"}>
                <h1
                  className={"font-danaBold text-xl md:text-3xl line-clamp-2"}
                >
                  این تاتیل مقاله است
                </h1>
                <div className={"mt-4 flex items-center gap-2"}>
                  <div className={"size-14"}>
                    <img src={profileImg} alt="profile" />
                  </div>
                  <div className={"flex flex-col"}>
                    <span className={"font-dana text-base md:text-lg"}>
                      مهدی خدمتی
                    </span>
                    <span className={"font-dana text-xs md:text-sm"}>
                      مقاله نوشته شده در:
                    </span>
                  </div>
                </div>
                <div
                  className={
                    "mt-8 rounded-xl overflow-hidden shadow-lg w-full max-h-96"
                  }
                >
                  <img
                    className={"object-contain"}
                    src="https://media.istockphoto.com/id/185209990/photo/lots-of-bad-news.jpg?s=612x612&w=0&k=20&c=EUxBfwekP0nr2mZAhcychfI9Md44lpuXMcyC9Q1yHqM="
                    alt="Article-Img"
                  />
                </div>
                <div className={"mt-6"}>
                  <p className={"font-dana leading-10"}>
                    به گزارش اقتصاد آنلاین به نقل از گجت نیوز، مدارک دریافت وام
                    خودو 1403 نیز به مانند شرایط آن ممکن است از بانکی به بانک
                    دیگر متفاوت باشد. گرچه شرایط عمومی دریافت این تسهیلات در
                    بانک‌های دولتی نسبتا مشابه است، اما برخی از بانک‌های خصوصی
                    شرایط خاص دیگری را نیز برای دریافت این تسهیلات تعریف کرده
                    باشند. در زیر شرایط عمومی دریافت وام آورده شده است: سن
                    متقاضی باید بالای ۱۸ سال باشد. متقاضی نباید سابقه چک برگشتی
                    یا تسهیلات معوقه داشته باشد. برای افراد زیر ۵۰ سال وضعیت
                    نظام وظیفه باید مشخص شود. فرد باید مدارک اثبات‌کننده قصد خود
                    برای خرید خودرو را ارائه کند. متقاضی باید به تناسب شرایط
                    بانک، یک یا چند ضامن معتبر معرفی کند. متقاضی باید توانایی
                    خود برای بازپرداخت وام را با ارائه مدارکی مانند فیش حقوقی یا
                    مدارک مربوط به کسب‌وکار خود ثابت کند. ضامن یا ضامن‌ها نیز
                    باید در یک مرکز رسمی شاغل باشند یا در صورت انجام کار آزاد،
                    پروانه کسب‌وکار ارائه کنند. علاوه بر این‌ها و در تکمیل این
                    شرایط باید بدانید که عموم بانک‌ها دارای یک سقف مشخص برای
                    تسهیلات خرید خودرو هستند و بیشتر از آن میزان امکان پرداخت
                    کمک هزینه خرید خودرو را ندارند. همچنین در برخی از موارد،
                    افرادی که پیش‌تر وام خرید خودرو دریافت کرده باشند امکان
                    دریافت مجدد آن را ندارند. از سویی، در برخی از بانک‌ها، افراد
                    برای دریافت وام خرید خودرو ناگزیر به سپرده‌گذاری هستند. برای
                    مثال فرد می‌تواند برای دریافت تسهیلات مدنظر خود، مبلغی که
                    بانک اعلام می‌کند را برای ۲ تا ۶ ماه در بانک سپرده‌گذاری کند
                    و سپس تسهیلات را دریافت کند. برخی بانک‌ها در این حالت امکانی
                    را برای افزایش مبلغ تسهیلات با افزایش مدت زمان سپرده‌گذاری
                    تعریف کرده‌اند. مثلا بانک ملت به ازای هر ۴ ماه سپرده‌گذاری
                    افراد در حساب خود، تا یک برابر مبلغ سپرده به کمک هزینه خرید
                    خودرو می‌افزاید. مدارک دریافت وام خودو نیز به مانند شرایط آن
                    ممکن است از بانکی به بانک دیگر متفاوت باشد، اما آنچه که بین
                    تمام این بانک‌ها مشترک است، مدارک هویتی و شغلی فرد متقاضی و
                    ضامن و البته مدارک اثبات‌کننده قصد متقاضی برای خرید خودرو
                    است. فهرست این موارد را در ادامه بخوانید: اصل و کپی کارت ملی
                    و شناسنامه متقاضی و ضامن عکس پرسنلی متقاضی مدرک نظام وظیفه
                    برای آقایان زیر ۵۰ سال پیش فاکتور تهیه ماشین و اسناد مربوط
                    به مالکیت خودرو مانند کارت آن کپی و اصل گواهی اشتغال و فیش
                    حقوقی ضامن یا پروانه کسب‌وکار برای دارندگان شغل آزاد گواهی
                    محل سکونت و گواهی ثنا مدارک مربوط به سپرده‌گذاری در صورت
                    نیاز دسته چک صیادی در صورت نیاز
                  </p>
                </div>
              </article>
              <aside className={"col-span-6 lg:col-span-2 lg:mt-0 mt-6"}>
                <div className={"sticky top-[120px]"}>
                  <div className={"flex flex-col gap-8"}>
                    <div
                      className={
                        "border border-solid border-[#f1b163]/30 py-3 px-4 rounded-2xl"
                      }
                    >
                      <div
                        className={
                          "font-dana flex items-center justify-between"
                        }
                      >
                        <h3 className={"text-lg"}>اخرین تصاویر</h3>
                        <Link
                          to="/"
                          className={
                            "flex items-center justify-center gap-1 font-dana text-sm text-[#f09f3e]"
                          }
                        >
                          مشاهده همه
                          <FaLessThan size={"0.6em"} />
                        </Link>
                      </div>
                      <div
                        className={
                          "flex flex-col gap-2 mt-6 divide-y divide-solid divide-gray-400/20"
                        }
                      >
                        <div className={"flex items-center gap-2 p-2"}>
                          <div
                            className={"overflow-hidden rounded-full size-12"}
                          >
                            <img
                              src="https://cdn.mashreghnews.ir/d/2024/07/03/2/4174171.jpg?ts=1720011718000"
                              alt="img"
                            />
                          </div>
                          <div>
                            <h4
                              className={
                                "font-dana line-clamp-1 scale-100 hover:scale-105 hover:pr-2 transition-all"
                              }
                            >
                              <Link to={"/"}>شبی در مدرسه!</Link>
                            </h4>
                            <p className={"text-sm font-dana line-clamp-1"}>
                              شبی در مدرسه با حضور اقایان احدی، خسروی و...
                            </p>
                          </div>
                        </div>
                        <div className={"flex items-center gap-2 p-2"}>
                          <div
                            className={"overflow-hidden rounded-full size-12"}
                          >
                            <img
                              src="https://cdn.mashreghnews.ir/d/2024/07/03/2/4174171.jpg?ts=1720011718000"
                              alt="img"
                            />
                          </div>
                          <div>
                            <h4
                              className={
                                "font-dana line-clamp-1 scale-100 hover:scale-105 hover:pr-2 transition-all"
                              }
                            >
                              <Link to={"/"}>شبی در مدرسه!</Link>
                            </h4>
                            <p className={"text-sm font-dana line-clamp-1"}>
                              شبی در مدرسه با حضور اقایان احدی، خسروی و...
                            </p>
                          </div>
                        </div>
                        <div className={"flex items-center gap-2 p-2"}>
                          <div
                            className={"overflow-hidden rounded-full size-12"}
                          >
                            <img
                              src="https://cdn.mashreghnews.ir/d/2024/07/03/2/4174171.jpg?ts=1720011718000"
                              alt="img"
                            />
                          </div>
                          <div>
                            <h4
                              className={
                                "font-dana line-clamp-1 scale-100 hover:scale-105 hover:pr-2 transition-all"
                              }
                            >
                              <Link to={"/"}>شبی در مدرسه!</Link>
                            </h4>
                            <p className={"text-sm font-dana line-clamp-1"}>
                              شبی در مدرسه با حضور اقایان احدی، خسروی و...
                            </p>
                          </div>
                        </div>
                        <div className={"flex items-center gap-2 p-2"}>
                          <div
                            className={"overflow-hidden rounded-full size-12"}
                          >
                            <img
                              src="https://cdn.mashreghnews.ir/d/2024/07/03/2/4174171.jpg?ts=1720011718000"
                              alt="img"
                            />
                          </div>
                          <div>
                            <h4
                              className={
                                "font-dana line-clamp-1 scale-100 hover:scale-105 hover:pr-2 transition-all"
                              }
                            >
                              <Link to={"/"}>شبی در مدرسه!</Link>
                            </h4>
                            <p className={"text-sm font-dana line-clamp-1"}>
                              شبی در مدرسه با حضور اقایان احدی، خسروی و...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        "border border-solid border-[#f1b163]/30 py-3 px-4 rounded-2xl"
                      }
                    >
                      <div
                        className={
                          "font-dana flex items-center justify-between"
                        }
                      >
                        <h3 className={"text-lg"}>اخرین اخبار</h3>
                        <Link
                          to="/"
                          className={
                            "flex items-center justify-center gap-1 font-dana text-sm text-[#f09f3e]"
                          }
                        >
                          مشاهده همه
                          <FaLessThan size={"0.6em"} />
                        </Link>
                      </div>
                      <div
                        className={
                          "flex flex-col gap-2 mt-6 divide-y divide-solid divide-gray-400/20"
                        }
                      >
                        <div className={"flex items-center gap-2 p-2"}>
                          <div
                            className={"overflow-hidden rounded-full size-12"}
                          >
                            <img
                              src="https://cdn.mashreghnews.ir/d/2024/07/03/2/4174171.jpg?ts=1720011718000"
                              alt="img"
                            />
                          </div>
                          <div>
                            <h4
                              className={
                                "font-dana line-clamp-1 scale-100 hover:scale-105 hover:pr-2 transition-all"
                              }
                            >
                              <Link to={"/"}>شبی در مدرسه!</Link>
                            </h4>
                            <p className={"text-sm font-dana line-clamp-1"}>
                              شبی در مدرسه با حضور اقایان احدی، خسروی و...
                            </p>
                          </div>
                        </div>
                        <div className={"flex items-center gap-2 p-2"}>
                          <div
                            className={"overflow-hidden rounded-full size-12"}
                          >
                            <img
                              src="https://cdn.mashreghnews.ir/d/2024/07/03/2/4174171.jpg?ts=1720011718000"
                              alt="img"
                            />
                          </div>
                          <div>
                            <h4
                              className={
                                "font-dana line-clamp-1 scale-100 hover:scale-105 hover:pr-2 transition-all"
                              }
                            >
                              <Link to={"/"}>شبی در مدرسه!</Link>
                            </h4>
                            <p className={"text-sm font-dana line-clamp-1"}>
                              شبی در مدرسه با حضور اقایان احدی، خسروی و...
                            </p>
                          </div>
                        </div>
                        <div className={"flex items-center gap-2 p-2"}>
                          <div
                            className={"overflow-hidden rounded-full size-12"}
                          >
                            <img
                              src="https://cdn.mashreghnews.ir/d/2024/07/03/2/4174171.jpg?ts=1720011718000"
                              alt="img"
                            />
                          </div>
                          <div>
                            <h4
                              className={
                                "font-dana line-clamp-1 scale-100 hover:scale-105 hover:pr-2 transition-all"
                              }
                            >
                              <Link to={"/"}>شبی در مدرسه!</Link>
                            </h4>
                            <p className={"text-sm font-dana line-clamp-1"}>
                              شبی در مدرسه با حضور اقایان احدی، خسروی و...
                            </p>
                          </div>
                        </div>
                        <div className={"flex items-center gap-2 p-2"}>
                          <div
                            className={"overflow-hidden rounded-full size-12"}
                          >
                            <img
                              src="https://cdn.mashreghnews.ir/d/2024/07/03/2/4174171.jpg?ts=1720011718000"
                              alt="img"
                            />
                          </div>
                          <div>
                            <h4
                              className={
                                "font-dana line-clamp-1 scale-100 hover:scale-105 hover:pr-2 transition-all"
                              }
                            >
                              <Link to={"/"}>شبی در مدرسه!</Link>
                            </h4>
                            <p className={"text-sm font-dana line-clamp-1"}>
                              شبی در مدرسه با حضور اقایان احدی، خسروی و...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Article;
