export const offcanvasBackdropDelete = (backrop:HTMLElement) =>{
    if(backrop !==null){
      const parent = backrop.parentNode as HTMLElement;
      parent.removeChild(backrop);
    }
  }