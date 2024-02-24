import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main/Main';
import Acquaintance from './components/Acquaintance/Acquaintance';
import Specialities from './components/Specialities/Specialities';
import GoogleMap from './components/GoogleMap';

import Slider from './components/Slider';

import Information from './components/Information/Information';

import { Locale } from '@/src/utils/i18n.config';

import Test from './components/test';

export default function Home({
  params: { lang }
}: {
  params: { lang: Locale }
})  {
  return (
   <> 
        <Main lang={lang}/>
        <Acquaintance lang={lang}/>  
        <Information lang={lang}/>
        <Slider teacher lang={lang}/> 
        <Specialities lang={lang}/> 
        <Slider partner lang={lang}/> 
        <GoogleMap/> 
   </>
  )
} 
