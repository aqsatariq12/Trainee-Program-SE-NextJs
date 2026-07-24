import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
        <Link href="/">Home</Link> {" | "}
        <Link href="/about">About</Link> {" | "}
        <Link href="/contact">Contact</Link> {" | "}
        <Link href="/products/1">Product</Link>{" | "}
        <Link href="/user">User</Link>{" | "}
        <Link href="/user/client">Client</Link>
    </nav>
  );
}
