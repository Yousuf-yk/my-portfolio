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
    <section className="relative overflow-hidden px-6 py-5 sm:px-10 lg:px-16">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Achievements
          </p>

          <h2 className="text-4xl font-bold text-[var(--text-main)] md:text-5xl">
            Certificates
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Certifications and course completions that reflect my continuous
            learning in web development and software engineering.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          speed={900}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="pb-8"
        >
          {certificates.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <div className="group w-full max-w-4xl overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={img}
                      alt={`Certificate ${index + 1}`}
                      className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between px-2">
                    <p className="text-sm font-medium text-[var(--text-main)]">
                      Certificate {index + 1}
                    </p>

                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Certificate;