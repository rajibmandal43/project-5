import express from "express";
import {
  addProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../Controllers/product.js";

const router = express.Router();

// add Product
// @api - /api/product/add
router.post("/add", addProduct);

// get all products
router.get("/all", getAllProducts);

// get product by id
router.get("/:id", getProductById);

// update product by id
router.put('/:id',updateProductById)

// delete product by id
router.delete('/:id',deleteProductById)

export default router;