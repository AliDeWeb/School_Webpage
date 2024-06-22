import { useEffect } from "react";

// Aos Css
import AOS from "aos";
import "aos/dist/aos.css";

const ImageGalleryGridSystem = () => {
  useEffect(() => {
    AOS.init({ delay: 400, duration: 400, once: false });
  }, []);

  return (
    <div
      className={
        "photo-gallery-grid-container child:overflow-hidden child:rounded-2xl child:shadow-md child:object-cover"
      }
    >
      <div data-aos="fade-up" className="grid-pic-1">
        <img
          src="https://financialtribune.com/sites/default/files/7_1_mi_school_980_2.jpg"
          alt="img"
          loading={"lazy"}
          className=""
        />
      </div>
      <div data-aos="fade-left" className="grid-pic-2">
        <img
          src="https://financialtribune.com/sites/default/files/7_1_mi_school_980_2.jpg"
          alt="img"
          loading={"lazy"}
          className=""
        />
      </div>
      <div data-aos="fade-down" className="grid-pic-3">
        <img
          src="https://financialtribune.com/sites/default/files/7_1_mi_school_980_2.jpg"
          alt="img"
          loading={"lazy"}
          className=""
        />
      </div>
      <div data-aos="zoom-in" className="grid-pic-4">
        <img
          src="https://financialtribune.com/sites/default/files/7_1_mi_school_980_2.jpg"
          alt="img"
          loading={"lazy"}
          className=""
        />
      </div>
    </div>
  );
};

export default ImageGalleryGridSystem;
