import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

export default function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function createProduct() {
    const data = { title, description, price };
    await axios.post("/api/product", data);
  }
  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>Add New Products</h1>
        <label>Product Name</label>
        <input
          type="text"
          placeholder="product name"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <label>Description</label>
        <textarea
          placeholder="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <label>Price</label>
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        />
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  );
}
