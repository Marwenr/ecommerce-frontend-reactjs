import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import styles from "./styles.module.css";

import "swiper/css";
import "swiper/css/navigation";
import { Container } from "react-bootstrap";

function MainSwiper() {
  const {customButton} = styles;
  return (
    <Container className="d-flex justify-content-between align-items-center">
      <div className={`${customButton} el-1-prev me-3`}>
        <i class="fa-solid fa-caret-left"></i>
      </div>
      <Swiper
        navigation={{
          prevEl: `.el-1-prev`,
          nextEl: `.el-1-next`,
        }}
        modules={[Navigation]}
        spaceBetween={0}
        className="mySwiper"
        style={{ width: "80%" }}
        slidesPerView={1}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <div className={`${customButton} el-1-next ms-3`}>
        <i class="fa-solid fa-caret-right"></i>
      </div>
    </Container>
  );
}

export default MainSwiper;
