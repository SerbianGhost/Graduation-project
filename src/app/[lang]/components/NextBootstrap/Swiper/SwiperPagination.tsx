"use client"

import React, { useEffect, useRef } from "react";



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


const swiperFunction = (
  container:HTMLElement,
  classes:Array<string> = ['', ''],
  paginationButtons:NodeListOf<HTMLElement>,
  swiper:HTMLElement,
  swiperWrapper:HTMLElement,
  sliderLine:HTMLElement,
  slides:NodeListOf<HTMLElement>,
  pagination:HTMLElement,
  slideWidth:number,
  slideHeight:number,
  slidesMargin:number,
  startPosition:number,
  currentPosition:number,
  activePosition:number,
  exceededSlides: Array<HTMLElement>,
  swiperButtons:NodeListOf<HTMLElement>

  ) =>{

    buttonsCreate(classes,swiper, slides,pagination);    
    sliderResize(container,swiper,slideWidth,slideHeight, slidesMargin, swiperWrapper, sliderLine, slides);
    slidesPosition(swiper, slides, slideWidth, slidesMargin, startPosition, exceededSlides);
    paginationCreate(slides,pagination);
    paginationActive(pagination, paginationButtons, swiper, slides, slideWidth,slidesMargin,startPosition);
    paginationMove(pagination,paginationButtons,swiper,slides,slideWidth,slidesMargin,startPosition, activePosition, currentPosition)
    slidesMove(swiper, slides, swiperButtons, currentPosition,slideWidth,slidesMargin,pagination,paginationButtons,startPosition);
    sliderSwipe(pagination, paginationButtons, startPosition, swiper, slides,currentPosition, slideWidth,slidesMargin, sliderLine)
}


const buttonsCreate = (
  classes:Array<string> = ['', ''],
  swiper:HTMLElement,
  slides:NodeListOf<HTMLElement>,
  pagination:HTMLElement,
  ) =>{
    classes.forEach((className, index)=>{
    const button = document.createElement('button');
    button.classList.add(className);

    if(index === 0){
      swiper.appendChild(button);
    }
    else{
      swiper.prepend(button);
    }
  })
}

const sliderResize = (
  container:HTMLElement,
  swiper:HTMLElement,
  slideWidth:number,
  slideHeight:number,
  slidesMargin: number,
  swiperWrapper:HTMLElement,
  sliderLine:HTMLElement,
  slides:NodeListOf<HTMLElement>,

  ) =>{

  slideWidth = (swiper.querySelector('.swiper__slide') as HTMLElement | null)?.offsetWidth || 0;
  slideHeight = (swiper.querySelector('.swiper__slide') as HTMLElement | null)?.offsetHeight || 0;
  slidesMargin = (slideWidth * 9.375) / 100;
  swiperWrapper.style.width = `${((slideWidth + slidesMargin) * 3) - slidesMargin}px`
  sliderLine.style.width = `${(slideWidth + slidesMargin) * (slides.length - 1)}px`
  sliderLine.style.height = `${slideHeight}px`
  sliderLine.style.transform = `translateX(${-(slideWidth + slidesMargin) * Math.floor((slides.length - 1)/2)}px)`;
  
  
  function setSwiperWrapperWidth() {
    const windowWidth = window.innerWidth;
    
    if(windowWidth < 1200){
      swiperWrapper.style.width = `${((slideWidth + slidesMargin) * 2) - slidesMargin}px`;
      container.classList.remove('container');
      container.classList.add('container-fluid')
    }

      if(windowWidth < 690){
      swiperWrapper.style.width = `${slideWidth}px`;
    } 

     if( windowWidth > 1200) {
      swiperWrapper.style.width = `${((slideWidth + slidesMargin) * 3) - slidesMargin}px`;
      container.classList.remove('container-fluid');
      container.classList.add('container')
    } 
  }


  window.addEventListener('load', setSwiperWrapperWidth);

  window.addEventListener('resize', setSwiperWrapperWidth);

}




const slidesPosition = (
  swiper:HTMLElement,
  slides:NodeListOf<HTMLElement>,
  slideWidth:number,
  slidesMargin:number,
  startPosition:number,
  exceededSlides: Array<HTMLElement>
  ) =>{
    slideWidth = (swiper.querySelector('.swiper__slide') as HTMLElement | null)?.offsetWidth || 0;
    slidesMargin = (slideWidth * 9.375) / 100;
    startPosition = Math.floor((slides.length - 1)/2) * (slideWidth + slidesMargin) + (slideWidth + slidesMargin)
    slides.forEach((slide, index)=>{
      

      slide.style.transform = `translateX(${startPosition + (slideWidth + slidesMargin) * index}px)`;

           if((startPosition + (slideWidth + slidesMargin) * index) > (slides.length - 1) * (slideWidth + slidesMargin)){
            exceededSlides.push(slide);
           
      } 

    })
    exceededSlides.forEach((slide, index)=>{
      slide.style.transform = `translateX(${0 + (slideWidth + slidesMargin) * index}px)`;
    })
    exceededSlides = [];
}

const paginationCreate = (
  slides:NodeListOf<HTMLElement>,
  pagination:HTMLElement,
) =>{
  slides.forEach(slide=>{
    const li = document.createElement('li') as HTMLElement;
    pagination.appendChild(li);
  })
}
const paginationActive = (
  pagination:HTMLElement,
  paginationButtons:NodeListOf<HTMLElement>,
  swiper:HTMLElement,
  slides:NodeListOf<HTMLElement>,
  slideWidth:number,
  slidesMargin:number,
  startPosition:number,) =>{
  
    slideWidth = (swiper.querySelector('.swiper__slide') as HTMLElement | null)?.offsetWidth || 0;
    slidesMargin = (slideWidth * 9.375) / 100;
    startPosition = Math.floor((slides.length - 1)/2) * (slideWidth + slidesMargin) + (slideWidth + slidesMargin) 


    paginationButtons = pagination.querySelectorAll('li');
  
    slides.forEach((slide,index)=>{
      if(parseFloat(slides[index].style.transform.replace(/translateX\(|\)|px/g, '')) === startPosition ){
        if(paginationButtons[index]){
          paginationButtons[index].classList.add('active-pagination')
          
        }
      }
      else{
        paginationButtons[index].classList.remove('active-pagination')
      }
    })
}

const paginationMove = (
  pagination:HTMLElement,
  paginationButtons:NodeListOf<HTMLElement>,
  swiper:HTMLElement,
  slides:NodeListOf<HTMLElement>,
  slideWidth:number,
  slidesMargin:number,
  startPosition:number,
  activePosition:number,
  currentPosition:number,
  ) =>{
    paginationButtons = pagination.querySelectorAll('li');
    
    paginationButtons.forEach((button, buttonIndex)=>{
      button.addEventListener('click', ()=>{
        slideWidth = (swiper.querySelector('.swiper__slide') as HTMLElement | null)?.offsetWidth || 0;
        slidesMargin = (slideWidth * 9.375) / 100;
        startPosition = Math.floor((slides.length - 1)/2) * (slideWidth + slidesMargin) + (slideWidth + slidesMargin)

      slides.forEach((slide,slideIndex)=>{
        if(buttonIndex === slideIndex){
          activePosition = parseFloat(slide.style.transform.replace(/translateX\(|\)|px/g, ''));
          if(activePosition > startPosition){
            while(activePosition > startPosition){
              activePosition = activePosition - (slideWidth + slidesMargin);
              slidesLeft(slides,currentPosition, slideWidth,slidesMargin)
            }
          }
          else if(activePosition < startPosition){
            while(activePosition < startPosition){
              activePosition = activePosition + (slideWidth + slidesMargin);
              slidesRight(slides,currentPosition, slideWidth,slidesMargin)
            }
          }
        }
      })
      paginationActive(pagination, paginationButtons, swiper, slides, slideWidth,slidesMargin,startPosition);
      })
    })


}

const slidesMove = (
  swiper:HTMLElement,
  slides:NodeListOf<HTMLElement>,
  swiperButtons:NodeListOf<HTMLElement>,
  currentPosition:number,
  slideWidth:number,
  slidesMargin: number,
  pagination:HTMLElement,
  paginationButtons:NodeListOf<HTMLElement>,
  startPosition:number,
) =>{
  swiperButtons = swiper.querySelectorAll('button');

  swiperButtons.forEach(button=>{
    button.addEventListener('click',()=>{
      slideWidth = (swiper.querySelector('.swiper__slide') as HTMLElement | null)?.offsetWidth || 0;
      slidesMargin = (slideWidth * 9.375) / 100;
      if(button.classList.contains('prev')){
        slidesRight(slides,currentPosition, slideWidth,slidesMargin)
      }
      else{
        slidesLeft(slides,currentPosition, slideWidth,slidesMargin)
      }
      paginationActive(pagination, paginationButtons, swiper, slides, slideWidth,slidesMargin,startPosition)
    })
  })

}

const slidesLeft = (
  slides:NodeListOf<HTMLElement>,
  currentPosition:number,
  slideWidth:number,
  slidesMargin: number
) =>{
  slides.forEach(slide =>{
    currentPosition = parseFloat(slide.style.transform.replace(/translateX\(|\)|px/g, ''));
    slide.style.transform = `translateX(${currentPosition -(slideWidth + slidesMargin)}px)`;

    if(currentPosition === 0){
      slide.classList.remove('transition');
      slide.style.transform = `translateX(${(slideWidth + slidesMargin) * (slides.length -1) }px)`;
    }

    else if(currentPosition === ((slideWidth + slidesMargin) * (slides.length -1))){
      slide.classList.add('transition');
    }

  })
}

const slidesRight = (
  slides:NodeListOf<HTMLElement>,
  currentPosition:number,
  slideWidth:number,
  slidesMargin: number
) =>{
  slides.forEach(slide =>{
    currentPosition = parseFloat(slide.style.transform.replace(/translateX\(|\)|px/g, ''));
    slide.style.transform = `translateX(${currentPosition + (slideWidth + slidesMargin)}px)`;

    if(currentPosition === ((slideWidth + slidesMargin) * (slides.length -1))){
      slide.classList.remove('transition');
      slide.style.transform = `translateX(${0}px)`;
    }

    else if(currentPosition === 0){
      slide.classList.add('transition');
    }

  })
}

const sliderSwipe = (
  pagination:HTMLElement,
  paginationButtons:NodeListOf<HTMLElement>,
  startPosition:number,
  swiper:HTMLElement,
  slides:NodeListOf<HTMLElement>,
  currentPosition:number,
  slideWidth:number,
  slidesMargin: number,
  sliderLine:HTMLElement
) =>{
  slideWidth = (swiper.querySelector('.swiper__slide') as HTMLElement | null)?.offsetWidth || 0;
  slidesMargin = (slideWidth * 9.375) / 100;
  sliderLine.style.cursor = 'grab';
  let x:number = 0;
  let xStep:number = 0;


  const swipeMove = (event: MouseEvent | TouchEvent)=>{
    xStep = 'touches' in event ? event.touches[0].clientX : (event as MouseEvent).clientX || 0;

    if(xStep !== 0) {
      sliderLine.removeEventListener('mousemove', swipeMove);
      sliderLine.removeEventListener('touchmove', swipeMove)
      
      if(xStep - x < 0){
        slidesLeft(slides,currentPosition, slideWidth,slidesMargin)
      }

      else {
        slidesRight(slides,currentPosition, slideWidth,slidesMargin)
      }
      paginationActive(pagination, paginationButtons, swiper, slides, slideWidth,slidesMargin,startPosition);
    }

  }


  const slideMouseDown = (event: MouseEvent | TouchEvent) =>{
    x = 'touches' in event ? event.touches[0].clientX : (event as MouseEvent).clientX || 0;
    sliderLine.style.cursor = 'grabbing';

    sliderLine.addEventListener('mousemove', swipeMove);
    sliderLine.addEventListener('touchmove', swipeMove)

  }

  const slideMouseUp = () =>{
    sliderLine.style.cursor = 'grab';
  }


  sliderLine.addEventListener('mousedown', slideMouseDown);

  sliderLine.addEventListener('touchstart', slideMouseDown)

  sliderLine.addEventListener('mouseup',slideMouseUp)

}
