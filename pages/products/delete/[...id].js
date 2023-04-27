import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductDelete() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState({});

  function goBack() {
    router.push("/products");
  }

 async function deleteproduct(){
    await axios.delete("/api/product?id=" + id).then((response) => {
      router.push("/products");
    });
 }
  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get("/api/product?id=" + id).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  return (
    <Layout>
      <h1>
        Do You Want to Delete Products
        <span className="ml-3 text-red-500">{product?.title}?</span>{" "}
      </h1>
      <div className="gap-3 flex">
        <button className="bg-red-600 p-2 w-[100px] text-white font-bold" onClick={deleteproduct}>
          Yes
        </button>
        <button
          onClick={goBack}
          className="bg-blue-600 p-2 w-[100px] text-white font-bold"
        >
          {" "}
          No
        </button>
      </div>
    </Layout>
  );
}
