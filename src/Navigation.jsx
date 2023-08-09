import logo from "/assets/shared/logo.svg";
import openMenuIcon from "/assets/shared/icon-hamburger.svg";
import closeMenuIcon from "/assets/shared/icon-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import the Link component
//////////////
//////////////

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navigation ${isMenuOpen ? "menu-open" : ""}`}>
      <img
        src={logo}
        alt="this is the logo"
        className="logo"
        width={48}
        height={48}
      />
      <hr className="horizontal-line" />

      <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
        <li className="list-item">
          <Link to="/" className="list-link">
            <span className="link-id">00</span>home
          </Link>
        </li>
        <li className="list-item">
          <Link to="destination" className="list-link">
            <span className="link-id">01</span>destination
          </Link>
        </li>
        <li className="list-item">
          <Link to="crew" className="list-link">
            <span className="link-id">02</span>crew
          </Link>
        </li>
        <li className="list-item">
          <Link to="technology" className="list-link">
            <span className="link-id">03</span>technology
          </Link>
        </li>
      </ul>

      <div className="nav-btns">
        {isMenuOpen ? (
          <img
            src={closeMenuIcon}
            alt="close menu icon"
            className="close-menu"
            width={21.55}
            height={19.14}
            onClick={toggleMenu}
          />
        ) : (
          <img
            src={openMenuIcon}
            alt="open menu icon"
            className="open-menu"
            width={24}
            height={21}
            onClick={toggleMenu}
          />
        )}
      </div>
    </nav>
  );
};
export default Navigation;
