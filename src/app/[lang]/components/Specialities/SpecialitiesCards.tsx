import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/src/lib/dictionary";

export default async function SpecialitiesCards({lang}:{lang:Locale}){
    const { specialities } = await getDictionary(lang);
    return(
       <div className="container">

        <div className="row">

    
         <div className="col">
            <a href={`/${lang}/${specialities.software.href}`} className="specialities__card">
              <p className="specialities__card-title">{specialities.software.title}</p>
              <p className="specialities__card-link">
                {specialities.software.linkText}
              </p>
            </a>
          </div>
          <div className="col">
            <a href={`/${lang}/${specialities.translator.href}`} className="specialities__card">
              <p className="specialities__card-title">{specialities.translator.title}</p>
              <p className="specialities__card-link">
                {specialities.translator.linkText}
              </p>
            </a>
          </div>
          <div className="col">
            <a href={`/${lang}/${specialities.upbringing.href}`} className="specialities__card">
              <p className="specialities__card-title">{specialities.upbringing.title}</p>
              <p className="specialities__card-link">
                {specialities.upbringing.linkText}
              </p>
            </a>
          </div>
          <div className="col">
            <a href={`/${lang}/${specialities.ComputerEngineering.href}`} className="specialities__card">
              <p className="specialities__card-title">{specialities.ComputerEngineering.title}</p>
              <p className="specialities__card-link">
                {specialities.ComputerEngineering.linkText}
              </p>
            </a>
          </div>
          <div className="col">
            <a href={`/${lang}/${specialities.Tourism.href}`} className="specialities__card">
              <p className="specialities__card-title">{specialities.Tourism.title}</p>
              <p className="specialities__card-link">
                {specialities.Tourism.linkText}
              </p>
            </a>
          </div>
          <div className="col">
            <a href={`/${lang}/${specialities.accounting.href}`} className="specialities__card">
              <p className="specialities__card-title">{specialities.accounting.title}</p>
              <p className="specialities__card-link">
                {specialities.accounting.linkText}
              </p>
            </a>
          </div>
          <div className="col">
            <a href={`/${lang}/${specialities.banking.href}`} className="specialities__card">
              <p className="specialities__card-title">{specialities.banking.title}</p>
              <p className="specialities__card-link">
                {specialities.banking.linkText}
              </p>
            </a>
          </div>
          <div className="col">
            <a href={`/${lang}/${specialities.hairdresser.href}`} className="specialities__card">
              <p className="specialities__card-title">{specialities.hairdresser.title}</p>
              <p className="specialities__card-link">
                {specialities.hairdresser.linkText}
              </p>
            </a>
          </div>
          <div className="col">
            <a href={`/${lang}/${specialities.jurisprudence.href}`} className="specialities__card">
              <p className="specialities__card-title">{specialities.jurisprudence.title}</p>
              <p className="specialities__card-link">
                {specialities.jurisprudence.linkText}
              </p>
            </a>
          </div>
          <div className="col">
            <a href={`/${lang}/${specialities.management.href}`} className="specialities__card">
              <p className="specialities__card-title">{specialities.management.title}</p>
              <p className="specialities__card-link">
                {specialities.management.linkText}
              </p>
            </a>
          </div>
          <div className="col">
            <a href={`/${lang}/${specialities.pedagogy.href}`} className="specialities__card">
              <p className="specialities__card-title">{specialities.pedagogy.title}</p>
              <p className="specialities__card-link">
                {specialities.pedagogy.linkText}
              </p>
            </a>
          </div>
          <div className="col">
            <a href={`/${lang}/${specialities.seamstress.href}`} className="specialities__card">
              <p className="specialities__card-title">{specialities.seamstress.title}</p>
              <p className="specialities__card-link">
                {specialities.seamstress.linkText}
              </p>
            </a>
          </div>
    

        </div>

       </div>
    )
}