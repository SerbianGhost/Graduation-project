import buttonsCreate from "./buttonsCreate";
import sliderResize from "./sliderResize";
import slidesPosition from "./slidesPosition";
import paginationCreate from "./paginationCreate";
import paginationActive from "./paginationActive";
import paginationMove from "./paginationMove";
import slidesMove from "./slidesMove";
import sliderSwipe from "./sliderSwipe";
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

  export default swiperFunction;