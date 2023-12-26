export const asideMenuClassToggle = (asideMenu:HTMLElement) =>{
    menuAnim(asideMenu)
    asideMenu.classList.toggle('show');
  }

  const menuAnim = (asideMenu:HTMLElement) =>{
    menuAddAnim(asideMenu);
    setTimeout(menuRemoveAnim,300,asideMenu);
  }

  const menuAddAnim = (asideMenu:HTMLElement) =>{
    asideMenu.classList.add('offcanvas-anim');
  }

 export const menuRemoveAnim = (asideMenu:HTMLElement) =>{
    asideMenu.classList.remove('offcanvas-anim')
  }