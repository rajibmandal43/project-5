import { Product } from "../Models/Product.js";

// add product
export const addProduct = async (req, res) => {
  try {
    let product = await Product.create(req.body);
    res.json({ message: "Product added successfully", product, success: true });
  } catch (error) {
    res.json(error.message);
  }
};

// get all product
export const getAllProducts = async (req, res) => {
  try {
    let products = await Product.find();
    if (!products)
      return res.json({ message: "No Product found", success: false });

    res.json({ message: "Fetched all products", products, success: true });
  } catch (error) {
    res.json(error.message);
  }
};

// get product by id
export const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    let product = await Product.findById(id);
    if (!product) return res.json({ message: "Invalid Id", success: false });

    res.json({ message: "Fetched Specific Product", product, success: true });
  } catch (error) {
    res.json(error.message);
  }
};

// update product by id
export const updateProductById = async (req, res) => {
  const id = req.params.id;
  try {
    let product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!product) return res.json({ message: "Invalid Id", success: false });

    res.json({
      message: "Product updated Successfully",
      product,
      success: true,
    });
  } catch (error) {
    res.json(error.message);
  }
};

// delete product by id
export const deleteProductById = async (req, res) => {
  const id = req.params.id;
  try {
    let product = await Product.findByIdAndDelete(id);
    if (!product) return res.json({ message: "Invalid Id", success: false });

    res.json({
      message: "Product has been deleted Successfully",
      success: true,
    });
  } catch (error) {
    res.json(error.message);
  }
};