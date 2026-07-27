"use client";
import React from "react";
import { useState } from "react";
export default function page() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([""]);

  const [data, setData] = useState([]);

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  async function getProduct() {
    const res = await fetch("http://localhost:3000/api/products");
    const body = await res.json();
    setData(body);
  }
  async function AddProduct() {
    const res = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: product,
      }),
    });
    const data = await res.json();
    console.log(data);

    setProducts([...products, product]);

    setProduct("");
  }

  async function saveUpdate() {
    const res = await fetch("http://localhost:3000/api/products", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: editId,
        name: editName,
        price: editPrice,
      }),
    });

    const result = await res.json();
    console.log(result);

    getProduct(); // Refresh the list

    setEditId(null);
    setEditName("");
    setEditPrice("");
  }

  async function updatePrice() {
    const res = await fetch("http://localhost:3000/api/products", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        price: "120$",
      }),
    });
  }

  async function deleteProduct(id) {
    const res = await fetch("/api/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id
      }),
    });
      getProduct();
  }

  return (
  <div className="min-h-screen bg-gray-100 p-8">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        Product Management
      </h1>

      {/* Get Products */}
      <div className="text-center mb-8">
        <button
          onClick={getProduct}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Get Products
        </button>
      </div>

      {/* Product List */}
      <div className="space-y-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.price}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setEditId(item.id);
                  setEditName(item.name);
                  setEditPrice(item.price);
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
              >
                Update
              </button>

              <button
                onClick={() => deleteProduct(item.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Update Form */}
      {editId && (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-yellow-600">
            Update Product
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              placeholder="Product Name"
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="text"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
              placeholder="Product Price"
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              onClick={saveUpdate}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
            >
              Save Update
            </button>
          </div>
        </div>
      )}

      {/* Add Product */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Add Product
        </h2>

        <div className="flex gap-3">
          <input
            type="text"
            value={product}
            placeholder="Enter product name"
            onChange={(e) => setProduct(e.target.value)}
            className="flex-1 border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={AddProduct}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg"
          >
            Add
          </button>
        </div>
      </div>

      {/* Added Products */}
      {products.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            Recently Added Products
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            {products.map((p, index) => (
              <li key={index} className="text-gray-700">
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);
}
