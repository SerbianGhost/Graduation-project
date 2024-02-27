'use client'
import { offcanvasBackdropToggle } from "./utils/offcanvasBackdropToggle";
import { btnsAnimation } from "./utils/btnsAnimation";
import { asideMenuClassToggle } from "./utils/asideMenuClassToggle";
import { menuAdaptiveWithWidth } from "./utils/menuAdaptiveWithWidth";
export default function NavbarToggle(){
    const menuToggle = () =>{
        const noScroll = document.querySelector('.wrap') as HTMLElement
        const togglers:NodeList = document.querySelectorAll('.navbar-toggler')
        const offcanvas = document.querySelector('.offcanvas') as HTMLElement;
        const container = document.querySelector('.container') as HTMLElement
        const  offcanvasBackdrop = document.querySelector('.offcanvas-backdrop') as HTMLElement;

            if(noScroll.classList.contains('no-scroll')){
                noScroll.classList.remove('no-scroll')
            }
            else{
                noScroll.classList.add('no-scroll')
            }
        
          offcanvasBackdropToggle(offcanvasBackdrop,container,offcanvas,togglers,noScroll)
          btnsAnimation(togglers);
          asideMenuClassToggle(offcanvas);
  
          window.addEventListener('resize',menuAdaptiveWithWidth);
      }
    return(
        <button onClick={menuToggle} className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler__line"></span>
        </button>
    )
}