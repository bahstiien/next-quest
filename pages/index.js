import Link from "next/link";
// import { useEffect } from "react";

export default function IndexPage() {
  // useEffect(() => {
  //   console.log("index page did mounted");
  // }, []);
  return (
    <div>
      <Link href="/"> Home </Link>
      <Link href="/about"> About </Link>
      <Link href="/terms"> Terms </Link>
      <h1> Welcome in Next App </h1>
    </div>
  );
}
