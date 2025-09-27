// models/ProductModel.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  video: { type: String }, // Optional video link
 // ✅ Added YouTube video link field
}, { timestamps: true });

const ProductModel = mongoose.models.product || mongoose.model('product', productSchema);

export default ProductModel;
