import React from 'react'
import {Link, NavLink} from "react-router-dom"

const Header = () => {
  return (
    <header id="header" className="w-full bg-[#232536]">
      <div className="flex gap-4 py-3 w-[80%] mx-auto">
        <NavLink className="text-white" to={"/"}>
          Home
        </NavLink>
        <NavLink className="text-white" to={"/service"}>
          Service
        </NavLink>
        <NavLink className="text-white" to={"/company"}>
          Company
        </NavLink>
        <NavLink className="text-white" to={"/career"}>
          Career
        </NavLink>
        <NavLink className="text-white" to={"/login"}>
          Login
        </NavLink>
      </div>
    </header>
  );
}

export default Header