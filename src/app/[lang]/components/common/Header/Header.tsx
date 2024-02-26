import { Locale } from "@/src/utils/i18n.config"
import Navbar from "../NextBootstrap/Navbar/Navbar"
import Menu from "./Menu/Menu"




export default function Header({lang}:{lang:Locale}) {
    return(
           <header>
            <Navbar>
                <Menu lang={lang}/>
            </Navbar>
        </header>
    )
}