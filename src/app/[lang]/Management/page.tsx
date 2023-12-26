import { Locale } from '@/src/i18n.config';
import { getDictionary } from '@/src/lib/dictionary';
export default async function Management({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
    
  const { Management } = await getDictionary(lang)

  return (
    <>
      <div className="speciality-background">
        <h1> {Management.speciality} </h1>
        <h6>{Management.code}</h6>
      </div>
      <h3 className="qualification text-center">{ Management.qualification }</h3>
      <section className="qualification-title">
        <h4 className="container">
            { Management['qualification-title'] }
        </h4>
      </section>
      <div className="container">
        <b>{ Management['qualification-title'] }</b> {Management.text}

        <p><b> {Management.activity} </b> {Management['text-2']} </p>

      </div>
    </>
  );
}

