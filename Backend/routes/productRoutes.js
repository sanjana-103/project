import express from "express";
import { addProduct, listProduct, removeProduct, SingleProduct,searchProduct } from "../Controller/ProductController.js";
import UploadStream from "../middleware/multer.js"; // ✅ Make sure this exists and is correctly set up
import adminAuth from "../middleware/adminAuth.js";


const productRoutes = express.Router();

// ✅ Routes
productRoutes.post("/add", UploadStream.single("image"),adminAuth, addProduct);
productRoutes.get("/list", listProduct);
productRoutes.delete("/remove/:id", adminAuth, removeProduct);

productRoutes.get("/single/:id", SingleProduct); // ✅ Fix dynamic ro

productRoutes.get("/search", searchProduct);


export default productRoutes; // ✅ Missing export
