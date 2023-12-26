import LinkProps from "./LinkProps";
import Link from "next/link";
  const NavbarLink: React.FC<LinkProps> = ({ href, children }) => {
    return (
      <li className="nav-item">
        <Link className="nav-link" href={href}>
          {children}
      </Link>
      </li>
    );
  };
  
  export default NavbarLink;