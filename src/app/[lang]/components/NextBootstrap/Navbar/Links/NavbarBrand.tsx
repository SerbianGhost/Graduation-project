import LinkProps from "./LinkProps";
  
  const NavbarBrand: React.FC<LinkProps> = ({ href, children }) => {
    return (
      <a className="navbar-brand" href={href}>
        {children}
      </a>
    );
  };
  
  export default NavbarBrand;