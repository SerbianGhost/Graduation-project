export const offcanvasBackdropDelete = (backrop:HTMLElement,noScroll:HTMLElement) =>{
    if(backrop !==null){
      const parent = backrop.parentNode as HTMLElement;
      parent.removeChild(backrop);
      noScroll.classList.remove('no-scroll');
    }
  }