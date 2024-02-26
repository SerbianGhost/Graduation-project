import slidesLeft from "./slidesLeft";
import slidesRight from "./slidesRight";
import paginationActive from "./paginationActive";

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

  export default sliderSwipe