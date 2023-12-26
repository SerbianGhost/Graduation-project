'use client'
import React, { useState, useEffect, useRef } from "react";
import NavDropdownToggle from "./NavDropdownToggle";

export default function NavDropdown({ children, title }: { children?: React.ReactNode, title?: any }) {
  const [isClassChanged, setClassChanged] = useState(false);
  const dropdownRef = useRef(null);

  const handleButtonClick = () => {
    setClassChanged(!isClassChanged);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
      setClassChanged(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <li className="nav-item dropdown" ref={dropdownRef}>
      <NavDropdownToggle
        className={`btn dropdown-toggle ${isClassChanged ? '--active' : ''}`}
        onClick={handleButtonClick}
        title={title}
      ></NavDropdownToggle>
      <ul className={`dropdown-menu ${isClassChanged ? 'show' : ''}`}>
        {children}
        <li>
          <hr className="dropdown-divider" />
        </li>
      </ul>
    </li>
  );
}
