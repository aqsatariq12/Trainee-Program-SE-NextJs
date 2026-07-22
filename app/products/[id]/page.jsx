import React from 'react'

export default async function Product( {params }) {
  const resolveParams = await params;
  return (
    <h1>Product ID : {resolveParams.id}</h1>
  );
}
