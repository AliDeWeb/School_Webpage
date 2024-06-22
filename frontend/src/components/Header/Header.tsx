import { useCallback, useState } from "react";

// Imgs
import sampadLogo from "../../assets/imgs/icons/logo.png";

// React Router
import { Link } from "react-router-dom";

// React Icons
import { CiLogin } from "react-icons/ci";
import { PiNewspaperClipping } from "react-icons/pi";
import { IoMenu, IoCloseCircleOutline, IoHomeOutline } from "react-icons/io5";
import {
  MdOutlineEventAvailable,
  MdOutlinePhotoCameraBack,
} from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuSetStatusHandler = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, [isMenuOpen]);

  return (
    <header className="py-4 shadow-md fixed top-0 left-0 right-0 w-full z-20 bg-[#fffcf0] h-[88px] flex items-center">
      {/*
          Hamburger Menu
      */}
      <div
        className={`${isMenuOpen ? "right-0" : "-right-[300px]"} transition-all fixed z-30 top-0 bottom-0 bg-[#fffcf0] rounded-l-xl min-h-[100dvh] w-[300px] shadow-xl py-5 px-4`}
      >
        <div>
          <div className={"flex items-center justify-between"}>
            <Link to={"/"} className={"flex items-center gap-1"}>
              <div className={"font-dana size-10"}>
                <img src={sampadLogo} alt="Sampad Logo" />
              </div>
              <span className={"w-max font-danaBold"}>
                دبیرستان شهید بابائی
              </span>
            </Link>
            <button onClick={menuSetStatusHandler}>
              <IoCloseCircleOutline size={"1.5em"} />
            </button>
          </div>
        </div>
        <hr className={"my-5"} />
        <div className={"pr-4"}>
          <nav>
            <ul className="flex flex-col text-sm gap-4 font-dana">
              <li className="relative before:content-[''] before:absolute before:right-0 before:left-0 before:bottom-0 before:w-0 before:h-[1.8px] before:bg-[#F2D0A4] hover:before:w-full before:transition-all">
                <Link to="/" className={"flex items-center gap-2"}>
                  <IoHomeOutline size={"1.2em"} />
                  صفحه اصلی
                </Link>
              </li>
              <li className="relative before:content-[''] before:absolute before:right-0 before:left-0 before:bottom-0 before:w-0 before:h-[1.8px] before:bg-[#F2D0A4] hover:before:w-full before:transition-all">
                <Link to="/" className={"flex items-center gap-2"}>
                  <MdOutlineEventAvailable size={"1.2em"} />
                  رویداد ها
                </Link>
              </li>
              <li className="relative before:content-[''] before:absolute before:right-0 before:left-0 before:bottom-0 before:w-0 before:h-[1.8px] before:bg-[#F2D0A4] hover:before:w-full before:transition-all">
                <Link to="/" className={"flex items-center gap-2"}>
                  <PiNewspaperClipping size={"1.3em"} />
                  اخبار
                </Link>
              </li>
              <li className="relative before:content-[''] before:absolute before:right-0 before:left-0 before:bottom-0 before:w-0 before:h-[1.8px] before:bg-[#F2D0A4] hover:before:w-full before:transition-all">
                <Link to="/" className={"flex items-center gap-2"}>
                  <MdOutlinePhotoCameraBack size={"1.2em"} />
                  گالری تصاویر
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={`${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"} transition-all w-full h-[100dvh] fixed z-20 top-0 bottom-0 left-0 right-0 bg-black/80 backdrop-blur-3xl`}
      ></div>

      {/*
          Header Content
      */}
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-12">
            <Link to={"/"} className="flex items-center gap-4">
              <div className="size-10 lg:size-14">
                <img
                  className="mix-blend-multiply"
                  src={sampadLogo}
                  alt="Sampad Logo"
                />
              </div>
              <h1 className="lg:text-xl font-danaBold">دبیرستان شهید بابائی</h1>
            </Link>
            <nav className={"hidden md:block"}>
              <ul className="flex items-center text-sm lg:text-base gap-3 lg:gap-4 font-dana">
                <li className="relative before:content-[''] before:absolute before:right-0 before:left-0 before:bottom-0 before:w-0 before:h-[1.8px] before:bg-[#F2D0A4] hover:before:w-full before:transition-all">
                  <Link to="/">صفحه اصلی</Link>
                </li>
                <li className="relative before:content-[''] before:absolute before:right-0 before:left-0 before:bottom-0 before:w-0 before:h-[1.8px] before:bg-[#F2D0A4] hover:before:w-full before:transition-all">
                  <Link to="/">رویداد ها</Link>
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
              to="/signup"
              className="btn flex items-center justify-center gap-1.5 text-sm lg:text-base"
            >
              <CiLogin size={"1.3em"} color={"#f1b163"} />
              ثبت نام
            </Link>
          </div>
          <div className="font-dana block md:hidden">
            <button onClick={menuSetStatusHandler}>
              <IoMenu size={"1.6em"} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
