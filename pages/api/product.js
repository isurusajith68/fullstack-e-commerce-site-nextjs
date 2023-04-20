import { mongooseConnect } from "@/lib/mongose";
import { Product } from "@/models/product";


export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  if (method === "POST") {
    const { title, description, price } = req.body;

    const producrDoc = Product.create({
      title,
      description,
      price,
    });

    res.json(producrDoc);
  }
}
