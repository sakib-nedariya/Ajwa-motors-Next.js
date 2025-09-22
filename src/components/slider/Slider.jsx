import React from "react";

const Slider = () => {
  return (
    <>

      {/* brand section */}
      <section className="container-fluid brand-section">
        <div className="container marquee-wrapper">
          <ul className="tractor-brands marquee-track">
            <li>
              <img src="/images/mahindra.png" alt="slider_image" />
            </li>
            <li>
              <img src="/images/eicher.png" alt="slider_image" />
            </li>
            <li>
              <img src="/images/johndeere.png" alt="slider_image" />
            </li>
            <li>
              <img src="/images/swaraj.png" alt="slider_image" />
            </li>
            <li>
              <img src="/images/bharatbenz.png" alt="slider_image" />
            </li>
            <li>
              <img src="/images/hmt.png" alt="slider_image" />
            </li>
            {/*  Repeat once more for seamless scroll  */}
            <li>
              <img src="/images/mahindra.png" alt="slider_image" />
            </li>
            <li>
              <img src="/images/eicher.png" alt="slider_image" />
            </li>
            <li>
              <img src="/images/johndeere.png" alt="slider_image" />
            </li>
            <li>
              <img src="/images/swaraj.png" alt="slider_image" />
            </li>
            <li>
              <img src="/images/bharatbenz.png" alt="slider_image" />
            </li>
            <li>
              <img src="/images/hmt.png" alt="slider_image" />
            </li>
          </ul>
        </div>
      </section>
      
    </>
  );
};

export default Slider;
