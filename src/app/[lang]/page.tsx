import Main from './components/HomePage/Main/Main';
import Acquaintance from './components/HomePage/Acquaintance/Acquaintance';
import Specialities from './components/HomePage/Specialities/Specialities';
import GoogleMap from './components/common/GoogleMap';
import Slider from './components/HomePage/Slider';

import Information from './components/HomePage/Information/Information';

import { Locale } from '@/src/utils/i18n.config';



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
