import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import styles from "./styles.module.css";

import "swiper/css";
import "swiper/css/navigation";

function MainSwiper({ children, cat }) {
  const { customButton } = styles;
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 992) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1200) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className={`${customButton} el-${cat.id}-prev me-3`}>
        <i className="fa-solid fa-caret-left"></i>
      </div>
      <Swiper
        navigation={{
          prevEl: `.el-${cat.id}-prev`,
          nextEl: `.el-${cat.id}-next`,
        }}
        modules={[Navigation]}
        spaceBetween={20}
        className="p-3"
        style={{ width: "90%" }}
        slidesPerView={slidesPerView}
      >
        {cat.products.map((el) => (
          <SwiperSlide key={el.id}>
            {React.cloneElement(children, el)}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${customButton} el-${cat.id}-next ms-3`}>
        <i className="fa-solid fa-caret-right"></i>
      </div>
    </div>
  );
}

export default MainSwiper;
