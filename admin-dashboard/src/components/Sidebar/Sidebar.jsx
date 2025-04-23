// const navItems = [
//   { path: "/", label: "Dashboard", icon: "📊" },
//   { path: "/delivery-management", label: "Delivery Management", icon: "🚚" },
//   {
//     path: "/restaurant-management",
//     label: "Restaurant Management",
//     icon: "🍽️",
//   },
//   { path: "/add-restaurant", label: "Add Restaurant", icon: "➕" },
//   { path: "/user-management", label: "User Management", icon: "👥" },
//   { path: "/data-analytics", label: "Data Analytics", icon: "📈" },
//   { path: "/ai-center", label: "AI Center", icon: "🤖" },
// ];

import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ navItems }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Food Delivery</h2>
      </div>
      <nav className="nav-menu">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="nav-text">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
