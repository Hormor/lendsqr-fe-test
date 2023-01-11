import React from "react";
import Logo from "../../assets/logo.svg";
import SearchIcon from "../../assets/search.svg";
import NotificationIcon from "../../assets/notification.svg";
import ProfileImg from "../../assets/avatar.svg";
import DropdownIcon from "../../assets/dropdown.svg";
import "./index.scss"

export default function DashboardNavbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt='Logo Image' className="logo" />
      </div>
      <div className="navbar-items">
        <div className="search-bar">
          <input type="search" name="search" id="search" placeholder="Search for anything" />
          <button><img src={SearchIcon} alt="SearchIcon" /></button>
        </div>
        <div className="navbar-content">
          <a href="http://">DOCS</a>
          <img src={NotificationIcon} alt='Notification Icon' className="notification" />
          <img src={ProfileImg} alt='Profile Image' className="profile" />
          <span>Adedeji</span>
          <img src={DropdownIcon} alt='Dropdown Icon' className="dropdown" />
        </div>
      </div>
    </div>
  );
}
