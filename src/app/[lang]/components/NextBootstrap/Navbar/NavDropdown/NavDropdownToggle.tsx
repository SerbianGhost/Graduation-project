'use client'

interface NavDropdownToggleProps {
  className: string;
  onClick: () => void;
  title: string;
}

const NavDropdownToggle: React.FC<NavDropdownToggleProps> = ({className, onClick, title }) => {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
};

export default NavDropdownToggle;