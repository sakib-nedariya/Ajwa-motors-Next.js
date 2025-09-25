"use client";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Parts from "@/components/crafting_parts/Parts";
import React, { useEffect, useState, use } from "react";
import axios from "axios";
import "./product-detail.css";

const Page = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    if (id) {
      axios
        .get(`https://ajvamotors.com/api/getProductById/${id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.error("Error:", err))
        .finally(() => setLoading(false));
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
                  __html: product.p_short_desc || "No description available.",
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
          <button className="tab-btn active" data-tab="description">
            Description
          </button>
          <button className="tab-btn" data-tab="specs">
            Specifications
          </button>
        </div>

        <div className="tab-content">
          <div
            className="mb-30"
            dangerouslySetInnerHTML={{
              __html:
                product.p_long_desc || "No detailed description available.",
            }}
          />

          <div id="specs" className="tab-pane">
            <h3 className="mb-20">Technical Specifications</h3>
            <div className="specs-grid">
              <div className="spec-item">
                <strong className="mb-10">Brand:</strong> {product.brand_name}
              </div>
              <div className="spec-item">
                <strong className="mb-10">Category ID:</strong>{" "}
                {product.p_category_id}
              </div>
              <div className="spec-item">
                <strong className="mb-10">OEM:</strong>{" "}
                {product.oem_value || "N/A"}
              </div>
              <div className="spec-item">
                <strong className="mb-10">Suitable For:</strong>{" "}
                {product.suitable_value || "N/A"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Parts />
    </>
  );
};

export default Page;
