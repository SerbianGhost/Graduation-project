import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/src/api/dictionary";
import specialitiesList from "./utils/specialitiesList";

export default async function SpecialitiesCards({lang}:{lang:Locale}){
    const { specialities } = await getDictionary(lang);
    
    return(
       <div className="container">

        <div className="row">

      {Object.keys(specialities.speciality).map((spec, index)=>(
        <div className="col" key={index}>
        <a href={`/${lang}/Specialities/${spec}`} className="specialities__card">
          <p className="specialities__card-title">{specialities.speciality[spec].title}</p>
          <p className="specialities__card-link">
            {specialities.public.button}
          </p>
        </a>
      </div>
      ))}
        </div>

       </div>
    )
}