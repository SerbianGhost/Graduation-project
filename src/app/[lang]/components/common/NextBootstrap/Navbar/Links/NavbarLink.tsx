import { ReactNode } from "react";
import Link from "next/link";
  const NavbarLink = ({ href, children, className }:{href:string, children:ReactNode, className?:string}) => {
    return (
      <li className="nav-item">
        <Link className={`nav-link ${className || ''}`} href={href}>
          {children}
      </Link>
      </li>
    );
  };
  
  export default NavbarLink;