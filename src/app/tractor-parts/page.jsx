"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./tractor-parts.css";
import Link from "next/link";
import Features from "@/components/key_features/Features";
import Parts from "@/components/crafting_parts/Parts";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";

const Page = () => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("all");

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

    getBrands();
    getCategories();
  }, []);

  const filteredCategories =
    selectedBrand === "all"
      ? categories
      : categories.filter((cat) => String(cat.brand_id) === selectedBrand);

  return (
    <>
      <BreadCrumb />

      <section className="container section-spacing">
        <div className="catalog-section-heading mb-60">
          <h1 className="mb-10">Tractor Parts Catalogue</h1>
          <p>
            Discover our premium selection of tractor components – quality and
            reliability you can depend on.
          </p>
        </div>

        <div className="main-content">
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
                  onChange={() => setSelectedBrand("all")}
                />
                <label htmlFor="all">All</label>
              </div>

              {brands.map((brand) => (
                <div key={brand.id} className="brand-item mb-10">
                  <input
                    type="checkbox"
                    id={`brand-${brand.id}`}
                    checked={selectedBrand === String(brand.id)}
                    onChange={() => setSelectedBrand(String(brand.id))}
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

          <div className="products-section">
            <div className="products-grid mb-30">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat) => (
                  <Link key={cat.id} href={`/tractor-parts/${cat.id}`}>
                    <div className="product-card">
                      <img
                        src={`https://ajvamotors.com/upload/category/${cat.c_image}`}
                        alt={cat.c_name}
                      />
                      <p>{cat.c_name}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No categories found for selected brand.</p>
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
