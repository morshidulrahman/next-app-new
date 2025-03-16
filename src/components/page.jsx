import Link from "next/link";
import React from "react";
function Navbar() {
  return (
    <div className="container mx-auto px-4 py-3">
      <ul className="flex gap-3">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/price">Price</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/post">post</Link>
      </ul>
    </div>
  );
}

export default Navbar;
