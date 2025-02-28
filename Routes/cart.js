import express from "express";
import {
  addToCart,
  clearCart,
  decreaseProductQty,
  removeProductFromCart,
  userCart,
} from "../Controllers/cart.js";
import { isAuthenticated } from "../Middlewares/Auth.js";

const router = express.Router();

// add to cart
// @api - /api/cart/add
router.post("/add", isAuthenticated, addToCart);

// retrive user cart
router.get("/user", isAuthenticated, userCart);

// remove product from cart
router.delete("/remove/:productId",isAuthenticated, removeProductFromCart);


// decrease qty
router.post('/--qty',isAuthenticated,decreaseProductQty)

// delete all product
router.delete('/clear',isAuthenticated,clearCart)

export default router;