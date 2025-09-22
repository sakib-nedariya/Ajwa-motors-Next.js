import React from "react";
import "./about.css";
import Link from "next/link";
import Slider from "@/components/slider/Slider";
import Features from "@/components/key_features/Features";
import Parts from "@/components/crafting_parts/Parts";

const About = () => {
  return (
    <>
      {/* about page hero section  */}
      <section className="container section-spacing flex-row">
        <div className="about-hero-texts">
          <h1 className="mb-10">About Ajva Motors</h1>
          <p className="mb-20 brand-motive">
            Driving Excellence in Manufacturing
          </p>
          <p>
            At Ajva Motors, excellence is our foundation. We take immense pride
            in delivering the highest quality products that consistently exceed
            our customers' expectations. Our journey began with a singular
            objective: to provide durable and reliable components. This
            commitment remains unshaken as we gradually progress towards our
            vision of becoming a world-class manufacturer.
          </p>
        </div>
        <div className="about-hero-image">
          <img src="/images/about-page-hero-section-image.png" alt="" />
        </div>
      </section>

      {/* brand section  */}

      <Slider />

      {/* info section */}

      <section className="info-section container section-spacing">
        <div className="flex-row mb-40">
          <div className="info-box">
            <h4 className="mb-10">Our Vision & Mission</h4>
            <p className="mb-20 short-title-info">
              Elevating Tractor Body Parts
            </p>
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

          <div className="info-box">
            <h4 className="mb-10">Our Story</h4>
            <p className="mb-20 short-title-info">
              Building Trust Through Quality
            </p>
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

        <div className="full-width-box">
          <h4 className="mb-10">Our Core Values</h4>
          <p className="mb-20 short-title-info">
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

      <Parts />

      {/* key features section */}

      <Features />

      {/*/gallery section / */}

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
        <div className="text-center">
          <button className="primary-btn">
            <Link href="#">View All Images</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
