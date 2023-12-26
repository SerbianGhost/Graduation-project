import { Locale } from '@/src/i18n.config';
import { getDictionary } from '@/src/lib/dictionary';
export default async function Translator({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
    
  const { Translator } = await getDictionary(lang)

  return (
    <>
      <div className="speciality-background">
        <h1> {Translator.speciality} </h1>
        <h6>{Translator.code}</h6>
      </div>
      <h3 className="qualification text-center">{ Translator.qualification }</h3>
      <section className="qualification-title">
        <h4 className="container">
            { Translator['qualification-title'] }
        </h4>
      </section>
      <div className="container">
        <b>{ Translator['qualification-title'] }</b> {Translator.text}

        <p><b> {Translator.activity} </b> {Translator['text-2']} </p>

      </div>
    </>
  );
}

