import React from "react";
import "./Header.css";

function Header() {
  /* State Variables */
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="header">
      <h1 className="logo">AWCleaning</h1>

      {/* Hamburger Menu Icon */}
      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        =
      </button>
      <nav className="nav">
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact" className="header__contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
