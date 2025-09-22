import React from "react";
import "./contact.css";
import Link from "next/link";
import Features from "@/components/key_features/Features";
import Parts from "@/components/crafting_parts/Parts";

const page = () => {
  return (
    <>
      {/* reach out section */}

      <section className="container reach-out-section section-spacing flex-row">
        <div className="contact-texts">
          <div className="contact-intro mb-40">
            <h1 className="mb-10">Contact Ajva Motors</h1>
            <p className="mb-20 brand-motive">
              Connecting Excellence, Exceeding Expectations
            </p>
            <p className="mb-40">
              Feel free to get in touch with us at Ajva Motors. We're here to
              answer your questions and provide exceptional solutions. Your
              inquiries are important to us, and we're committed to delivering
              quality service that goes above and beyond your expectations.
            </p>
          </div>
          <div className="contact-info mb-30">
            <p className="mb-10">
              <strong>Address:</strong> State Highway, Nr. Teniwada Bridge,
              Behind Sirtaj Namkeen
              <br />
              At: Kotadi, Post : Chhapi, Ta : Vadgam Dist : Banaskantha ,
              Gujarat - 385210India
            </p>
            <p className="mb-10">
              <strong>Phone:</strong> +91 992-548-9951 | +91 701-605-2536
            </p>
            <p>
              <strong>Email:</strong> Ajvamotors@Yahoo.In
            </p>
          </div>
          <div className="contact-socials">
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
        <div className="form-container">
          <h4 className="text-center mb-20">Contact Us</h4>
          <p className="text-center mb-30">
            If You Require Additional Information, Please Complete The Form
            Below And Submit It. Our Team Will Be In Touch With You Promptly.
          </p>
          <form>
            <label htmlFor="name">
              Your Name:<span>*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              required
            />

            <label htmlFor="email">
              Your Email:<span>*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              required
            />

            <label htmlFor="mobile">Mobile No.:</label>
            <input type="tel" id="mobile" placeholder="Enter Your Mobile" />

            <label htmlFor="message">
              Message:<span>*</span>
            </label>
            <textarea
              id="message"
              placeholder="Type Your Message Here..."
              required
            ></textarea>
            <div className="text-center">
              <button className="primary-btn" type="submit">
                <Link href="#">Submit Information</Link>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* direction section  */}

      <section className="container section-spacing">
        <div className="iframe-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58317.597152945586!2d72.39176263093212!3d24.00107970000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cf30db2ecef01%3A0xf9841443dc51272b!2sajva%20motors!5e0!3m2!1sen!2sin!4v1748691991328!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/*  cta section  */}

      <Parts />

      {/* key features section */}

      <Features />
    </>
  );
};

export default page;
