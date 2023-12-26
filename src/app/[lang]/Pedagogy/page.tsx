import { Locale } from '@/src/i18n.config';
import { getDictionary } from '@/src/lib/dictionary';
export default async function Pedagogy({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
    
  const { Pedagogy } = await getDictionary(lang)

  return (
    <>
      <div className="speciality-background">
        <h1> {Pedagogy.speciality} </h1>
        <h6>{Pedagogy.code}</h6>
      </div>
      <h3 className="qualification text-center">{ Pedagogy.qualification }</h3>
      <section className="qualification-title">
        <h4 className="container">
            { Pedagogy['qualification-title'] }
        </h4>
      </section>
      <div className="container">
        <b>{ Pedagogy['qualification-title'] }</b> {Pedagogy.text}

        <p><b> {Pedagogy.activity} </b> {Pedagogy['text-2']} </p>

      </div>
    </>
  );
}

