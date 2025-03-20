import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">Nikesh</div>

      {/* Toggle Button */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Menu */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><NavLink exact to="/" activeClassName="active" onClick={() => setMenuOpen(false)}>HOME</NavLink></li>
          <li><NavLink to="/about" activeClassName="active" onClick={() => setMenuOpen(false)}>ABOUT</NavLink></li>
          <li><NavLink to="/resume" activeClassName="active" onClick={() => setMenuOpen(false)}>RESUME</NavLink></li>
          <li><NavLink to="/projects" activeClassName="active" onClick={() => setMenuOpen(false)}>PROJECTS</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active" onClick={() => setMenuOpen(false)}>CONTACT</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
