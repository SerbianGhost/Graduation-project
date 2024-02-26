import slidesRight from "./slidesRight";
import slidesLeft from "./slidesLeft";
import paginationActive from "./paginationActive";

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

  export default slidesMove