import { NextResponse } from "next/server";
const products = [
  { id: 1, name: "Laptop", price: "150$" },
  { id: 2, name: "Mouse", price: "110$" },
  { id: 3, name: "Printer", price: "190$" },
  { id: 4, name: "USB", price: "50$" },
  { id: 5, name: "Keyboard", price: "56$" },
];
export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request) {
  const body = await request.json();
  console.log("item added", body);

  return NextResponse.json({
    message: "Product Added",
    Products: body,
  });
}

export async function PUT(request) {
  const body = await request.json();

  const index = products.findIndex((item) => item.id === body.id);

  if (index === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  products[index] = {
    ...products[index],
    name: body.name,
    price: body.price,
  };

  return NextResponse.json({
    message: "Product updated successfully",
    product: products[index],
  });
}

export async function PATCH(request) {
  const body = await request.json();

  return NextResponse.json({
    message: "Price Updated",
    updatedData: body,
  });
}

export async function DELETE(request) {
  const body = await request.json();
  const index = products.findIndex((item) => item.id === body.id);

  if (index === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
  const deletedProduct = products.splice(index, 1);

  return NextResponse.json({
    message: "Product Deleted successfully",
    product: deletedProduct[0],
  });
}
