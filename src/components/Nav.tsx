import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

interface NavProps{
    href?: string,
    label?: string
}
interface NavPropsIndi{
    indi: NavProps[]
}
const Nav: React.FC<NavPropsIndi> = (props) => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={30} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {props.indi.map((nav) => (
            <li key={nav.label}>
              <a href={nav.href}>{nav.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
            <img src={hamburger} alt="Sidebar" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
