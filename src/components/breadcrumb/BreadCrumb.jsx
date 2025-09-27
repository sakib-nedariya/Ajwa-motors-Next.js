"use client";
import React from "react";
import Link from "next/link";

const BreadCrumb = ({ items = [] }) => {
  return (
    <div className="breadcrumb-section">
      <nav className="breadcrumb container" aria-label="Breadcrumb">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.href ? (
              <Link href={item.href} className={item.active ? "active" : ""}>
                {item.label}
              </Link>
            ) : (
              <span className="active">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="breadcrumb-separator">/</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default BreadCrumb;
