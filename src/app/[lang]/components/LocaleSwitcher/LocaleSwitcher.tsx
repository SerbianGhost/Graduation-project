'use client'

import NavbarLink from '../NextBootstrap/Navbar/Links/NavbarLink'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'


export default function LocaleSwitcher({languages}:{languages:any}) {
    
    const pathName = usePathname()
  useEffect(()=>{
    
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link:any)=>{
      
      if(link.href.match(pathName)){
        link.classList.add('active')
      }
      else{
        link.classList.remove('active')
      }

      

    })
  },[])
    const redirectedPathName = (locale: string) => {
      if (!pathName) return '/'
      const segments = pathName.split('/')
      segments[1] = locale
      return segments.join('/')
    }
  
    return (
      <>
        {Object.keys(languages.languages.locales).map((locale, index) => {
          return (
            
              
                <NavbarLink
              className='dropdown-item'
                key={locale}
                href={redirectedPathName(locale)}
              >
                { languages.languages.locales[locale] }
              </NavbarLink>
              
            
          )
        })} 
      </>
    )
  }