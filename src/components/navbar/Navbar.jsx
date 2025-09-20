import Link from "next/link";
import React from "react";
import "../navbar/navbar.css";

const Navbar = () => {
  return (
    <header className="container-fluid navbar">
      <div className="site-header container flex-row">
        <div className="site-logo">
          <img src="/images/ajvamotor-logo.png" alt="Ajva Motors Logo" />
        </div>

        <button className="menu-toggle" id="menuToggle" aria-label="Toggle Menu">
          &#9776;
        </button>

        <nav className="nav-menu" id="navMenu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/tractor-parts">Tractor Parts</Link>
            </li>
            <li>
              <Link href="/truck-parts">Truck Parts</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="#">PDF Catalog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
