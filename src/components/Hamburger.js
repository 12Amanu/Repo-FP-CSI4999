// This Hamburger component creates a hamburger menu icon with three lines (burgers).
// When the menu is open, the class "open" is applied to each line, making the icon change its shape (e.g., turning into a close icon).
// The `isOpen` prop determines whether the menu is open or closed, triggering the animation effect.
import React from "react";
import "../App.css";

// Hamburger component toggles the menu open/close state based on 'isOpen' prop
export default function Hamburger({ isOpen }) {
  return (
    <div className="hamburger-icon">
      {/* Applying 'open' class conditionally based on 'isOpen' */}
      <div className={`burger burger1 ${isOpen ? "open" : ""}`} />
      <div className={`burger burger2 ${isOpen ? "open" : ""}`} />
      <div className={`burger burger3 ${isOpen ? "open" : ""}`} />
    </div>
  );
}
