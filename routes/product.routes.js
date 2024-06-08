const express = require("express");
const router = express.Router();
const {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller.js");

//read products api
router.get("/", getProducts);

//read product api
router.get("/:id", getProduct);

//create product api
router.post("/", createProduct);

//update product api
router.put("/:id", updateProduct);

//delete product api
router.delete("/:id", deleteProduct);

module.exports = router;
