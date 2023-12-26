import { Locale } from "@/src/i18n.config"
import { getDictionary } from "@/src/lib/dictionary"
export default async function MainList({lang}:{lang:Locale}){
    const { main } = await getDictionary(lang)
    return(
        <ul className="main__list">
            <li className="main__item">{main["item-1"]}</li>
            <li className="main__item">{main["item-2"]}</li>
            <li className="main__item">{main["item-3"]}</li>
            <li className="main__item">{main["item-4"]}</li>
            <li className="main__item">{main["item-5"]}</li>
        </ul>
    )
}