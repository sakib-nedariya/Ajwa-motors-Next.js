import React from "react";
import "./tractor-parts.css";
import Link from "next/link";
import Features from "@/components/key_features/Features";
import Parts from "@/components/crafting_parts/Parts";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";

const page = () => {
  return (
    <>

      <BreadCrumb />

      <section className="container section-spacing">
        <div className="catalog-section-heading mb-60">
          <h1 className="mb-10">Tractor Parts Catalog</h1>
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
                <input type="checkbox" id="eicher" />
                <label htmlFor="eicher">Eicher</label>
                <img src="/images/filter-brand-eicher.png" alt="Eicher" />
              </div>

              <div className="brand-item mb-10">
                <input type="checkbox" id="massey" checked />
                <label htmlFor="massey">Massey</label>
                <img src="/images/filter-brand-messey.png" alt="Massey" />
              </div>

              <div className="brand-item mb-10">
                <input type="checkbox" id="john-deere" />
                <label htmlFor="john-deere">John Deere</label>
                <img
                  src="/images/filter-brand-johndeere.png"
                  alt="John Deere"
                />
              </div>

              <div className="brand-item mb-10">
                <input type="checkbox" id="mahindra" />
                <label htmlFor="mahindra">Mahindra</label>
                <img src="/images/filter-brand-mahindra.png" alt="Mahindra" />
              </div>

              <div className="brand-item mb-10">
                <input type="checkbox" id="ford" />
                <label htmlFor="ford">Ford</label>
                <img src="/images/filter-brand-ford.png" alt="Ford" />
              </div>

              <div className="brand-item">
                <input type="checkbox" id="swaraj" />
                <label htmlFor="swaraj">Swaraj</label>
                <img src="/images/filter-brand-swaraj.png" alt="Swaraj" />
              </div>
            </div>
          </aside>

          <div className="products-section">
            <div className="product-sorting mb-50">
              {/* Category Cards */}
              <div className="product-category">
                <h4 className="mb-10">Browse by Category</h4>
                <div className="category-grid">
                  <div className="category-card active">
                    <img
                      className="category-visual"
                      src="/images/Product-angel-1.jpeg"
                      alt=""
                    />
                    <Link href="#">Engine Parts</Link>
                  </div>
                  <div className="category-card">
                    <img
                      className="category-visual"
                      src="/images/Product-angel-2.jpeg"
                      alt=""
                    />
                    <Link href="#">Transmission</Link>
                  </div>
                  <div className="category-card">
                    <img
                      className="category-visual"
                      src="/images/Product-angel-3.jpeg"
                      alt=""
                    />
                    <Link href="#">Hydraulics</Link>
                  </div>
                  <div className="category-card">
                    <img
                      className="category-visual"
                      src="/images/Product-angel-4.jpeg"
                      alt=""
                    />
                    <Link href="#">Wheels & Tires</Link>
                  </div>
                  <div className="category-card">
                    <img
                      className="category-visual"
                      src="/images/Product-angel-1.jpeg"
                      alt=""
                    />
                    <Link href="#">Electrical</Link>
                  </div>
                </div>
              </div>

              {/*  Search Section */}
              <div className="product-searching">
                <h4 className="mb-10">Search Parts</h4>
                <div className="search-container">
                  <input
                    type="search"
                    className="search-input"
                    placeholder="Search for tractor parts..."
                  />
                  <div className="search-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="products-grid mb-30">
              <div className="product-card">
                <img
                  src="/images/tractor-part-1.png"
                  alt="AM-009 Massey Bonnet"
                />

                <p>AM-009 Massey Bonnet</p>
              </div>

              <div className="product-card">
                <img
                  src="/images/tractor-part-2.png"
                  alt="AM-010 Massey Oil Mudguard Kit"
                />

                <p>AM-010 Massey Oil Mudguard Kit</p>
              </div>

              <div className="product-card">
                <img
                  src="/images/tractor-part-3.png"
                  alt="AM-097 Massey Bonnet Grill"
                />

                <p>AM-097 Massey Bonnet Grill</p>
              </div>

              <div className="product-card">
                <img
                  src="/images/tractor-part-4.png"
                  alt="AM-008 Massey Mudguard O/M"
                />

                <p>AM-008 Massey Mudguard O/M</p>
              </div>

              <div className="product-card">
                <img
                  src="/images/tractor-part-5.png"
                  alt="AM-070 Massey Foot Step Big O/M"
                />

                <p>AM-070 Massey Foot Step Big O/M</p>
              </div>

              <div className="product-card">
                <img
                  src="/images/tractor-part-6.png"
                  alt="AM-096 Massey Mudguard O/M Front With"
                />

                <p>AM-096 Massey Mudguard O/M Front With</p>
              </div>

              <div className="product-card">
                <img
                  src="/images/tractor-part-7.png"
                  alt="AM-008 Massey 2nd Bonnet Grill"
                />

                <p>AM-008 Massey 2nd Bonnet Grill</p>
              </div>

              <div className="product-card">
                <img
                  src="/images/tractor-part-8.png"
                  alt="AM-008 Massey Bonnet Side Panel"
                />

                <p>AM-008 Massey Bonnet Side Panel</p>
              </div>

              <div className="product-card">
                <img
                  src="/images/tractor-part-9.png"
                  alt="AM-008 Massey 3/4 Bonnet Grill Frame"
                />

                <p>AM-008 Massey 3/4 Bonnet Grill Frame</p>
              </div>
            </div>

            <div className="pagination">
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn">4</button>
              <button className="page-btn next">→</button>
            </div>
          </div>
        </div>
      </section>

      {/* cta section */}

      <Parts />

      {/*  key features section */}

      <Features />
    </>
  );
};

export default page;
