"use client";
import Parts from "@/components/crafting_parts/Parts";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product-detail.css";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";

const Page = ({ params }) => {
  const { parts, id } = params;
  const [product, setProduct] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [specs, setSpecs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingSpecs, setLoadingSpecs] = useState(true);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    axios
      .get(`https://ajvamotors.com/api/getProductById/${id}`)
      .then((res) => setProduct(res.data))
      .finally(() => setLoading(false));

    axios
      .get(`https://ajvamotors.com/api/getProductSpecificationById/${id}`)
      .then((res) => setSpecs(res.data || []))
      .finally(() => setLoadingSpecs(false));

    axios
      .get("https://ajvamotors.com/api/getCategoryBySubCategory/28")
      .then((res) => {
        const cat = res.data.find((c) => String(c.id) === String(parts));
        if (cat) {
          setCategoryName(cat.c_name);
        }
      });
  }, [id, parts]);

  if (loading) return <p className="container section-spacing">Loading...</p>;
  if (!product)
    return <p className="container section-spacing">Product not found</p>;

  return (
    <>
      <BreadCrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Tractor Parts", href: "/tractor-parts" },
          { label: categoryName, href: `/tractor-parts/${parts}` },
          {
            label: product.p_title,
            href: `/tractor-parts/${parts}/${id}`,
          },
        ]}
      />

      <div className="container section-spacing">
        <div className="flex-row">
          {/* Product Image */}
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

          {/* Product Info */}
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

      {/* Tabs */}
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
            <div id="description" className="tab-pane">
              <div
                dangerouslySetInnerHTML={{
                  __html: product?.p_long_desc || "Description not available.",
                }}
              />

              {product?.suitable_key && product?.suitable_value && (
                <div style={{ margin: "40px 0" }}>
                  <h2 className="mb-20">Suitable For Make/Model</h2>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <strong className="mb-10">{product.suitable_key}</strong>
                      <span> {product.suitable_value}</span>
                    </div>
                  </div>
                </div>
              )}

              {product?.oem_key && product?.oem_value && (
                <div style={{ margin: "40px 0" }}>
                  <h2 className="mb-20">OEM Part Numbers</h2>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <strong className="mb-10">{product.oem_key}</strong>
                      <span> {product.oem_value}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "specs" && (
            <div id="specs" className="tab-pane">
              {loadingSpecs ? (
                <p>Loading specifications...</p>
              ) : specs.length > 0 ? (
                <div className="specs-grid">
                  {specs.map((item, index) => (
                    <div className="spec-item" key={index}>
                      <strong className="mb-10">{item.specification}:</strong>
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
