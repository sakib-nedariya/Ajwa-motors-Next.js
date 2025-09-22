import Link from "next/link";
import React from "react";

const Parts = () => {
  return (
    <>
      <section className="container-fluid cta-section">
        <div className="container section-spacing flex-row">
          <h3>Crafting Parts to Your Exact Specifications.</h3>
          <button className="secondary-btn">
            <Link href="#">Inquiry Now</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Parts;
