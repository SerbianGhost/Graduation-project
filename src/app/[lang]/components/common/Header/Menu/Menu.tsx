import { Locale } from "@/src/utils/i18n.config" 

import Container from "../../../NextBootstrap/Container/Container"

import { NavbarBrand,NavbarToggle, Offcanvas, OffcanvasHeader,
         OffcanvasBody,Nav} from '../../../NextBootstrap/Navbar/utils/NavBarConfig'

import SocialMedias from "../../SocialMedias/SocialMedias"
import Logo from "../../Logo"


import LocaleDropdown from "./LocaleSwitcher/LocalesDropdown"

export default function Menu({lang}:{lang:Locale}){
    return(
        <Container>
                    <NavbarBrand href={`/${lang}/`}>
                        <Logo/>
                    </NavbarBrand>
                    <NavbarToggle/>
                    <Offcanvas>
                        <OffcanvasHeader>
                            <Logo/>
                            <NavbarToggle/>
                        </OffcanvasHeader>
                        <OffcanvasBody>
                            <Nav>
                                <LocaleDropdown lang={lang}/>
                                <li className="nav-item">
                                     <SocialMedias/> 
                                </li>
                        </Nav>
                        </OffcanvasBody>
                    </Offcanvas>
                </Container>
    )
}