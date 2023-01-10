import React from "react";
import Logo from "../assets/logo.svg";

export default function DashboardNavbar() {
  return (
    <div>
      <div>
        <img src={Logo} alt='Logo Image' />
        <input type="search" name="search" id="search" placeholder="Search for anything"/>
        <button></button>
      </div>
    </div>
  );
}
