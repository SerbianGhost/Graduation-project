import { Locale } from '@/src/i18n.config';
import { getDictionary } from '@/src/lib/dictionary';
export default async function Upbringing({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
    
  const { Upbringing } = await getDictionary(lang)

  return (
    <>
      <div className="speciality-background">
        <h1> {Upbringing.speciality} </h1>
        <h6>{Upbringing.code}</h6>
      </div>
      <h3 className="qualification text-center">{ Upbringing.qualification }</h3>
      <section className="qualification-title">
        <h4 className="container">
            { Upbringing['qualification-title'] }
        </h4>
      </section>
      <div className="container">
        <b>{ Upbringing['qualification-title'] }</b> {Upbringing.text}

        <p><b> {Upbringing.activity} </b> {Upbringing['text-2']} </p>

      </div>
    </>
  );
}

