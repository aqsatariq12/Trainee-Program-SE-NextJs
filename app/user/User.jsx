import React from "react";

function getUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        user: [
          { id: 1, name: "Aqsa", contact: "12345", age: "22" },
          { id: 2, name: "Ishrat", contact: "54321", age: "20" },
          { id: 3, name: "Sania", contact: "67891", age: "21" },
        ],
      });
    }, 3000);
  });
}
function getProductInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        product: [
          { id: 1, name: "Laptop" },
          { id: 2, name: "Mouse" },
          { id: 3, name: "Printer" },
        ],
      });
    }, 2000);
  });
}
export default async function User() {
  const [{ user }, { product }] = await Promise.all([
    getUserInfo(),
    getProductInfo(),
  ]);
  console.log("user", user);
  console.log("product", product);
  return (
    <div>
      <h1>User Data (Server Component)</h1>
      <h1>USERS</h1>

      {user.map((u) => {
        return (
          <p key={u.id}>
            {u.name} {u.contact} {u.age}
          </p>
        );
      })}

      <h1>Products</h1>

      {product.map((p) => {
        return <p key={p.id}>{p.name}</p>;
      })}
    </div>
  );
}
