"use client"
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import "./product-detail.css";
import Parts from "@/components/crafting_parts/Parts";

const page = () => {
  return (
    <>
      <BreadCrumb />

      <div className="product-section container section-spacing">
        <div className="flex-row">
          <div className="product-image">
            <img
              className="mb-30"
              src="/images/Product-angel-1.jpeg"
              alt="Tractor Model XZ-500"
            />
            <div className="more-images">
              <img src="/images/Product-angel-1.jpeg" alt="" />
              <img src="/images/Product-angel-2.jpeg" alt="" />
              <img src="/images/Product-angel-3.jpeg" alt="" />
              <img src="/images/Product-angel-4.jpeg" alt="" />
            </div>
          </div>
          <div className="product-info">
            <h1 className="mb-20">Tractor Model XZ-500</h1>
            <div className="price mb-20">
              Mahindra
              {/*  <span className="old-price">₹9,00,000</span> */}
            </div>

            <div className="features mb-30">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae natus voluptates nesciunt id vel, autem doloremque
                nulla expedita cum fuga minus, libero sapiente a, voluptatum
                quod impedit culpa excepturi hic esse! Voluptatem ipsum facere
                corporis, quam ducimus quo quis, voluptate dicta placeat eaque
                atque, nemo reprehenderit ad aperiam in. Quis explicabo alias
                laborum praesentium, repudiandae cupiditate nam magnam quibusdam
                minus dignissimos, vero nostrum saepe vitae eum. Suscipit
                doloribus aut cupiditate quia ullam commodi? Animi, vitae eum
                asperiores repellat ipsam officia veritatis repudiandae iusto
                quos, excepturi sequi dolor quo sint dignissimos?
              </p>
            </div>

            <div className="buttons">
              <button className="primary-btn">
                <a href="#">Get Quote</a>
              </button>
              <button className="secondary-btn">
                <a href="#">Download Brochure</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs container section-spacing">
        <div className="tab-buttons mb-30">
          <button className="tab-btn active" data-tab="description">
            Description
          </button>
          <button className="tab-btn" data-tab="specs">
            Specifications
          </button>
          <button className="tab-btn" data-tab="docs">
            Documentation
          </button>
        </div>

        <div className="tab-content">
          <div id="description" className="tab-pane active">
            <h3 className="mb-20">Product Description</h3>
            <p className="mb-30">
              The XZ-500 represents the pinnacle of modern agricultural
              machinery, engineered to meet the demanding requirements of
              contemporary farming. This robust tractor combines power,
              efficiency, and operator comfort in a design that's built to last.
            </p>

            <h4 className="mb-20">Engine & Performance</h4>
            <p className="mb-30">
              Powered by a reliable 55 HP diesel engine, the XZ-500 delivers
              consistent performance across various agricultural applications.
              The engine is designed for optimal fuel efficiency while
              maintaining the power needed for heavy-duty tasks.
            </p>

            <h4 className="mb-20">Advanced Features</h4>
            <p>
              The tractor features a state-of-the-art hydraulic system that
              provides precise control for implements and attachments. The 4WD
              system ensures superior traction in challenging field conditions.
            </p>
          </div>

          <div id="specs" className="tab-pane">
            <h3 className="mb-20">Technical Specifications</h3>
            <div className="specs-grid">
              <div className="spec-item">
                <strong className="mb-10">Engine Power:</strong> 55 HP
              </div>
              <div className="spec-item">
                <strong className="mb-10">Drive Type:</strong> 4WD
              </div>
              <div className="spec-item">
                <strong className="mb-10">Fuel Tank:</strong> 65 Liters
              </div>
              <div className="spec-item">
                <strong className="mb-10">Weight:</strong> 2,800 kg
              </div>
              <div className="spec-item">
                <strong className="mb-10">Max Speed:</strong> 35 km/h
              </div>
              <div className="spec-item">
                <strong className="mb-10">Hydraulic Lift:</strong> 1,800 kg
              </div>
            </div>
          </div>

          <div id="docs" className="tab-pane">
            <h3 className="mb-20">Documentation</h3>
            <div className="docs-grid">
              <div className="doc-item">
                <h4 className="mb-10">User Manual</h4>
                <p className="mb-20">
                  Complete operating instructions and maintenance guidelines.
                </p>
                <a href="#" className="download-link">
                  Download PDF
                </a>
              </div>
              <div className="doc-item">
                <h4 className="mb-10">Technical Specifications</h4>
                <p className="mb-20">
                  Detailed technical data and performance specifications.
                </p>
                <a href="#" className="download-link">
                  Download PDF
                </a>
              </div>
              <div className="doc-item">
                <h4 className="mb-10">Parts Catalog</h4>
                <p className="mb-20">
                  Complete parts listing with part numbers and diagrams.
                </p>
                <a href="#" className="download-link">
                  Download PDF
                </a>
              </div>
              <div className="doc-item">
                <h4 className="mb-10">Warranty Information</h4>
                <p className="mb-20">
                  Warranty terms, conditions, and service information.
                </p>
                <a href="#" className="download-link">
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Parts />
    </>
  );
};

export default page;
