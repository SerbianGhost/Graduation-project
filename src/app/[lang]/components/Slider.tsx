import React, { Key } from 'react';
import Container from './NextBootstrap/Container/Container';
import Swiper from './NextBootstrap/Swiper/Swiper';
import SwiperWrapper from './NextBootstrap/Swiper/SwiperWrapper';
import SwiperLine from './NextBootstrap/Swiper/SwiperLine';
import SwiperSlide from './NextBootstrap/Swiper/SwiperSlide';
import SwiperPagination from './NextBootstrap/Swiper/SwiperPagination';

import { Locale } from '@/src/i18n.config';
import { getDictionary } from '@/src/lib/dictionary';

export default async function Slider({lang, teacher, partner}:{lang:Locale, teacher?:boolean, partner?:boolean}) {
  const images = [
    [
      'https://miras.edu.kz/collegelanding/img/people/emeshova.jpg',
      'https://miras.edu.kz/collegelanding/img/people/jekeeva.jpg',
      'https://miras.edu.kz/collegelanding/img/people/kerher.jpg',
      'https://miras.edu.kz/collegelanding/img/people/mahalkizi.jpg',
      'https://miras.edu.kz/collegelanding/img/people/medovshikova.jpg',
      'https://miras.edu.kz/collegelanding/img/people/minbaeva.jpg',
      'https://miras.edu.kz/collegelanding/img/people/raiimbekova.jpg',
      'https://miras.edu.kz/collegelanding/img/people/sharapova.jpg',
      'https://miras.edu.kz/collegelanding/img/people/spasova.jpg'
    ],
    [
      'https://miras.edu.kz/collegelanding/img/clients/cop6.jpg',
      'https://miras.edu.kz/collegelanding/img/clients/kaztoken1.png',
      'https://miras.edu.kz/collegelanding/img/clients/canvas.jpg',
      'https://miras.edu.kz/collegelanding/img/clients/rixos.jpg',
      'https://miras.edu.kz/collegelanding/img/clients/prestige.jpg',
      'https://miras.edu.kz/collegelanding/img/clients/liam.jpg',
      'https://miras.edu.kz/collegelanding/img/clients/magnum.jpg',
      'https://miras.edu.kz/collegelanding/img/clients/cesna.png',
      'https://miras.edu.kz/collegelanding/img/clients/firkan.png',
      'https://miras.edu.kz/collegelanding/img/clients/buisnesssport.jpg',
      'https://miras.edu.kz/collegelanding/img/clients/exelsia.jpg',
      'https://miras.edu.kz/collegelanding/img/clients/zardeli.png',
      'https://miras.edu.kz/collegelanding/img/clients/gauhar.png',
      'https://miras.edu.kz/collegelanding/img/clients/skynet.png',
      'https://miras.edu.kz/collegelanding/img/clients/petro.jpg',
      'https://miras.edu.kz/collegelanding/img/clients/kassa.png'
    ]
  ]
  const { teachers, sliderTitles, partners } = await getDictionary(lang)
  let sliderTitle = teacher ? 'teachers' : 'partners';
  let i = teacher? 0 : 1;
  return (
    <div className="slider">
      <Container>
      {teacher &&(
        <>
           <h3 className='text-center'>{sliderTitles.teachers}</h3>
        </>
      )}
      {partner &&(
        <>
           <h3 className='text-center'>{sliderTitles.partners}</h3>
        </>
      )}
        <Swiper>
          <SwiperWrapper>
            <SwiperLine>
       
            {teacher && (
  <>
    {Object.values(teachers).map((value, index) => (
      <SwiperSlide key={index}>
        <section className="custom-card">
          <img src={images[i][index]} alt="" className="custom-card__image" />
          <h5 className="custom-card__title text-center">{value}</h5>
        </section>
      </SwiperSlide>
    ))}
  </>
)}

{partner && (
  <>
    {Object.values(partners).map((value, index) => (
      <SwiperSlide key={index}>
        <section className="custom-card">
          <img src={images[i][index]} alt="" className="custom-card__image" />
          <h5 className="custom-card__title text-center">{value}</h5>
        </section>
      </SwiperSlide>
    ))}
  </>
)}


            </SwiperLine>
          </SwiperWrapper>
          <SwiperPagination/>
        </Swiper>
      </Container>
    </div>
  );
}