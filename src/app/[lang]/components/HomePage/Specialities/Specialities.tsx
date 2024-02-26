import { Locale } from "@/src/utils/i18n.config"
import { getDictionary } from "@/src/api/dictionary"
import SpecialitiesCards from "./SpecialitiesCards"
export default async function Specialities({lang}:{lang:Locale}){
    const { specialities } = await getDictionary(lang)
    return(
        <section className="specialities">
                    <h3 className="text-center">
                        { specialities.public.title }
                    </h3>
                    <SpecialitiesCards lang={lang}/>
        </section>
    )
}