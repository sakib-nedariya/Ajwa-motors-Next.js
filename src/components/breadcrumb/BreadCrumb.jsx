import React from "react";

const BreadCrumb = () => {
  return (
    <>
      <div class="breadcrumb-section">
        <nav class="breadcrumb container" aria-label="Breadcrumb">
          <a href="#">Home</a>
          <span class="breadcrumb-separator">/</span>
          <a href="#">Products</a>
          <span class="breadcrumb-separator">/</span>
          <a href="#">Tractors</a>
          <span class="breadcrumb-separator">/</span>
          <a href="#">Model XZ-500</a>
        </nav>
      </div>
    </>
  );
};

export default BreadCrumb;
