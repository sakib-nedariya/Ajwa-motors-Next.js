import React from "react";
import mahindra from "../../../public/images/mahindra.png";
import eicher from "../../../public/images/eicher.png";
import johndeere from "../../../public/images/johndeere.png";
import swaraj from "../../../public/images/swaraj.png";
import bharatbenz from "../../../public/images/bharatbenz.png";
import hmt from "../../../public/images/hmt.png";
import Image from "next/image";

const Slider = () => {
  const images = [
    { src: mahindra, alt: "Mahindra" },
    { src: eicher, alt: "Eicher" },
    { src: johndeere, alt: "John Deere" },
    { src: swaraj, alt: "Swaraj" },
    { src: bharatbenz, alt: "Bharat Benz" },
    { src: hmt, alt: "HMT" },
  ];
  return (
    <>
      <section className="container-fluid brand-section">
        <div className="container marquee-wrapper">
          <ul className="marquee-track">
            {images.map((image, index) => (
              <li key={index}>
                <Image src={image.src} alt={image.alt} />
              </li>
            ))}
          </ul>
          <ul className="marquee-track" aria-hidden="true">
            {images.map((image, index) => (
              <li key={index}>
                <Image src={image.src} alt={image.alt} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Slider;
