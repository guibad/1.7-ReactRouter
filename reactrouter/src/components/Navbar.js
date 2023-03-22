import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink exact="true" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/categories">
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/payments">
            Payments
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
