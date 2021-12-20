import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/"> Home </Link>
      <Link href="/about"> About </Link>
      <Link href="/terms"> Terms </Link>
      <Link href="/campuses"> Campus</Link>
      <Link href="/articles"> Articles</Link>
      <Link href="/sansRhf"> Sans react</Link>
    </div>
  );
};

export default Navbar;
