import { Locale } from "@/src/utils/i18n.config";
import { getDictionary } from "@/src/api/dictionary";
import sortObject from "@/src/utils/sortObjects";
export default async function MainList({lang}:{lang:Locale}){
    const  {main}  = await getDictionary(lang);
    const mainObj = sortObject(main)
    return(
        <ul className="main__list">
            {Object.values<string>(mainObj).map((value:string,index:number)=>(
                <li className="main__item">{value}</li>
            ))}
        </ul>
    )
}