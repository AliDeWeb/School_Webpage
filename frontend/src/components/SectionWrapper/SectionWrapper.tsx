// Types
import sectionWrapperPropsTypes from "./sectionWrapper.types.ts";

// React Router
import { Link } from "react-router-dom";

// React Icons
import { FaLessThan } from "react-icons/fa6";

const SectionWrapper = (props: sectionWrapperPropsTypes) => {
  return (
    <section className={"py-4 mb-80"}>
      <div className="container">
        <div>
          <div className={"flex items-center justify-between mb-6"}>
            <h3
              className={
                "text-2xl md:text-3xl font-danaBold relative before:content-[''] before:absolute before:right-0 before:left-0 before:-bottom-2 before:w-full before:h-[1.8px] before:bg-[#F2D0A4]"
              }
            >
              {props.title}
            </h3>
            <div>
              <Link
                to={props.link}
                className={
                  "flex items-center justify-center gap-1 font-dana text-sm text-[#f09f3e]"
                }
              >
                مشاهده همه
                <FaLessThan size={"0.6em"} />
              </Link>
            </div>
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
