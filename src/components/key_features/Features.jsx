import React from "react";

const Features = () => {
  return (
    <>
      <section className="container-fluid features-section">
        <div className="container section-spacing">
          <div className="mb-40">
            <h3 className="mb-20">Key Features</h3>
            <p className="mb-60">
              Ajva Motors: Delivering exceptional quality, empowering our team,
              and driving toward world-class manufacturing.
            </p>
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
                <p>
                  As perhaps proceed in in brandon of limited unknown greatly.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div>
                <img src="/images/service-icon.png" alt="" />
              </div>
              <div>
                <h5 className="mb-10">Reliable Service</h5>
                <p>
                  Distrusts fulfilled happiness unwilling as explained of
                  difficult.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div>
                <img src="/images/buy-and-sell-icon.png" alt="" />
              </div>
              <div>
                <h5 className="mb-10">Faster Buy & Sell</h5>
                <p>
                  No landlord of peculiar ladyship attended if contempt
                  ecstatic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
