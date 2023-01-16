import React from "react";
import { NavLink, useResolvedPath } from "react-router-dom";
import "./index.scss";

export default function SidebarLink({
  icon,
  text,
  to,
}: {
  icon: string;
  text: string;
  to?: string;
}) {
  return (
    <li>
      {to != null ? (
        <NavLink
          to={to}
          className={(props) =>
            props.isActive ? "sidebar-link exact-active" : "sidebar-link"
          }
        >
          <img src={icon} alt={text + " Icon"} className='icon' />
          <p>{text}</p>
        </NavLink>
      ) : (
        <div className='sidebar-link'>
          <img src={icon} alt={text + " Icon"} className='icon' />
          <p>{text}</p>
        </div>
      )}
    </li>
  );
}
