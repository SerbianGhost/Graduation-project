import { Locale } from '@/src/i18n.config';
import { getDictionary } from '@/src/lib/dictionary';
export default async function Hairdresser({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
    
  const { Hairdresser } = await getDictionary(lang)

  return (
    <>
      <div className="speciality-background">
        <h1> {Hairdresser.speciality} </h1>
        <h6>{Hairdresser.code}</h6>
      </div>
      <h3 className="qualification text-center">{ Hairdresser.qualification }</h3>
      <section className="qualification-title">
        <h4 className="container">
            { Hairdresser['qualification-title'] }
        </h4>
      </section>
      <div className="container">
        <b>{ Hairdresser['qualification-title'] }</b> {Hairdresser.text}

        <p><b> {Hairdresser.activity} </b> {Hairdresser['text-2']} </p>

      </div>
    </>
  );
}

