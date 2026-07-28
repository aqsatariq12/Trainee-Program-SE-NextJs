"use client";

import { useState, useEffect } from "react";

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");

  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function searchProducts() {

        const response = await fetch(`/api/search?q=${keyword}`);

        const data = await response.json();

        setProducts(data);
    }

    searchProducts();

}, [keyword]);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Product Search</h1>

      <input
        type="text"
        placeholder="Search..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <div className="mt-5">
        {products.map((product) => (
          <div key={product.id} className="border p-3 rounded mb-2">
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
}
