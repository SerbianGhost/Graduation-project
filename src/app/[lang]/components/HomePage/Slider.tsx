import React, { Key } from 'react';
import Container from '../common/NextBootstrap/Container/Container';
import { Swiper, SwiperWrapper,SwiperLine,SwiperSlide,SwiperPagination } from '../common/NextBootstrap/Swiper/utils/swiperConfig'

import { Locale } from '@/src/utils/i18n.config';
import { getDictionary } from '@/src/api/dictionary';
import { getPublic } from '@/src/api/getPublic'; 
import sortObject from '@/src/utils/sortObjects';

export default async function Slider({lang, teacher, partner}:{lang:Locale, teacher?:boolean, partner?:boolean}) {
  
  const { teachers, sliderTitles, partners} = await getDictionary(lang);
  const { teacherImages, partnerImages } = await getPublic("sliderImages");

  const trachersObj = sortObject(teachers);
  const partnersObj = sortObject(partners)

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
    {Object.keys(trachersObj).map((teacherName, index) => (
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
    {Object.keys(partnersObj).map((partner, index) => (
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