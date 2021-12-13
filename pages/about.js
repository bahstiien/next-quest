import Link from "next/link";
import Layout from "../components/layout";
import Image from "next/image";
import lab from "../public/images/lab.jpg";

export default function about() {
  return (
    <Layout titlePage="About me">
      <p>
        Logoden. Va. Mor. Jiletenn. Am. Tog. Bered. Garantez. Tavarnour. Klask.{" "}
      </p>

      <Image src={lab} layout="responsive" />
    </Layout>
  );
}
