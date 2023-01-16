import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import SearchIcon from "../../assets/search.svg";
import NotificationIcon from "../../assets/notification.svg";
import ProfileImg from "../../assets/avatar.png";
import DropdownIcon from "../../assets/dropdown.svg";
import HamburgerIcon from "../../assets/hamburger-icon.svg";
import "./index.scss";
import DashboardSidebar from "../DashboardSidebar";

export default function DashboardNavbar() {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <div className='fixed'>
      <div className='navbar'>
        <div className='navbar-logo'>
          <button className='hamburger' onClick={() => setShowSideNav(true)}>
            <img src={HamburgerIcon} alt='Hamburger Icon' />
          </button>
          <a href='/'>
            <img src={Logo} alt='Logo Image' className='logo' />
          </a>
        </div>
        {showSideNav && (
          <>
            <div className='mobile-nav'>
              <DashboardSidebar showMobile />
            </div>
            <div
              className='overlay'
              onClick={() => setShowSideNav(false)}
            ></div>
          </>
        )}

        <div className='navbar-items'>
          <div className='search-bar'>
            <input
              type='search'
              name='search'
              id='search'
              placeholder='Search for anything'
            />
            <button>
              <img src={SearchIcon} alt='SearchIcon' />
            </button>
          </div>
          <div className='navbar-content'>
            <a href='http://'>DOCS</a>
            <img
              src={NotificationIcon}
              alt='Notification Icon'
              className='notification'
            />
            <img src={ProfileImg} alt='Profile Image' className='profile' />
            <span>Adedeji</span>
            <img src={DropdownIcon} alt='Dropdown Icon' className='dropdown' />
          </div>
        </div>
      </div>
    </div>
  );
}
