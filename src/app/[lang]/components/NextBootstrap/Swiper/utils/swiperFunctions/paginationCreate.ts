const paginationCreate = (
    slides:NodeListOf<HTMLElement>,
    pagination:HTMLElement,
  ) =>{
    slides.forEach(slide=>{
      const li = document.createElement('li') as HTMLElement;
      pagination.appendChild(li);
    })
  }

  export default paginationCreate