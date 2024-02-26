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

  export default paginationActive