import Link from 'next/link'
import React from 'react'
import "./home.css"

const page = () => {
  return (
    <>

      {/*hero section */}
      <section>
        <div className="container flex-row section-spacing">
          <div className="hero-texts">
            <h1 className="mb-20">Tailoring <span>Quality Parts to Your Specifications</span>, Trusted By A World of Customers.
            </h1>
            <p className="mb-30">Transforming visions into reality, Ajva Motors delivers quality and innovation worldwide.</p>
            <button className="primary-btn"><a href="#">Inquiry Now</a></button>
          </div>
          <div className="hero-image">
            <img src="/images/hero-image.png" alt="Hero Image" />
          </div>
        </div>
      </section>

      {/* brand section */}

      <section className="container-fluid brand-section">
        <div className="container marquee-wrapper">
          <ul className="tractor-brands marquee-track">
            <li><img src="/images/mahindra.png" alt="slider_image" /></li>
            <li><img src="/images/eicher.png" alt="slider_image" /></li>
            <li><img src="/images/johndeere.png" alt="slider_image" /></li>
            <li><img src="/images/swaraj.png" alt="slider_image" /></li>
            <li><img src="/images/bharatbenz.png" alt="slider_image" /></li>
            <li><img src="/images/hmt.png" alt="slider_image" /></li>
            {/*  Repeat once more for seamless scroll  */}
            <li><img src="/images/mahindra.png" alt="slider_image" /></li>
            <li><img src="/images/eicher.png" alt="slider_image" /></li>
            <li><img src="/images/johndeere.png" alt="slider_image" /></li>
            <li><img src="/images/swaraj.png" alt="slider_image" /></li>
            <li><img src="/images/bharatbenz.png" alt="slider_image" /></li>
            <li><img src="/images/hmt.png" alt="slider_image" /></li>
          </ul>
        </div>
      </section>


      {/*/about us section /*/}

      <section className="container flex-row about-us-section section-spacing">
        <div className="about-image">
          <img src="/images/about-us-image.png" alt="image" />
        </div>
        <div className="about-texts">
          <h2 className="mb-20"><span>About</span><br />Ajva Motors</h2>
          <p className="mb-30">Ajva Motors takes pride in providing the best quality products to exceed the expectations of its customers and enables its valuable employees to take up new opportunities. We started with an objective to provide durable products and reliable services. Our commitment has not changed and we are slowly moving towards achieving our goal of being a world class manufacturer.</p>
          <button className="primary-btn"><Link href="#">Learn More About Us</Link></button>
        </div>
      </section>

      {/*  product section */}

      <section className="product-section section-spacing">
        <div className="container">
          <div className="flex-row mb-40">
            <div className="product-intro">
              <h3 className="mb-10">Tractor Parts & Accessories</h3>
              <p>Discover excellence in every component we craft.</p>
            </div>
            <div className="product-tabs">
              <Link href="#">Tractor Parts</Link>
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
              <img className="mb-20" src="/images/johndeere-tractor.png" alt="" />
              <h4>John deer Tractor</h4>
            </div>
            <div>
              <img className="mb-20" src="/images/mahindra-tractor.png" alt="" />
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
              <h3 className="mb-20">Pioneering Quality: Crafting Parts For “Bharat<strong>Benz</strong>”</h3>
              <p className="mb-40">At Ajva Motors, we're proud to be the trusted name behind BharatBenz parts, delivering
                excellence that exceeds industry standards.</p>
              <Link href="#">Explore BharatBenz Parts<i className="fa-solid fa-arrow-right-long"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/*  key features section  */}

      <section className="container section-spacing">
        <div className="mb-40">
          <h3 className="mb-20">Key Features</h3>
          <p className="mb-60">Ajva Motors: Delivering exceptional quality, empowering our team, and driving toward world-class
            manufacturing.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div>
              <img src="/images/trust-icon.png" alt="" />
            </div>
            <div>
              <h5 className="mb-10">Trusted By Thousands</h5>
              <p>Do in laughter securing smallest sensible no mr hastened.</p>
            </div>
          </div>
          <div className="feature-card">
            <div>
              <img src="/images/vehicle-icon.png" alt="" />
            </div>
            <div>
              <h5 className="mb-10">Wide Range of Vehicles</h5>
              <p>As perhaps proceed in in brandon of limited unknown greatly.</p>
            </div>
          </div>
          <div className="feature-card">
            <div>
              <img src="/images/service-icon.png" alt="" />
            </div>
            <div>
              <h5 className="mb-10">Reliable Service</h5>
              <p>Distrusts fulfilled happiness unwilling as explained of difficult.</p>
            </div>
          </div>
          <div className="feature-card">
            <div>
              <img src="/images/buy-and-sell-icon.png" alt="" />
            </div>
            <div>
              <h5 className="mb-10">Faster Buy & Sell</h5>
              <p>No landlord of peculiar ladyship attended if contempt ecstatic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* cta section  */}

      <section className="container-fluid cta-section">
        <div className="container section-spacing flex-row">
          <h3>Crafting Parts to Your Exact Specifications.</h3>
          <button className="secondary-btn"><a href="#">Inquiry Now</a></button>
        </div>
      </section>

      {/* gallery section */}

      <section className="container section-spacing">
        <div className="text-center">
          <h3 className="mb-20">Explore Our Craftsmanship</h3>
          <p className="mb-50">Discover a visual journey showcasing our precision and quality in every component.</p>
        </div>
        <div className="images-grid mb-50">
          <img src="/images/gallery-1.png" alt="" />
          <img src="/images/gallery-2.png" alt="" />
          <img src="/images/gallery-3.png" alt="" />
          <img src="/images/gallery-4.png" alt="" />
        </div>
        <div className="text-center">
          <button className="primary-btn"><a href="#">View All Images</a></button>
        </div>
      </section>/
    </>
  )
}

export default page
