import MainContent from "./MainContent"
import { Locale } from "@/src/i18n.config"

export default async function Main({lang}:{lang:Locale}){
    return(
        <main className="main">
            <MainContent lang={lang}/>
        </main>
    )
}