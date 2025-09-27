"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../tractor-parts.css";
import Features from "@/components/key_features/Features";
import Parts from "@/components/crafting_parts/Parts";
import Link from "next/link";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";

const Page = ({ params }) => {
  const id = params?.parts;
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const [selectedBrand, setSelectedBrand] = useState("all");
  const [activeCategory, setActiveCategory] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  useEffect(() => {
    axios
      .get("https://ajvamotors.com/api/getBrandsBySubCategory/28")
      .then((res) => setBrands(res.data))
      .catch((err) => console.error("Error fetching brands:", err));

    axios
      .get("https://ajvamotors.com/api/getCategoryBySubCategory/28")
      .then((res) => {
        setCategories(res.data);

        const selectedCat = res.data.find(
          (cat) => String(cat.id) === String(id)
        );

        if (selectedCat) {
          setCategoryName(selectedCat.c_name);
          setSelectedBrand(String(selectedCat.brand_id));
          setActiveCategory(String(selectedCat.id));
          fetchProductsByCategory(selectedCat.id);
        }
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, [id]);

  useEffect(() => {
    if (activeCategory && categories.length > 0) {
      const activeCat = categories.find(
        (cat) => String(cat.id) === String(activeCategory)
      );
      if (activeCat) setCategoryName(activeCat.c_name);
    }
  }, [activeCategory, categories]);

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

  const filteredCategories =
    selectedBrand === "all"
      ? categories
      : categories.filter(
          (cat) => String(cat.brand_id) === String(selectedBrand)
        );

  const handleCategoryClick = (catId) => {
    setActiveCategory(String(catId));
    fetchProductsByCategory(catId);
  };

  const handleBrandSelect = (brandId) => {
    setSelectedBrand(brandId);
    if (window.innerWidth <= 770) {
      setSidebarOpen(false);
    }

    if (brandId === "all") {
      if (categories.length > 0) {
        setActiveCategory(String(categories[0].id));
        fetchProductsByCategory(categories[0].id);
      }
    } else {
      const filtered = categories.filter(
        (cat) => String(cat.brand_id) === String(brandId)
      );
      if (filtered.length > 0) {
        setActiveCategory(String(filtered[0].id));
        fetchProductsByCategory(filtered[0].id);
      } else {
        setActiveCategory(null);
        setProducts([]);
      }
    }
  };

  return (
    <>
      <BreadCrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Tractor Parts", href: "/tractor-parts" },
          {
            label: categoryName,
            href: `/tractor-parts/${activeCategory}`,
            active: true,
          },
        ]}
      />

      <section className="container section-spacing">
        <div className="catalog-section-heading mb-30">
          <h1 className="mb-10">Tractor Parts</h1>
          <p>
            Discover our premium selection of Tractor Parts components – quality
            and reliability you can depend on.
          </p>
        </div>

        <div className="main-content">
          <aside className="sidebar">
            <h4
              className="filter-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              Select Tractor Brand
              <i
                className={`fa-solid fa-caret-${sidebarOpen ? "up" : "down"}`}
              ></i>
            </h4>

            <div className={`brand-list ${sidebarOpen ? "active" : ""}`}>
              <div className="brand-item mb-10">
                <input
                  type="checkbox"
                  id="all"
                  checked={selectedBrand === "all"}
                  onChange={() => handleBrandSelect("all")}
                />
                <label htmlFor="all">All</label>
              </div>

              {brands.map((brand) => (
                <div key={brand.id} className="brand-item mb-10">
                  <input
                    type="checkbox"
                    id={`brand-${brand.id}`}
                    checked={selectedBrand === String(brand.id)}
                    onChange={() => handleBrandSelect(String(brand.id))}
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
            <div className="product-sorting">
              <div className="product-category">
                <h4 className="mb-10">Browse by Category</h4>
                <div className="category-grid">
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((cat) => (
                      <div
                        key={cat.id}
                        className={`category-card ${
                          activeCategory === String(cat.id) ? "active" : ""
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
                  <Link
                    key={product.id}
                    href={`/tractor-parts/${activeCategory}/${product.id}`}
                  >
                    <div className="product-card">
                      <img
                        src={`https://ajvamotors.com/upload/product/${product.p_thumbnail}`}
                        alt={product.p_title}
                      />
                      <p>{product.p_title}</p>
                    </div>
                  </Link>
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
