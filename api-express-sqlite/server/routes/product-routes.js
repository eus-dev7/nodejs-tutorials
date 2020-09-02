// Import express
const express = require("express");

const productController = require("./../controllers/productController.js");

const router = express.Router();

router.get("/list", productController.productsList);

router.post("/create", productController.productsCreate);

router.post("/update", productController.productsUpdate);

router.put("/delete", productController.productsDelete);

module.exports = router;
