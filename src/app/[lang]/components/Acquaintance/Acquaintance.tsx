import AcquantanceTitle from "./AcquaintanceTitle"
import AcquaintanceVideo from "./AcquaintanceVideo"

import { Locale } from "@/src/i18n.config"

export default async function Acquaintance({lang}:{lang:Locale}) {
 return(
    <section className="acquaintance">
        <AcquantanceTitle lang={lang}/>
        <AcquaintanceVideo/>
    </section>
 )   
}