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

  export default slidesLeft;