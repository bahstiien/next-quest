import Link from "next/link";
import Layout from "../components/layout";
// import { useEffect } from "react";

export default function IndexPage() {
  // useEffect(() => {
  //   console.log("index page did mounted");
  // }, []);
  return (
    <Layout>
      <div>
        <h1> Welcome in Next App </h1>
      </div>
    </Layout>
  );
}
