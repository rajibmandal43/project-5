import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    require: true,
  },
  title: { type: String, require: true },
  price: { type: Number, require: true },
  qty: { type: Number, require: true },
});


const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  items:[cartItemSchema]
}); 

export const Cart = mongoose.model('Cart',cartSchema)