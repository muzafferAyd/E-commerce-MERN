const express = require('express');
const router = express.Router()
const categoryController = require("../controllers/categoryController")
const validations = require("../middleware/validationMiddleware")

// api/categories


router.post("/addCategory", validations.categoryValidation , categoryController.addCategory);


router.get("/getCategory/:id", categoryController.getCategory)

router.post("/updateCategory", validations.categoryValidation, categoryController.updateCategory)

router.get("/deleteCategory/:id", categoryController.deleteCategory)


router.get("/" , categoryController.getCategories);

module.exports = router;
