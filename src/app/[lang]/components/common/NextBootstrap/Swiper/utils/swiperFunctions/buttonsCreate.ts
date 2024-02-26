
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

  export default buttonsCreate;