"use client"

import React, { useEffect, useRef } from "react";
import swiperFunction from "./utils/swiperFunctions/swiperFunction";


export default function SwiperPagination() {
  const paginationRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (paginationRef.current) {
      const swiper = paginationRef.current.closest('.swiper') as HTMLElement;
      const container = swiper.closest('.container') as HTMLElement;
  
      if(!swiper.querySelector('button')){
        const swiperWrapper = swiper.querySelector('.swiper__wrapper') as HTMLElement;
        const sliderLine = swiper.querySelector('.swiper__line') as HTMLElement
        const slides = swiper.querySelectorAll('.swiper__slide')  as NodeListOf<HTMLElement>;
        const pagination = swiper.querySelector('.swiper__pagination') as HTMLElement;
        let paginationButtons:NodeListOf<HTMLElement> = pagination.querySelectorAll('li');
        let slideWidth:number = 0;
        let slideHeight:number = 0;
        let slidesMargin:number = 0;
        let currentPosition:number = 0;
        let startPosition:number = 0;
        let activePosition:number = 0;
        let exceededSlides: Array<HTMLElement> = [];
        const btnsClasses = ['next', 'prev'];
        
        let swiperButtons:NodeListOf<HTMLElement> = swiper.querySelectorAll('button');


        swiperFunction(
          container,
          btnsClasses,
          paginationButtons,
          swiper,
          swiperWrapper,
          sliderLine,
          slides,
          pagination,
          slideWidth,
          slideHeight,
          slidesMargin,
          startPosition,
          currentPosition,
          activePosition,
          exceededSlides,
          swiperButtons
          )

      }

    }
  }, []);

  return (
    <ul className='swiper__pagination' ref={paginationRef}></ul>
  );
}


