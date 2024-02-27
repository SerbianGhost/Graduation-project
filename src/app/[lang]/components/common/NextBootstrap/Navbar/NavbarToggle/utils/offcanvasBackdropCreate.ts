import { asideMenuClassToggle } from "./asideMenuClassToggle";
import { btnsAnimation } from "./btnsAnimation";
import { offcanvasBackdropDelete } from "./offcanvasBackdropDelete";

export const offcanvasBackdropCreate = (wrap:HTMLElement, asideMenu:HTMLElement, btns:NodeList,noScroll:HTMLElement) =>{
    const NewoffcanvasBackdrop = document.createElement('div');
      NewoffcanvasBackdrop.classList.add('offcanvas-backdrop','fade','show');
      wrap.append(NewoffcanvasBackdrop)
      
      NewoffcanvasBackdrop.addEventListener('click',()=>{
      asideMenuClassToggle(asideMenu);
      btnsAnimation(btns);

    
        offcanvasBackdropDelete(NewoffcanvasBackdrop,noScroll);


     })
  }