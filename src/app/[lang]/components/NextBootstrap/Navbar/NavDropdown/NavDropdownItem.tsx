'use client'
import LinkProps from "../Links/LinkProps";
  
  const NavDropdownItem: React.FC<LinkProps> = ({ href, children }) => {
    return (
        <li><a className="dropdown-item" href={href}> {children} </a></li>
    );
  };
  
  export default NavDropdownItem;