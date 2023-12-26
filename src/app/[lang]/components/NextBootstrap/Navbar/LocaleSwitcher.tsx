'use client'

import NavbarLink from './Links/NavbarLink'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { i18n } from '@/src/i18n.config'

export default function LocaleSwitcher() {
    const languages = ['ru', 'en', 'kz']
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
        {i18n.locales.map((locale, index) => {
          return (
            
              <NavbarLink
                key={locale}
                href={redirectedPathName(locale)}
              >
                { languages[index] }
              </NavbarLink>
            
          )
        })}
      </>
    )
  }