"use client";

import React, { useEffect, useState, use } from "react";
import axios from "axios";

const Page = ({ params }) => {
  const { id } = use(params); 
  const [categoryData, setCategoryData] = useState(null);
  console.log(categoryData)

  useEffect(() => {
    if (id) {
      const fetchCategory = async () => {
        try {
          const res = await axios.get(
            `https://ajvamotors.com/api/getProductByModalId/${id}`
          );
          setCategoryData(res.data);
        } catch (err) {
          console.error("Error fetching category:", err);
        }
      };

      fetchCategory();
    }
  }, [id]);

  return (
    <div>
      <h1>Category Page</h1>
      <p>Category ID: {id}</p>

      {categoryData ? (
        <pre>{JSON.stringify(categoryData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
