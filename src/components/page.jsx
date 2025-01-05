"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  return (
    <div className="container mx-auto px-4 py-3">
      <ul className="flex gap-3">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/price">Price</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </div>
  );
}

export default Navbar;
