const collapse = (e: any) => {
    const btn = e.target;
    const accordionHeader = btn.parentNode;
    const accordionItem = accordionHeader.parentNode;
    const accordion = accordionItem.parentNode;
    const btns = accordion.querySelectorAll('.accordion-button');
    const accordionBody = accordionHeader.nextElementSibling;
  
    btns.forEach((el: any) =>{
      if(el !== btn){
        el.classList.add('collapsed');
        const elBody = el.parentNode.nextElementSibling;

        elBody.style.maxHeight = null;

      }
    })
    if (accordionBody.style.maxHeight) {
      accordionBody.style.maxHeight = null;
    } else {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
    }
  
    btn.classList.toggle('collapsed');
  
  };

  export default collapse;