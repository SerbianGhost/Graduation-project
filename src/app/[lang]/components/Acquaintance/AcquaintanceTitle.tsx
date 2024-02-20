import { Locale } from "@/src/i18n.config"
import { getDictionary } from "@/src/api/dictionary"
export default async function AcquantanceTitle({lang}:{lang:Locale}){
    const  { acquaintance }  = await getDictionary(lang)
    return(
        <h2 className="text-center fw-bold text-secondary">{acquaintance.title}</h2>
    )
}