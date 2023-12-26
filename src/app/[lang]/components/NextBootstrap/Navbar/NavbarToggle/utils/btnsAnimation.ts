export const btnsAnimation = (btns:NodeList) =>{
    btns.forEach(el=>{
      const btn = el as HTMLElement
      btn.classList.toggle('navbar-toggler--active')

    })
  }