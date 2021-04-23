const express = require('express');
const router = express.Router()
const categoryController = require("../controllers/categoryController")

// api/categories


router.post("/addCategory", categoryController.addCategory);


router.get("/getCategory/:id", categoryController.getCategory)

router.post("/updateCategory", categoryController.updateCategory)

router.get("/deleteCategory/:id", categoryController.deleteCategory)


router.get("/" , categoryController.getCategories);

module.exports = router;
