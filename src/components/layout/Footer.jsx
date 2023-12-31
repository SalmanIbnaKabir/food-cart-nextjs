import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container px-6 py-6 mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">
            Copyright &copy; {year} Food Cart | All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <Link href="/menu" className="hover:text-gray-300">
            Menu
          </Link>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
