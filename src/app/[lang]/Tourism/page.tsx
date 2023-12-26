import { Locale } from '@/src/i18n.config';
import { getDictionary } from '@/src/lib/dictionary';
export default async function Tourism({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
    
  const { Tourism } = await getDictionary(lang)

  return (
    <>
      <div className="speciality-background">
        <h1> {Tourism.speciality} </h1>
        <h6>{Tourism.code}</h6>
      </div>
      <h3 className="qualification text-center">{ Tourism.qualification }</h3>
      <section className="qualification-title">
        <h4 className="container">
            { Tourism['qualification-title'] }
        </h4>
      </section>
      <div className="container">
        <b>{ Tourism['qualification-title'] }</b> {Tourism.text}

        <p><b> {Tourism.activity} </b> {Tourism['text-2']} </p>

      </div>
    </>
  );
}

