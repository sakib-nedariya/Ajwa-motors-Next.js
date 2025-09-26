import Link from "next/link";
import React from "react";
import "./home.css";
import "./globals.css";
import Slider from "@/components/slider/Slider";
import Features from "@/components/key_features/Features";
import Parts from "@/components/crafting_parts/Parts";

const page = () => {
  return (
    <>
      {/*hero section */}
      <section>
        <div className="container flex-row section-spacing">
          <div className="hero-texts">
            <h1 className="mb-20">
              Tailoring <span>Quality Parts to Your Specifications</span>,
              Trusted By A World of Customers.
            </h1>
            <p className="mb-30">
              Transforming visions into reality, Ajva Motors delivers quality
              and innovation worldwide.
            </p>
            <button className="primary-btn">
              <Link href="#">Inquiry Now</Link>
            </button>
          </div>
          <div className="hero-image">
            <img src="/images/hero-image.png" alt="Hero Image" />
          </div>
        </div>
      </section>

      <Slider />

      {/* about us section */}

      <section className="container flex-row about-us-section section-spacing">
        <div className="about-image">
          <img src="/images/about-us-image.png" alt="image" />
        </div>
        <div className="about-texts">
          <h2 className="mb-20">
            <span>About</span>
            <br />
            Ajva Motors
          </h2>
          <p className="mb-30">
            Ajva Motors takes pride in providing the best quality products to
            exceed the expectations of its customers and enables its valuable
            employees to take up new opportunities. We started with an objective
            to provide durable products and reliable services. Our commitment
            has not changed and we are slowly moving towards achieving our goal
            of being a world class manufacturer.
          </p>
          <button className="primary-btn">
            <Link href="#">Learn More About Us</Link>
          </button>
        </div>
      </section>

      {/*  product section */}

      <section className="product-section section-spacing">
        <div className="container">
          <div className="flex-row mb-40">
            <div className="product-intro">
              <h3 className="mb-10">Tractor Parts</h3>
              <p>Discover excellence in every component we craft.</p>
            </div>
            <div className="product-tabs">
              <Link href="#" className="active">Tractor Parts</Link>
              <span>|</span>
              <Link href="#">Truck Parts</Link>
            </div>
          </div>
          <div className="tractor-models text-center">
            <div>
              <img className="mb-20" src="/images/swaraj-tractor.png" alt="" />
              <h4>Swaraj Tractor</h4>
            </div>
            <div>
              <img className="mb-20" src="/images/eicher-tractor.png" alt="" />
              <h4>Eicher Tractor</h4>
            </div>
            <div>
              <img
                className="mb-20"
                src="/images/johndeere-tractor.png"
                alt=""
              />
              <h4>John deer Tractor</h4>
            </div>
            <div>
              <img
                className="mb-20"
                src="/images/mahindra-tractor.png"
                alt=""
              />
              <h4>Mahindra Tractor</h4>
            </div>
          </div>
        </div>
      </section>

      {/* brand highlight section  */}

      <section className="container-fluid brand-highlight">
        <div className="highlight-border">
          <div className="container">
            <div className="bharatbenz-brand">
              <h3 className="mb-20">
                Pioneering Quality: Crafting Parts For “Bharat
                <strong>Benz</strong>”
              </h3>
              <p className="mb-40">
                At Ajva Motors, we're proud to be the trusted name behind
                BharatBenz parts, delivering excellence that exceeds industry
                standards.
              </p>
              <Link href="#">
                Explore BharatBenz Parts
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*  key features section  */}

      <Features />

      {/* cta section  */}

      <Parts />

      {/* gallery section */}

      <section className="container section-spacing">
        <div className="text-center">
          <h3 className="mb-20">Explore Our Craftsmanship</h3>
          <p className="mb-50">
            Discover a visual journey showcasing our precision and quality in
            every component.
          </p>
        </div>
        <div className="images-grid mb-50">
          <img src="/images/gallery-1.png" alt="" />
          <img src="/images/gallery-2.png" alt="" />
          <img src="/images/gallery-3.png" alt="" />
          <img src="/images/gallery-4.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default page;
