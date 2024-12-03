import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LINKS } from "../static";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header
      id="header"
      className={`w-full ${
        pathname === "/service"
          ? "bg-[#3f4581]"
          : pathname === "/company"
          ? "bg-[#151b5e]"
          : pathname === "/career"
          ? "bg-[#3d4be2]"
          : "bg-[#232536]"
      }`}
    >
      <nav className="flex gap-4 py-3 w-[80%] mx-auto">
        {LINKS?.map((link) => (
          <NavLink key={link.id} className="text-slate-100" to={link.path}>
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
