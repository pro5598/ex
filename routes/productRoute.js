const express = require("express");
const {
  getAllProducts,
//   createProduct,
} = require("../controller/productController");

const router = express.Router();
router.use(express.json());
router.get("/products", getAllProducts);
// router.post("/products", createProduct);

module.exports = { router };
