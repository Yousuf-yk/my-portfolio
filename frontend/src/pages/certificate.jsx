import "../index.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import cert1 from "../assets/certificates/certi1.jpeg";
import cert2 from "../assets/certificates/certi2.jpeg";
import cert3 from "../assets/certificates/certi3.jpeg";
import cert4 from "../assets/certificates/certi4.jpeg";

function Certificate() {
  const certificates = [cert1, cert2, cert3, cert4];

  return (
    <section className="certificate-section section">
      <h2 className="certificate-section text-gradient">Certificates</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        speed={1200}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {certificates.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Certificate ${index + 1}`}
              className="certificate-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Certificate;