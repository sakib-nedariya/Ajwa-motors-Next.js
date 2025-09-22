import React from "react";

const BreadCrumb = () => {
  return (
    <>
      <div className="breadcrumb-section">
        <nav className="breadcrumb container" aria-label="Breadcrumb">
          <a href="#">Home</a>
          <span className="breadcrumb-separator">/</span>
          <a href="#">Products</a>
          <span className="breadcrumb-separator">/</span>
          <a href="#">Tractors</a>
          <span className="breadcrumb-separator">/</span>
          <a href="#">Model XZ-500</a>
        </nav>
      </div>
    </>
  );
};

export default BreadCrumb;
