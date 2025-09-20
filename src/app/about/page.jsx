import React from "react";
import "./about.css"

const About = () => {
  return (
    <>
      {/* about page hero section  */}
      <section class="container section-spacing flex-row">
        <div class="about-hero-texts">
          <h1 class="mb-10">About Ajva Motors</h1>
          <p class="mb-20 brand-motive">Driving Excellence in Manufacturing</p>
          <p>
            At Ajva Motors, excellence is our foundation. We take immense pride
            in delivering the highest quality products that consistently exceed
            our customers' expectations. Our journey began with a singular
            objective: to provide durable and reliable components. This
            commitment remains unshaken as we gradually progress towards our
            vision of becoming a world-class manufacturer.
          </p>
        </div>
        <div class="about-hero-image">
          <img src="/images/about-page-hero-section-image.png" alt="" />
        </div>
      </section>

      {/* brand section  */}

      <section class="container-fluid brand-section">
        <div class="container brands-slider marquee-wrapper">
          <ul class="tractor-brands marquee-track">
            <li>
              <img src="/images/mahindra.png" alt="" />
            </li>
            <li>
              <img src="/images/eicher.png" alt="" />
            </li>
            <li>
              <img src="/images/johndeere.png" alt="" />
            </li>
            <li>
              <img src="/images/swaraj.png" alt="" />
            </li>
            <li>
              <img src="/images/bharatbenz.png" alt="" />
            </li>
            <li>
              <img src="/images/hmt.png" alt="" />
            </li>
            {/*  Repeat once more for seamless scroll */}
            <li>
              <img src="/images/mahindra.png" alt="" />
            </li>
            <li>
              <img src="/images/eicher.png" alt="" />
            </li>
            <li>
              <img src="/images/johndeere.png" alt="" />
            </li>
            <li>
              <img src="/images/swaraj.png" alt="" />
            </li>
            <li>
              <img src="/images/bharatbenz.png" alt="" />
            </li>
            <li>
              <img src="/images/hmt.png" alt="" />
            </li>
          </ul>
        </div>
      </section>

      {/* info section */}

      <section class="info-section container section-spacing">
        <div class="flex-row mb-40">
          <div class="info-box">
            <h4 class="mb-10">Our Vision & Mission</h4>
            <p class="mb-20 short-title-info">Elevating Tractor Body Parts</p>
            <p>
              Our Vision And Mission Are Clear: We Are Dedicated To Enhancing
              The Performance And Quality Of Tractor Body Parts By Providing
              Safe, Durable, And Exceptional Products That Go Beyond Our
              Customers' Expectations. We Aspire To Establish Ourselves As The
              Industry's Most Reputable Name Through Continuous Innovation And
              Unwavering Dedication To Delivering The Best To Our Valued
              Customers.
            </p>
          </div>

          <div class="info-box">
            <h4 class="mb-10">Our Story</h4>
            <p class="mb-20 short-title-info">Building Trust Through Quality</p>
            <p>
              Our Journey Started With The Aim Of Introducing The Market To The
              Best Quality Products. Through Gradual Expansion And Unwavering
              Dedication, We've Forged A Network Of Trust With Countless
              Customers Who Rely On Our Steadfast And Reliable Services. Today,
              We Are Proud To Be Trusted By Hundreds, And Our Reputation
              Continues To Grow.
            </p>
          </div>
        </div>

        <div class="full-width-box">
          <h4 class="mb-10">Our Core Values</h4>
          <p class="mb-20 short-title-info">
            Quality, Transparency, And Customer Satisfaction
          </p>
          <p>
            At The Heart Of Our Operation Lie Our Core Values. We Unwaveringly
            Adhere To The Highest Quality Standards, Never Compromising On The
            Excellence Of Our Components. With A Wealth Of Expertise In
            Manufacturing, We Consistently Surpass Our Customers' Expectations.
            Our Products Are Crafted From The Finest Raw Materials, And We
            Maintain A Transparent Process. We Promise To Meet All Your
            Requirements With Our Exceptional Product Range And Guarantee Your
            Satisfaction As We Work Towards Building A Vast And Satisfied Client
            Base.
          </p>
        </div>
      </section>

      {/* cta section  */}

      <section class="container-fluid cta-section">
        <div class="container section-spacing flex-row">
          <h3>Crafting Parts to Your Exact Specifications.</h3>
          <button class="secondary-btn">
            <a href="#">Inquiry Now</a>
          </button>
        </div>
      </section>

      {/* key features section */}

      <section class="container-fluid features-section">
        <div class="container section-spacing">
          <div class="mb-40">
            <h3 class="mb-20">Key Features</h3>
            <p class="mb-60">
              Ajva Motors: Delivering exceptional quality, empowering our team,
              and driving toward world-class manufacturing.
            </p>
          </div>
          <div class="features-grid">
            <div class="feature-card">
              <div>
                <img src="/images/trust-icon.png" alt="" />
              </div>
              <div>
                <h5 class="mb-10">Trusted By Thousands</h5>
                <p>Do in laughter securing smallest sensible no mr hastened.</p>
              </div>
            </div>
            <div class="feature-card">
              <div>
                <img src="/images/vehicle-icon.png" alt="" />
              </div>
              <div>
                <h5 class="mb-10">Wide Range of Vehicles</h5>
                <p>
                  As perhaps proceed in in brandon of limited unknown greatly.
                </p>
              </div>
            </div>
            <div class="feature-card">
              <div>
                <img src="/images/service-icon.png" alt="" />
              </div>
              <div>
                <h5 class="mb-10">Reliable Service</h5>
                <p>
                  Distrusts fulfilled happiness unwilling as explained of
                  difficult.
                </p>
              </div>
            </div>
            <div class="feature-card">
              <div>
                <img src="/images/buy-and-sell-icon.png" alt="" />
              </div>
              <div>
                <h5 class="mb-10">Faster Buy & Sell</h5>
                <p>
                  No landlord of peculiar ladyship attended if contempt
                  ecstatic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*/gallery section / */}

      <section class="container section-spacing">
        <div class="text-center">
          <h3 class="mb-20">Explore Our Craftsmanship</h3>
          <p class="mb-50">
            Discover a visual journey showcasing our precision and quality in
            every component.
          </p>
        </div>
        <div class="images-grid mb-50">
          <img src="/images/gallery-1.png" alt="" />
          <img src="/images/gallery-2.png" alt="" />
          <img src="/images/gallery-3.png" alt="" />
          <img src="/images/gallery-4.png" alt="" />
        </div>
        <div class="text-center">
          <button class="primary-btn">
            <a href="#">View All Images</a>
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
