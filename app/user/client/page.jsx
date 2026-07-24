"use client";
import React from "react";
import { useState, useEffect } from "react";
export default function Client() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      const userss = data.users;
      setUsers(userss);
      console.log("Data = ", userss);
    }
    fetchUser();
  }, []);

  return (
    <div>
        <h1>User Data (Client Component)</h1>
      {users.map((u) => {
        return <p key={u.id}>First Name: {u.firstName},  Last Name:{u.lastName}</p>;
      })}
    </div>
  );
}
