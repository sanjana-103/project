import ProductModel from "../models/ProductModels.js";
import cloudinary from "../Config/Cloudinary.js";

const addProduct = async (req, res) => {
  try {
    const { name, category, date, ingredients, instructions, videoLink } = req.body;
    const imageFile = req.file;

    if (!imageFile) {
      return res.json({ success: false, message: "Please upload an image" });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    // Parse ingredients if coming as a comma-separated string
    const parsedIngredients = Array.isArray(ingredients)
      ? ingredients
      : ingredients.split(',').map(item => item.trim());

    const productData = {
      name,
      image: result.secure_url,
      category,
      date: date ? new Date(date) : undefined,
      ingredients: parsedIngredients,
      instructions,
      videoLink: videoLink || "", // Optional YouTube video link
    };

    console.log("Adding Product:", productData);

    const product = new ProductModel(productData);
    await product.save();

    res.json({ success: true, message: "Added successfully", product });
  } catch (error) {
    console.error("Add Product Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const listProduct = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const SingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const searchProduct = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ success: false, message: "No search query provided" });
    }

    const products = await ProductModel.find({
      name: { $regex: query, $options: "i" } // case-insensitive search
    });

    res.json({ success: true, products });
  } catch (error) {
    console.error("Search Product Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export {
  addProduct,
  listProduct,
  removeProduct,
  SingleProduct,
  searchProduct
};
