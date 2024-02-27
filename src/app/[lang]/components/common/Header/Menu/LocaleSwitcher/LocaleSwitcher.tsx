'use client'

import NavbarLink from '../../../NextBootstrap/Navbar/Links/NavbarLink';
import sortObject from '@/src/utils/sortObjects';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';


export default function LocaleSwitcher({languages}:{languages:any}) {
  
    const [activeLink,setActiveLink] = useState('')
    const pathName = usePathname()
  useEffect(()=>{

    setActiveLink(pathName)

  },[pathName])
    const redirectedPathName = (locale: string) => {
      if (!pathName) return '/'
      const segments = pathName.split('/')
      segments[1] = locale
      return segments.join('/')
    }
    
    const lang = sortObject(languages.languages.locales);

    return (
      <>
        {Object.keys(lang).reverse().map((locale, index) => {
          return (
            
              
                <NavbarLink
                className={`dropdown-item ${activeLink.includes(locale) ? 'active' : ''}`}
                key={index}
                href={redirectedPathName(locale)}
              > 
                { lang[locale] }
              </NavbarLink>
              
            
          )
        })} 
      </>
    )
  }