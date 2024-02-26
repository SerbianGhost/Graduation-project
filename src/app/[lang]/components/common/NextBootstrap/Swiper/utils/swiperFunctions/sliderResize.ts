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

export default sliderResize