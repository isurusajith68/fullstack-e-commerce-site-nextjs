import { model, Schema, models } from "mongoose";

const ModelSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
});

export const Product = models.Product || model("Product", ModelSchema);
