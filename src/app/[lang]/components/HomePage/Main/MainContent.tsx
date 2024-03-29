import MainList from "./MainList"
import MainLogo from "./MainLogo"

import { Locale } from "@/src/utils/i18n.config"

export default async function MainContent({lang}:{lang:Locale}){
    return(
        <>
        <section className="main__content">
            <MainLogo/>
            <MainList lang={lang}/>
        </section>
        </>
    )
}