import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const images = [
  "/images/retreats/retreats-1.webp",
  "/images/retreats/retreats-2.webp",
  "/images/retreats/retreats-3.webp",
  "/images/retreats/retreats-4.webp",
  "/images/retreats/retreats-5.webp",
  "/images/retreats/retreats-6.webp",
  "/images/retreats/retreats-7.webp",
  "/images/retreats/retreats-8.webp",
  "/images/retreats/retreats-9.webp",
  "/images/retreats/retreats-10.webp",
  "/images/retreats/retreats-11.webp",
  "/images/retreats/retreats-12.webp",
  "/images/retreats/retreats-13.webp",
  "/images/retreats/retreats-14.webp",
];

export default function ImageSlider() {
  return (
    <section className="py-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={8}
        centeredSlides={true}
        slidesPerView={2}
        //   navigation
        //   pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <Image
                src={src}
                alt={`retreats ${index + 1}`}
                width={350}
                height={467}
                className="object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
