import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { testimonialsData } from "./TestimonialsData";
import SectionContainer from "../SectionContainer";

export default function Testimonials() {
  return (
    <section className="overflow-hidden relative">
      <Image
        src="/images/mobile/leaf--to-right-big.webp"
        alt="leaf pattern"
        width={550}
        height={565}
        className="absolute top-0 -left-28"
      />
      <SectionContainer>
        <div className="flex flex-col items-center gap-10">
          <h2>Testimonials</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides
            // navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 13000, disableOnInteraction: false }}
            loop
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-swiper w-full"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col items-center gap-4 rounded-lg">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="rounded-full object-cover border border-tertiary shadow-md"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col items-center">
                    <h3 className="font-brandon-grotesque text-md font-medium text-center">
                      {testimonial.name} - {testimonial.profession}
                    </h3>
                    <h4 className="text-sm text-tertiary font-medium">
                      {testimonial.healingType}
                    </h4>
                  </div>
                  <p className="text-secondaryLight line-clamp-6 mb-8">
                    &quot;{testimonial.feedback}&quot;
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </SectionContainer>
    </section>
  );
}
