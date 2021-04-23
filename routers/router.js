const express = require('express');
const router = express.Router()

const categoryRouter = require("./categoryRouter")
const productRouter = require("./productRouter")

router.use("/categories", categoryRouter);
router.use("/products", productRouter);


module.exports = router