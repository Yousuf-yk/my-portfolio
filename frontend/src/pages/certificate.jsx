import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import cert1 from '../assets/certificates/certi1.jpeg';
import cert2 from '../assets/certificates/certi2.jpeg';
import cert3 from '../assets/certificates/certi3.jpeg';
import cert4 from '../assets/certificates/certi4.jpeg';

function Certificate() {
  const certificates = [cert1, cert2, cert3, cert4];

  return (
    <section id='certificates' className='mx-auto max-w-6xl px-6 py-24'>
      <div className='mb-12 text-center'>
        <p className='mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-600'>
          Achievements
        </p>

        <h2 className='text-4xl font-bold text-gray-900 md:text-5xl'>
          Certificates
        </h2>

        <p className='mx-auto mt-4 max-w-2xl text-gray-600'>
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
        className='pb-8'
      >
        {certificates.map((img, index) => (
          <SwiperSlide key={index}>
            <div className='flex justify-center'>
              <div className='w-full max-w-4xl overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl'>
                <img
                  src={img}
                  alt={`Certificate ${index + 1}`}
                  className='h-auto w-full rounded-2xl object-contain'
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Certificate;