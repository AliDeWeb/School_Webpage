// Imgs
import sampadLogo from "../../assets/imgs/icons/logo.jpg";

// React Router
import { Link } from "react-router-dom";

// React Icons
import { CiLogin } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <header className="py-4 shadow-md fixed top-0 left-0 right-0 w-full">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-4">
              <div className="size-10 lg:size-14">
                <img
                  className="mix-blend-multiply"
                  src={sampadLogo}
                  alt="Sampad Logo"
                />
              </div>
              <h1 className="lg:text-xl font-danaBold">دبیرستان شهید بابائی</h1>
            </div>
            <nav className={"hidden md:block"}>
              <ul className="flex items-center text-sm lg:text-base gap-3 lg:gap-4 font-dana">
                <li className="relative before:content-[''] before:absolute before:right-0 before:left-0 before:bottom-0 before:w-0 before:h-[1.8px] before:bg-[#F2D0A4] hover:before:w-full before:transition-all">
                  <Link to="/">صفحه اصلی</Link>
                </li>
                <li className="relative before:content-[''] before:absolute before:right-0 before:left-0 before:bottom-0 before:w-0 before:h-[1.8px] before:bg-[#F2D0A4] hover:before:w-full before:transition-all">
                  <Link to="/">رویدادها</Link>
                </li>
                <li className="relative before:content-[''] before:absolute before:right-0 before:left-0 before:bottom-0 before:w-0 before:h-[1.8px] before:bg-[#F2D0A4] hover:before:w-full before:transition-all">
                  <Link to="/">اخبار</Link>
                </li>
                <li className="relative before:content-[''] before:absolute before:right-0 before:left-0 before:bottom-0 before:w-0 before:h-[1.8px] before:bg-[#F2D0A4] hover:before:w-full before:transition-all">
                  <Link to="/">گالری تصاویر</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="font-dana hidden md:block">
            <Link
              to="/"
              className="btn flex items-center justify-center gap-1.5 text-sm lg:text-base"
            >
              <CiLogin size={"1.3em"} color={"#f1b163"} />
              ثبت نام
            </Link>
          </div>
          <div className="font-dana block md:hidden">
            <button>
              <IoMenu size={"1.6em"} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
