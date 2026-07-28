"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Next.js Practice</h1>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className={`px-3 py-2 rounded-md transition ${
              pathname === "/"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-slate-700"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`px-3 py-2 rounded-md transition ${
              pathname === "/about"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-slate-700"
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`px-3 py-2 rounded-md transition ${
              pathname === "/contact"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-slate-700"
            }`}
          >
            Contact
          </Link>

          <Link
            href="/products"
            className={`px-3 py-2 rounded-md transition ${
              pathname === "/products"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-slate-700"
            }`}
          >
            Products
          </Link>

          <Link
            href="/user"
            className={`px-3 py-2 rounded-md transition ${
              pathname === "/user"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-slate-700"
            }`}
          >
            User
          </Link>

          <Link
            href="/user/client"
            className={`px-3 py-2 rounded-md transition ${
              pathname === "/user/client"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-slate-700"
            }`}
          >
            Client
          </Link>

          <Link
            href="/upload"
            className={`px-3 py-2 rounded-md transition ${
              pathname === "/upload"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-slate-700"
            }`}
          >
            Upload File
          </Link>
          <Link
            href="/search"
            className={`px-3 py-2 rounded-md transition ${
              pathname === "/search"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-slate-700"
            }`}
          >
            Search API
          </Link>

          <Link
            href="/serverAction"
            className={`px-3 py-2 rounded-md transition ${
              pathname === "/serverAction"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-slate-700"
            }`}
          >
            Server Products
          </Link>
          <Link
            href="/login"
            className={`px-3 py-2 rounded-md transition ${
              pathname === "/login"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-slate-700"
            }`}
          >
            Auth Custom Middleware 
          </Link>
          <Link
            href="/sign-in"
            className={`px-3 py-2 rounded-md transition ${
              pathname === "/sign-in"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-slate-700"
            }`}
          >
            Auth CLerk Middleware 
          </Link>
        </div>
      </div>
    </nav>
  );
}
