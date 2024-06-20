import { useEffect } from "react";

// Types
import MemoryCardPropsTypes from "./MemoryCard.types.ts";

// React Router
import { Link } from "react-router-dom";

// Aos Css
import AOS from "aos";
import "aos/dist/aos.css";

const MemoryCard = (props: MemoryCardPropsTypes) => {
  useEffect(() => {
    AOS.init({ delay: 0, duration: 400, once: false });
  }, []);

  return (
    <div
      data-aos={`fade-${props.fadeEffect}`}
      className={
        "col-span-2 h-40 w-full rounded-xl overflow-hidden object-cover relative"
      }
    >
      <Link to={props.link} className={"size-full"}>
        <img src={props.img} alt="img" className={"brightness-[40%]"} />

        <span
          className={
            " font-danaBold text-3xl sm:text-4xl md:text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
          }
        >
          {props.year}
        </span>
      </Link>
    </div>
  );
};

export default MemoryCard;
