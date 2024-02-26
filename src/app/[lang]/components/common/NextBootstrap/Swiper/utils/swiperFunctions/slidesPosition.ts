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

  export default slidesPosition;