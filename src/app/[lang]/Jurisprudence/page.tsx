import { Locale } from '@/src/i18n.config';
import { getDictionary } from '@/src/lib/dictionary';
export default async function Jurisprudence({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
    
  const { Jurisprudence } = await getDictionary(lang)

  return (
    <>
      <div className="speciality-background">
        <h1> {Jurisprudence.speciality} </h1>
        <h6>{Jurisprudence.code}</h6>
      </div>
      <h3 className="qualification text-center">{ Jurisprudence.qualification }</h3>
      <section className="qualification-title">
        <h4 className="container">
            { Jurisprudence['qualification-title'] }
        </h4>
      </section>
      <div className="container">
        <b>{ Jurisprudence['qualification-title'] }</b> {Jurisprudence.text}

        <p><b> {Jurisprudence.activity} </b> {Jurisprudence['text-2']} </p>

      </div>
    </>
  );
}

