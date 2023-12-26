import { Locale } from '@/src/i18n.config';
import { getDictionary } from '@/src/lib/dictionary';
export default async function Banking({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
    
  const { Banking } = await getDictionary(lang)

  return (
    <>
      <div className="speciality-background">
        <h1> {Banking.speciality} </h1>
        <h6>{Banking.code}</h6>
      </div>
      <h3 className="qualification text-center">{ Banking.qualification }</h3>
      <section className="qualification-title">
        <h4 className="container">
            { Banking['qualification-title'] }
        </h4>
      </section>
      <div className="container">
        <b>{ Banking['qualification-title'] }</b> {Banking.text}

        <p><b> {Banking.activity} </b> {Banking['text-2']} </p>

      </div>
    </>
  );
}

