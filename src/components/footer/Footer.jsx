import React from "react";
import Link from "next/link";
import "../../components/footer/footer.css"

const Footer = () => {
  return (
    <footer className="footer section-spacing" style={{ paddingBottom: "2%" }}>
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
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
              <Link href="#">PDF Catalogue</Link>
            </li>
          </ul>
        </div>

        <div className="footer-products">
          <h4 className="mb-20">Our Brands</h4>
          <ul>
            <li>
              <Link href="/tractor-parts">Mahindra</Link>
            </li>
            <li>
              <Link href="/tractor-parts">Swaraj</Link>
            </li>
            <li>
              <Link href="/tractor-parts">Ford</Link>
            </li>
            <li>
              <Link href="/tractor-parts">Ferguson</Link>
            </li>
            <li>
              <Link href="/tractor-parts">Sonalika</Link>
            </li>
            <li>
              <Link href="/tractor-parts">John Deere</Link>
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
            At: Kotadi, Post : Chhapi, Ta : Vadgam Dist : Banaskantha , Gujarat - India
            , 385210
          </p>
          <p className="mb-10">
            <strong>Phone:</strong> +91 992-548-9951
          </p>
          <p>
            <strong>Email:</strong> ajvamotors@yahoo.in
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
