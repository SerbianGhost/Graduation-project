import { Locale } from '@/src/i18n.config';
import { getDictionary } from '@/src/lib/dictionary';
export default async function Sowtware({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
    
  const { Sowtware } = await getDictionary(lang)

  return (
    <>
      <div className="speciality-background">
        <h1> {Sowtware.speciality} </h1>
        <h6>{Sowtware.code}</h6>
      </div>
      <h3 className="qualification text-center">{ Sowtware.qualification }</h3>
      <section className="qualification-title">
        <h4 className="container">
            { Sowtware['qualification-title'] }
        </h4>
      </section>
      <div className="container">
        <b>{ Sowtware['qualification-title'] }</b> {Sowtware.text}

        <p><b> {Sowtware.activity} </b> {Sowtware['text-2']} </p>

      </div>
    </>
  );
}

