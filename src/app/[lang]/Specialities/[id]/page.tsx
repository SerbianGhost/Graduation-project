import HowToApply from '../../components/HowToApply';
import { Locale } from '@/src/utils/i18n.config';
import { getDictionary } from '@/src/api/dictionary';
import { getPublic } from '@/src/api/getPublic'; 
export default async function speciality({
  params: { lang, id }
}: {
  params: { lang: Locale, id:string }
}) {

    const { specialities } = await getDictionary(lang);
    const { spec } = await getPublic('specialities')

  return (
    <>
      
      <div className="speciality-background">
        <h1> { specialities.speciality[id].title } </h1>
        <h6> {spec[id].code} </h6>
      </div>
      <h3 className="qualification text-center"> { specialities.public.qualification } </h3>
      <section className="qualification-title">
        <h4 className="container">
        {specialities.speciality[id]['qualification-title']}
        </h4>
      </section>
      <div className="container">
        <b>{specialities.speciality[id]['qualification-title']}</b> {specialities.speciality[id].text}
        <p><b> {specialities.public.activity} </b> {specialities.speciality[id]['text-2']} </p>
      </div>
      <HowToApply lang={lang}/>
    </>
  );
}

