import { getDictionary } from "@/src/lib/dictionary"
import { Locale } from "@/src/i18n.config"

import Container from "./NextBootstrap/Container/Container"
import Navbar from "./NextBootstrap/Navbar/Navbar"
import NavbarBrand from "./NextBootstrap/Navbar/Links/NavbarBrand"
import NavbarToggle from "./NextBootstrap/Navbar/NavbarToggle/NavbarToggle"
import Offcanvas from "./NextBootstrap/Navbar/Offcanvas/Offcanvas"
import OffcanvasHeader from "./NextBootstrap/Navbar/Offcanvas/OffcanvasHeader"
import OffcanvasBody from "./NextBootstrap/Navbar/Offcanvas/OffcanvasBody"
import Nav from "./NextBootstrap/Navbar/Nav"
import NavbarLink from "./NextBootstrap/Navbar/Links/NavbarLink"
import NavDropdown from "./NextBootstrap/Navbar/NavDropdown/NavDropdown"
import NavDropdownItem from "./NextBootstrap/Navbar/NavDropdown/NavDropdownItem"
import SocialMedias from "./SocialMedias/SocialMedias"
import Logo from "./Logo"

import LocaleSwitcher from "./NextBootstrap/Navbar/LocaleSwitcher"


export default async function Header({lang}:{lang:Locale}) {
  const { header } = await getDictionary(lang) 
    return(
           <header>
            <Navbar>
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
                                <LocaleSwitcher/>
                                <li className="nav-item">
                                     <SocialMedias/> 
                                </li>
                        </Nav>
                        </OffcanvasBody>
                    </Offcanvas>
                </Container>
            </Navbar>
        </header>
    )
}