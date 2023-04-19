import Layout from "@/components/Layout";
import Link from "next/link";
export default function Products() {
  return (
    <Layout>
      <Link
        className="bg-blue-900 p-2 text-white rounded-lg"
        href={"/products/new"}
      >
        Add Products
      </Link>
    </Layout>
  );
}
