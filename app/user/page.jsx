import React from "react";

function getUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        user: [
          { id:1,name: "Aqsa", contact: "12345", age: "22" },
          { id:2,name: "Ishrat", contact: "54321", age: "20" },
          { id:3,name: "Sania", contact: "67891", age: "21" },
        ],
      });
      reject("Cannot Fetch User data");
    }, 3000);
  });
}
export default async function User() {
    const [{user}] = await Promise.all([getUserInfo()]);
    console.log("user", user);
  return <div>
    <h1>User Data</h1>
    {user.map(u =>{
        return <p key={u.id}>{u.name} {u.contact} {u.age}</p>
    })}

  </div>;
}
