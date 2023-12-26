import { Locale } from '@/src/i18n.config';
import { getDictionary } from '@/src/lib/dictionary';
export default async function Accounting({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
    
  const { Accounting } = await getDictionary(lang)

  return (
    <>
      <div className="speciality-background">
        <h1> {Accounting.speciality} </h1>
        <h6>{Accounting.code}</h6>
      </div>
      <h3 className="qualification text-center">{ Accounting.qualification }</h3>
      <section className="qualification-title">
        <h4 className="container">
            { Accounting['qualification-title'] }
        </h4>
      </section>
      <div className="container">
        <b>{ Accounting['qualification-title'] }</b> {Accounting.text}

        <p><b> {Accounting.activity} </b> {Accounting['text-2']} </p>

      </div>
    </>
  );
}

