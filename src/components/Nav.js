//This Nav component code creates a navigation bar for a React app with a hamburger menu.
// Importing necessary React hooks and components Nav
import React, { useState } from "react"; //Importing two things from the React library: React and useState
import Hamburger from "./Hamburger"; // Importing the hamburger menu component
import logo from "../assets/logo2.jpg"; // Importing the logo image
import "../App.css"; // Importing the CSS for styling

// Defining the Nav component
export default function Nav() {
  // State to control the open/close status of the hamburger menu
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // Function to toggle the hamburger menu open/close
  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);

  return (
    <header className="header">
      {/* Hamburger icon toggles the menu */}
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      {/* Logo and title */}
      <img src={logo} alt="This is MP logo" />
      <div className="logo-title">Mashed Potatoes</div>
      {/* Search bar */}
      <input type="text" className="search-bar" placeholder="Search" />

      {/* Conditional rendering of navigation menu based on hamburger state */}
      {hamburgerOpen && (
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="/" onClick={() => setHamburgerOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" onClick={() => setHamburgerOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="/contact" onClick={() => setHamburgerOpen(false)}>
                Contact
              </a>
            </li>
            <li>
              <a href="/features" onClick={() => setHamburgerOpen(false)}>
                Features
              </a>
            </li>
            <li>
              <a href="/media" onClick={() => setHamburgerOpen(false)}>
                Media
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
