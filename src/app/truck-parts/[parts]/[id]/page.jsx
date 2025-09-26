"use client";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Parts from "@/components/crafting_parts/Parts";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product-detail.css";

const Page = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [specs, setSpecs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingSpecs, setLoadingSpecs] = useState(true);
  const [activeTab, setActiveTab] = useState("description"); 

  useEffect(() => {
    if (id) {
      axios
        .get(`https://ajvamotors.com/api/getProductById/${id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.error("Error product:", err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://ajvamotors.com/api/getProductSpecificationById/${id}`)
        .then((res) => setSpecs(res.data || []))
        .catch((err) => console.error("Error specs:", err))
        .finally(() => setLoadingSpecs(false));
    }
  }, [id]);

  if (loading) return <p className="container section-spacing">Loading...</p>;
  if (!product)
    return <p className="container section-spacing">Product not found</p>;

  return (
    <>
      <BreadCrumb />

      <div className="product-section container section-spacing">
        <div className="flex-row">
          <div className="product-image">
            <img
              className="mb-30"
              src={`https://ajvamotors.com/upload/product/${product.p_thumbnail}`}
              alt={product.p_title}
            />
            <div className="more-images">
              {[product.p_thumbnail].map((img, idx) => (
                <img
                  key={idx}
                  src={`https://ajvamotors.com/upload/product/${img}`}
                  alt={product.p_title}
                />
              ))}
            </div>
          </div>

          <div className="product-info">
            <h1 className="mb-20">{product.p_title}</h1>
            <div className="price mb-20">{product.brand_name}</div>

            <div className="features mb-30">
              <p
                dangerouslySetInnerHTML={{
                  __html: product.p_short_desc || "Description not available.",
                }}
              ></p>
            </div>

            <div className="buttons">
              <button className="primary-btn">
                <a href="/contact">Get Quote</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs container section-spacing">
        <div className="tab-buttons mb-30">
          <button
            className={`tab-btn ${activeTab === "description" ? "active" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`tab-btn ${activeTab === "specs" ? "active" : ""}`}
            onClick={() => setActiveTab("specs")}
          >
            Specifications
          </button>
        </div>

        <div className="tab-content">
          <h3 className="mb-20">
            {activeTab === "description"
              ? "Product Description"
              : "Specifications"}
          </h3>

          {activeTab === "description" && (
            <div
              dangerouslySetInnerHTML={{
                __html: product.p_long_desc || "Description not available.",
              }}
            />
          )}

          {activeTab === "specs" && (
            <div id="specs" className="tab-pane">
              {loadingSpecs ? (
                <p>Loading specifications...</p>
              ) : specs.length > 0 ? (
                <div className="specs-grid">
                  {specs.map((item, index) => (
                    <div className="spec-item" key={index}>
                      <strong className="mb-10">{item.specification}:</strong>{" "}
                      {item.specification_value || "N/A"}
                    </div>
                  ))}
                </div>
              ) : (
                <p>Specifications not available.</p>
              )}
            </div>
          )}
        </div>
      </div>

      <Parts />
    </>
  );
};

export default Page;
