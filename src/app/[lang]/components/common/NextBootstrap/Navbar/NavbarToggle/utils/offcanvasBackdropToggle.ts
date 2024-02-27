import { offcanvasBackdropDelete } from "./offcanvasBackdropDelete";
import { offcanvasBackdropCreate } from "./offcanvasBackdropCreate";

export const offcanvasBackdropToggle = (backrop:HTMLElement, wrap:HTMLElement, asideMenu:HTMLElement, btns:NodeList,noScroll:HTMLElement) => {
    if(backrop !==null){
      offcanvasBackdropDelete(backrop,noScroll)
      
    }
    else{
      offcanvasBackdropCreate(wrap,asideMenu,btns,noScroll)
    }
  }
