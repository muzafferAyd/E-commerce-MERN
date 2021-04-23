const express = require('express');
const router = express.Router()
const productController = require("../controllers/productController")

// api/products/


router.post("/addProduct", productController.addProduct);

router.get("/getProduct/:id", productController.getProduct);

router.post("/updateProduct/:id", productController.updateProduct);

router.get("/deleteProduct/:id", productController.deleteProduct);

router.get("/", productController.getProducts);

module.exports = router;