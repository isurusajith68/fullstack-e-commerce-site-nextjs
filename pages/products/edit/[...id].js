import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductForm from "@/components/ProductForm";
export default function EditProductId() {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  // console.log(id)
 
 useEffect(() => {
   if (!id) {
     return;
   }
   axios.get("/api/product?id=" + id).then((response) => {
     setProductInfo(response.data);
   });
 }, [id]); // Only re-run the effect if id changes

console.log(productInfo)
  return (
    <Layout>
      <h1>Edit product</h1>
      {productInfo && <ProductForm {...productInfo} />}
    </Layout>
  );
}
