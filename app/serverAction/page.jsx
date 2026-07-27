import {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} from "./actions";

export default async function Product() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          🛒 Server Actions CRUD
        </h1>

        {/* Add Product */}
        <form action={addProduct} className="flex gap-3 mb-8">
          <input
            type="text"
            name="product"
            placeholder="Enter Product Name"
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </form>

        {/* Product List */}
        <div className="space-y-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="border rounded-lg p-4 bg-gray-50 shadow-sm"
            >
              <form
                action={updateProduct}
                className="flex items-center gap-3"
              >
                <input type="hidden" name="id" value={p.id} />

                <input
                  type="text"
                  name="name"
                  defaultValue={p.name}
                  className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                >
                  Update
                </button>
              </form>

              <form action={deleteProduct} className="mt-3">
                <input type="hidden" name="id" value={p.id} />

                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </form>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
}