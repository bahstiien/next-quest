import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-yellow-400">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title lang="fr">Create Next App</title>
      </Head>
      <h2> Next-app</h2>
      <Navbar />
    </div>
  );
};

export default Header;
