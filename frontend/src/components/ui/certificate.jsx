import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import cert1 from '../../assets/certificates/certi1.jpeg';
import cert2 from '../../assets/certificates/certi2.jpeg';
import cert3 from '../../assets/certificates/certi3.jpeg';
import cert4 from '../../assets/certificates/certi4.jpeg';
import cert5 from '../../assets/certificates/certi5.jpeg';
import cert6 from '../../assets/certificates/certi6.jpeg';

function Certificate() {
  const certificates = [cert1, cert2, cert3, cert4, cert5, cert6];

  return (
    <section
      id="certificates"
      className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-16 lg:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-100px] top-10 h-64 w-64 rounded-full bg-emerald-500/[0.06] blur-3xl" />

        <div className="absolute bottom-10 right-[-100px] h-72 w-72 rounded-full bg-sky-500/[0.05] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Achievements
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-main)] sm:text-4xl">
            Certificates
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
            Certifications and courses that reflect my continuous learning in
            web development and software engineering.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="!pb-6"
        >
          {certificates.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <div
                  className="
                    group
                    w-full
                    max-w-2xl
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[var(--border-color)]
                    bg-[var(--bg-card)]
                    p-3
                    shadow-md
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-emerald-300
                    hover:shadow-[0_15px_40px_rgba(16,185,129,0.12)]
                    sm:p-4
                  "
                >
                  {/* Certificate image */}
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={img}
                      alt={`Certificate ${index + 1}`}
                      className="
                        mx-auto
                        h-auto
                        max-h-[420px]
                        w-full
                        object-contain
                        transition-transform
                        duration-700
                        group-hover:scale-[1.015]
                      "
                    />
                  </div>

                  {/* Bottom info */}
                  <div className="mt-3 flex items-center justify-between px-1 sm:px-2">
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-main)]">
                        Certificate {index + 1}
                      </p>

                      <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                        Professional development
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 sm:text-xs">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider indicator */}
        <div className="mt-3 text-center text-xs text-[var(--text-secondary)]">
          6 certificates • Auto rotating
        </div>
      </div>
    </section>
  );
}

export default Certificate;