import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Next.js Practice</h1>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md transition"
          >
            Contact
          </Link>

          <Link
            href="/products"
            className="text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md transition"
          >
            Products
          </Link>

          <Link
            href="/user"
            className="text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md transition"
          >
            User
          </Link>

          <Link
            href="/user/client"
            className="text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md transition"
          >
            Client
          </Link>

          <Link
            href="/upload"
            className="text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md transition"
          >
            Upload File
          </Link>
          <Link
            href="/search"
            className="text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md transition"
          >
            Search API
          </Link>

          <Link
            href="/serverAction"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Server Products
          </Link>
        </div>
      </div>
    </nav>
  );
}
