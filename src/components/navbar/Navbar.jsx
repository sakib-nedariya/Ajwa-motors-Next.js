"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import "../navbar/navbar.css";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="container-fluid navbar">
      <div className="site-header container flex-row">
        <Link href="/">
          <div className="site-logo">
            <img src="/images/ajvamotor-logo.png" alt="Ajva Motors Logo" />
          </div>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          &#9776;
        </button>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/tractor-parts" className={pathname === "/tractor-parts" ? "active" : ""} onClick={() => setMenuOpen(false)}>
                Tractor Parts
              </Link>
            </li>
            <li>
              <Link href="/truck-parts" className={pathname === "/truck-parts" ? "active" : ""} onClick={() => setMenuOpen(false)}>
                Truck Parts
              </Link>
            </li>
            <li>
              <Link href="/contact" className={pathname === "/contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)}>PDF Catalogue</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
