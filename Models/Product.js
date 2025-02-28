import mongoose from "mongoose";

const productSchema = new mongoose.Schema({}, { strict: false });

export const Product = mongoose.model("Product", productSchema);