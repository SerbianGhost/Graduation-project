import { Locale } from "@/src/i18n.config"
import { getDictionary } from "@/src/lib/dictionary"
import SpecialitiesCards from "./SpecialitiesCards"
export default async function Specialities({lang}:{lang:Locale}){
    const { specialitiesTitle } = await getDictionary(lang)
    return(
        <section className="specialities">
                    <h3 className="text-center">
                        { specialitiesTitle }
                    </h3>
                    <SpecialitiesCards lang={lang}/>
        </section>
    )
}