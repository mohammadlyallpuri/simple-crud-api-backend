const Product = require("../models/product.model.js");

const getProducts = async (req, res) => {
  try {
    // Fetching all products from the database
    const products = await Product.find();
    // Sending a response with the products and a 200 status code
    res.status(200).json(products);
  } catch (error) {
    // Sending a response with the error message and a 500 status code
    res.status(500).json({ message: error.message });
  }
};

//single product
const getProduct = async (req, res) => {
  try {
    // Extracting the 'id' parameter from the request
    const { id } = req.params;
    // Fetching the product with the provided id from the database
    const product = await Product.findById(id);
    // Sending a response with the product and a 200 status code
    res.status(200).json(product);
  } catch (error) {
    // Sending a response with the error message and a 500 status code
    res.status(500).json({ message: error.message });
  }
};

//write comments
// Create a new product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    // Sending a response with the created product and a 200 status code
    res.status(200).json(product);
  } catch (error) {
    // Sending a response with the error message and a 500 status code
    res.status(500).json({ message: error.message });
  }
};

//update product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updateProduct = await Product.fin;

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete product

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
    deleteProduct,
};
