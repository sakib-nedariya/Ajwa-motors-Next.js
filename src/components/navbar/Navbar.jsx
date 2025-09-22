"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "../navbar/navbar.css";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="container-fluid navbar">
      <div className="site-header container flex-row">
        <div className="site-logo">
          <img src="/images/ajvamotor-logo.png" alt="Ajva Motors Logo" />
        </div>

        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label="Toggle Menu"
        >
          &#9776;
        </button>

        <nav className="nav-menu" id="navMenu">
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname === "/about" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/tractor-parts"
                className={pathname === "/tractor-parts" ? "active" : ""}
              >
                Tractor Parts
              </Link>
            </li>
            <li>
              <Link
                href="/truck-parts"
                className={pathname === "/truck-parts" ? "active" : ""}
              >
                Truck Parts
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={pathname === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
