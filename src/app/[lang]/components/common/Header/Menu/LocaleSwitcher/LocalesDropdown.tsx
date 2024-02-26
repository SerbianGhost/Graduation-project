import NavDropdown from "../../../../NextBootstrap/Navbar/NavDropdown/NavDropdown";
import LocaleSwitcher from "./LocaleSwitcher"
import { Locale } from "@/src/utils/i18n.config"
import { getDictionary } from "@/src/api/dictionary"
export default async function LocaleDropdown ({lang}:{lang:Locale}) {
    const { header } = await getDictionary(lang);
    return(
        <NavDropdown title={header.languages.title}>
            <LocaleSwitcher languages={header}/>
        </NavDropdown>
    )
} 