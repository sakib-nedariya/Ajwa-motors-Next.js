import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer section-spacing">
      <div className="footer-container container mb-30">
        <div className="footer-about">
          <img
            src="/images/ajwa-motors-footer-logo.png"
            alt="Ajva Motors Logo"
            width={200}
            height={80}
            className="footer-logo mb-20"
          />
          <p className="footer-tagline mb-40">
            Transforming visions into reality, Ajva Motors delivers quality and
            innovation worldwide.
          </p>
          <div className="footer-socials">
            <Link href="#">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-pinterest-p"></i>
            </Link>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="mb-20">Quick Links</h4>
          <ul>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Our Products</Link>
            </li>
            <li>
              <Link href="#">Gallery</Link>
            </li>
            <li>
              <Link href="#">Logistic</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-products">
          <h4 className="mb-20">Our Products</h4>
          <ul>
            <li>
              <Link href="#">Swaraj Tractor</Link>
            </li>
            <li>
              <Link href="#">Massey Furugusan</Link>
            </li>
            <li>
              <Link href="#">Mahindra</Link>
            </li>
            <li>
              <Link href="#">Eicher</Link>
            </li>
            <li>
              <Link href="#">HMT</Link>
            </li>
            <li>
              <Link href="#">Ford</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="mb-20">Contact Us</h4>
          <p className="mb-10">
            <strong>Address:</strong>
            <br />
            State Highway, Nr. Teniwada Bridge, Behind Sirtaj Namkeen
            <br />
            At: Kotadi, Post : Chhapi, Ta : Vadgam Dist : Banaskantha , Gujarat
            - 385210 India
          </p>
          <p className="mb-10">
            <strong>Phone:</strong> +91 992-548-9951 | +91 701-605-2536
          </p>
          <p>
            <strong>Email:</strong> Ajvamotors@Yahoo.In
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 Ajva Motors. | All rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
