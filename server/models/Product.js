const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  price: { type: Number, required: true, min: 0.01 },
  ingredients: { type: [String], required: true },
  isDogFood: { type: Boolean, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
