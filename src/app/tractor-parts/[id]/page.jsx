"use client";

import React, { useEffect, useState, use } from "react";
import axios from "axios";
import "../tractor-parts.css";
import Features from "@/components/key_features/Features";
import Parts from "@/components/crafting_parts/Parts";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Link from "next/link";

const Page = ({ params }) => {
  const { id } = use(params);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [activeCategory, setActiveCategory] = useState(null);

  // Fetch all brands
  useEffect(() => {
    const getBrands = async () => {
      try {
        const res = await axios.get(
          "https://ajvamotors.com/api/getBrandsBySubCategory/28"
        );
        setBrands(res.data);
      } catch (err) {
        console.error("Error fetching brands:", err);
      }
    };
    getBrands();
  }, []);

  // Fetch all categories for the page
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          "https://ajvamotors.com/api/getCategoryBySubCategory/28"
        );
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    getCategories();
  }, []);

  // Fetch products for a category id
  const fetchProductsByCategory = async (catId) => {
    try {
      const res = await axios.get(
        `https://ajvamotors.com/api/getProductByModalId/${catId}`
      );
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setProducts([]);
    }
  };

  // When page loads with model id
  useEffect(() => {
    if (id) {
      fetchProductsByCategory(id);
      // Set selected brand based on first product's brand
      axios
        .get(`https://ajvamotors.com/api/getProductByModalId/${id}`)
        .then((res) => {
          if (res.data.length > 0) {
            setSelectedBrand(String(res.data[0].p_brand_id));
          } else {
            setSelectedBrand("all");
          }
        });
    }
  }, [id]);

  // Filter categories based on selected brand
  const filteredCategories =
    selectedBrand === "all"
      ? categories
      : categories.filter(
          (cat) => String(cat.brand_id) === String(selectedBrand)
        );

  // Default first category active if none selected
  useEffect(() => {
    if (filteredCategories.length > 0 && !activeCategory) {
      setActiveCategory(filteredCategories[0].id);
      fetchProductsByCategory(filteredCategories[0].id);
    }
  }, [filteredCategories, activeCategory]);

  // Handle category click
  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    fetchProductsByCategory(catId);
  };

  return (
    <>
      <BreadCrumb />

      <section className="container section-spacing">
        <div className="catalog-section-heading mb-60">
          <h1 className="mb-10">Products Catalogue</h1>
          <p>Browse spare parts by brand or view all products below.</p>
        </div>

        <div className="main-content">
          {/* Sidebar for brands */}
          <aside className="sidebar">
            <h4 className="filter-toggle">
              Select Tractor Brand
              <i className="fa-solid fa-caret-down"></i>
            </h4>

            <div className="brand-list">
              <div className="brand-item mb-10">
                <input
                  type="checkbox"
                  id="all"
                  checked={selectedBrand === "all"}
                  onChange={() => {
                    setSelectedBrand("all");
                    setActiveCategory(null);
                  }}
                />
                <label htmlFor="all">All</label>
              </div>

              {brands.map((brand) => (
                <div key={brand.id} className="brand-item mb-10">
                  <input
                    type="checkbox"
                    id={`brand-${brand.id}`}
                    checked={selectedBrand === String(brand.id)}
                    onChange={() => {
                      setSelectedBrand(String(brand.id));
                      setActiveCategory(null); // reset category
                    }}
                  />
                  <label htmlFor={`brand-${brand.id}`}>{brand.b_name}</label>
                  <img
                    src={`https://ajvamotors.com/upload/brand/${brand.b_image}`}
                    alt={brand.b_name}
                  />
                </div>
              ))}
            </div>
          </aside>

          {/* Products section */}
          <div className="products-section" style={{ overflow: "hidden" }}>
            <div className="product-sorting">
              {/* Category Cards */}
              <div className="product-category">
                <h4 className="mb-10">Browse by Category</h4>
                <div className="category-grid">
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((cat) => (
                      <div
                        key={cat.id}
                        className={`category-card ${
                          activeCategory === cat.id ? "active" : ""
                        }`}
                        onClick={() => handleCategoryClick(cat.id)}
                      >
                        <img
                          className="category-visual"
                          src={`https://ajvamotors.com/upload/category/${cat.c_image}`}
                          alt={cat.c_name}
                        />
                        <Link href="#">{cat.c_name}</Link>
                      </div>
                    ))
                  ) : (
                    <p>No categories found.</p>
                  )}
                </div>
              </div>
            </div>

            <div className="products-grid mb-30">
              {products.length > 0 ? (
                products.map((product) => (
                  <div key={product.id} className="product-card">
                    <img
                      src={`https://ajvamotors.com/upload/product/${product.p_thumbnail}`}
                      alt={product.p_title}
                    />
                    <p>{product.p_title}</p>
                  </div>
                ))
              ) : (
                <p>No products found for this modal.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <Parts />
      <Features />
    </>
  );
};

export default Page;
