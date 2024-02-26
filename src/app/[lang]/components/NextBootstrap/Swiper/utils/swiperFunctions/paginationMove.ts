import paginationActive from "./paginationActive";
import slidesLeft from "./slidesLeft";
import slidesRight from "./slidesRight";
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

  export default paginationMove;