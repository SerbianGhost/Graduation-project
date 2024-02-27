import { offcanvasBackdropDelete } from "./offcanvasBackdropDelete";
import { asideMenuClassToggle } from "./asideMenuClassToggle";
import { btnsAnimation } from "./btnsAnimation";

export const menuAdaptiveWithWidth = () => {
    const noScroll = document.querySelector('.wrap') as HTMLElement
    const burgerBtns:NodeList = document.querySelectorAll('.navbar-toggler')
    const mobileMenu = document.querySelector('.offcanvas') as HTMLElement;
    const backdropOffcanvas = document.querySelector('.offcanvas-backdrop') as HTMLElement;

    const width = window.screen.width;
    if(width>991){
      offcanvasBackdropDelete(backdropOffcanvas,noScroll);
      asideMenuClassToggle(mobileMenu);
      btnsAnimation(burgerBtns)
      window.removeEventListener('resize', menuAdaptiveWithWidth)


      if(mobileMenu.classList.contains('show')){
        asideMenuClassToggle(mobileMenu)
        btnsAnimation(burgerBtns)
      }
    }

  }