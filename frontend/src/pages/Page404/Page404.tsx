// Components
import { Header } from "../../configs/layout.ts";

// React Router
import { Link } from "react-router-dom";

// Imgs
import img404 from "../../assets/imgs/icons/404-not-found.svg";

const Page404 = () => {
  return (
    <div className={"h-[100dvh] flex justify-center items-center"}>
      <Header />
      <div className={"flex flex-col gap-4 items-center"}>
        <div className={"w-[330px] sm:w-[400px] md:w-[550px]"}>
          <img src={img404} alt="404" />
        </div>
        <p className={"font-dana text-center sm:text-xl"}>
          با عرض پوزش، صفحه درخواستی شما یافت نشد!
        </p>
        <Link className={"font-dana btn"} to={"/"}>
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default Page404;
