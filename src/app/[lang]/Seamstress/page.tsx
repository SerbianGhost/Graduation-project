import { Locale } from '@/src/i18n.config';
import { getDictionary } from '@/src/lib/dictionary';
export default async function Seamstress({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
    
  const { Seamstress } = await getDictionary(lang)

  return (
    <>
      <div className="speciality-background">
        <h1> {Seamstress.speciality} </h1>
        <h6>{Seamstress.code}</h6>
      </div>
      <h3 className="qualification text-center">{ Seamstress.qualification }</h3>
      <section className="qualification-title">
        <h4 className="container">
            { Seamstress['qualification-title'] }
        </h4>
      </section>
      <div className="container">
        <b>{ Seamstress['qualification-title'] }</b> {Seamstress.text}

        <p><b> {Seamstress.activity} </b> {Seamstress['text-2']} </p>

      </div>
    </>
  );
}

