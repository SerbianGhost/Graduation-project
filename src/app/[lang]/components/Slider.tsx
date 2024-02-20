import React, { Key } from 'react';
import Container from './NextBootstrap/Container/Container';
import Swiper from './NextBootstrap/Swiper/Swiper';
import SwiperWrapper from './NextBootstrap/Swiper/SwiperWrapper';
import SwiperLine from './NextBootstrap/Swiper/SwiperLine';
import SwiperSlide from './NextBootstrap/Swiper/SwiperSlide';
import SwiperPagination from './NextBootstrap/Swiper/SwiperPagination';

import { Locale } from '@/src/i18n.config';
import { getDictionary } from '@/src/api/dictionary';
import { getPublic } from '@/src/api/getPublic'; 

export default async function Slider({lang, teacher, partner}:{lang:Locale, teacher?:boolean, partner?:boolean}) {
  
  const { teachers, sliderTitles, partners} = await getDictionary(lang);
  const { teacherImages, partnerImages } = await getPublic("sliderImages");
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
    {Object.keys(teachers).map((teacherName, index) => (
  <SwiperSlide key={index}>
    <section className="custom-card">
      <img src={teacherImages[teacherName]} alt="teacher" className="custom-card__image" /> 
      <h5 className="custom-card__title text-center">{teachers[teacherName]}</h5>
    </section>
  </SwiperSlide>
))}

  </>
)}

   {partner && (
  <>
    {Object.keys(partners).map((partner, index) => (
      <SwiperSlide key={index}>
        <section className="custom-card">
            <img src={partnerImages[partner]} alt="" className="custom-card__image" /> 
          <h5 className="custom-card__title text-center">{partners[partner]}</h5>
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