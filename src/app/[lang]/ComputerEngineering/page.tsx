import { Locale } from '@/src/i18n.config';
import { getDictionary } from '@/src/lib/dictionary';
export default async function ComputerEngineering({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
    
  const { ComputerEngineering } = await getDictionary(lang)

  return (
    <>
      <div className="speciality-background">
        <h1> {ComputerEngineering.speciality} </h1>
        <h6>{ComputerEngineering.code}</h6>
      </div>
      <h3 className="qualification text-center">{ ComputerEngineering.qualification }</h3>
      <section className="qualification-title">
        <h4 className="container">
            { ComputerEngineering['qualification-title'] }
        </h4>
      </section>
      <div className="container">
        <b>{ ComputerEngineering['qualification-title'] }</b> {ComputerEngineering.text}

        <p><b> {ComputerEngineering.activity} </b> {ComputerEngineering['text-2']} </p>

      </div>
    </>
  );
}

