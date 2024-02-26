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

  export default slidesRight