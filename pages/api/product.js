import { mongooseConnect } from "@/lib/mongose";
import { Product } from "@/models/product";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find());
    }
  }

  if (method === "POST") {
    const { title, description, price } = req.body;

    const producrDoc = Product.create({
      title,
      description,
      price,
    });

    res.json(producrDoc);
  }

  if (method === "PUT") {
     const { title, description, price, _id } =
       req.body;
     await Product.updateOne(
       { _id },
       {  title, description, price, _id }
     );
     res.json(true);
  }

    if (method === "DELETE") {
       if (req.query?.id) {
        await Product.deleteOne({_id:req.query?.id})
        res.json(true);
       }
    }
}
