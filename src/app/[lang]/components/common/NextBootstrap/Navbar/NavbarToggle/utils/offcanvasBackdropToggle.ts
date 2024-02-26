import { offcanvasBackdropDelete } from "./offcanvasBackdropDelete";
import { offcanvasBackdropCreate } from "./offcanvasBackdropCreate";

export const offcanvasBackdropToggle = (backrop:HTMLElement, wrap:HTMLElement, asideMenu:HTMLElement, btns:NodeList) => {
    if(backrop !==null){
      offcanvasBackdropDelete(backrop)
    }
    else{
      offcanvasBackdropCreate(wrap,asideMenu,btns)
    }
  }
