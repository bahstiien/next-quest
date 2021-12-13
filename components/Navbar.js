import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/"> Home </Link>
      <Link href="/about"> About </Link>
      <Link href="/terms"> Terms </Link>
    </div>
  );
};

export default Navbar;
