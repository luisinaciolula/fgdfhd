// components/ImageSlider.js

"use client"; // Essencial, pois o slider é um componente interativo

import React from 'react';
import Image from 'next/image';

// Importe os componentes e módulos do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

// Importe os estilos do Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Array com os caminhos das suas imagens
// Certifique-se que estes caminhos estão corretos e as imagens existem na pasta 'public'
const images = [
  '/pagina30/finelo_appoverview_en_1-1.jpg', // Exemplo 1
  '/pagina30/finelo_appoverview_en_2.jpg', // Exemplo 2
  '/pagina30/finelo_appoverview_en_3.jpg', // Exemplo 3
  '/pagina30/finelo_appoverview_en_4.jpg', // Exemplo 4
  '/pagina30/finelo_appoverview_en_5.jpg', // Exemplo 5
];

export default function ImageSlider() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} style={{ width: '250px', height: '500px' }}>
            <Image
              src={src}
              alt={`Finelo on mobile - slide ${index + 1}`}
              width={250}
              height={500}
              className="rounded-2xl object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controles de navegação e paginação personalizados */}
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      {/* Bloco de Estilos Corrigido */}
      <style jsx global>{`
        .mySwiper {
          width: 100%;
          padding: 50px 0;
        }

        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s ease-in-out;
          opacity: 0.5;
        }

        .swiper-slide-active {
          transform: scale(1.15);
          z-index: 1;
          opacity: 1;
        }
        
        /* Estilização da Paginação (bolinhas) */
        .swiper-pagination {
            position: absolute;
            bottom: 20px !important;
            left: 50%;
            transform: translateX(-50%);
            width: auto !important;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #a8a8a8;
          opacity: 1;
          margin: 0 5px !important;
        }

        .swiper-pagination-bullet-active {
          background-color: #34d399; /* Cor verde Finelo */
        }
        
        /* Estilização das Setas de Navegação */
        .swiper-button-next,
        .swiper-button-prev {
            color: #ffffff; /* Cor branca para as setas */
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 50%;
            width: 40px;
            height: 40px;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
            font-size: 18px !important;
            font-weight: 800;
        }
      `}</style>
    </div>
  );
}
