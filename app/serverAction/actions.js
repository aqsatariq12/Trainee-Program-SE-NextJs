"use server";
import { revalidatePath } from "next/cache";

let product = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
];
export async function addProduct(formData) {
  const name = formData.get("product");

  product.push({
    id: Date.now(),
    name,
  });
  revalidatePath("/");
}

export async function getProducts() {
  return product;
}

export async function deleteProduct(formData) {
  const id = Number(formData.get("id"));
  product = product.filter((p) => p.id !== id);
  revalidatePath("/");
}

export async function updateProduct(formData) {
  const id = Number(formData.get("id"));
  const name = formData.get("name");

  const index = product.findIndex((p) => p.id === id);

  if (index !== -1) {
    product[index].name = name;
  }

  revalidatePath("/");
}