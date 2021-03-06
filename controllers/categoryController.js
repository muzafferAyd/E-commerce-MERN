const Category = require("../models/Category");
const { validationResult } = require("express-validator");
const { response } = require("express");

exports.addCategory = async (req, res) => {
  try {
    const { categoryName, description } = req.body;

    //field validation
    const validationErr = validationResult(req);
    if (validationErr?.errors?.length > 0) {
      return res.status(400).json({ errors: validationErr.array() });
    }

    // category exist check
    const existCategory = await Category.findOne({
      categoryName: categoryName,
    });
    // findOne({categoryName:categoryName}) ilk categoryName db den gelen, ikincisi req.body ile geleni temsil eder
    if (existCategory) {
      return res
        .status(400)
        .json({ errors: [{ message: "Category already exists" }] });
    }

    //save category
    const category = new Category({
      categoryName: categoryName,
      description: description,
    });

    //const category = new Category(req.body)
    const addedCategory = await category.save({ new: true });
    //res.status(200).send("Category added")
    res.status(200).json(addedCategory);
  } catch (error) {
    res.status(500).json({ errors: [{ message: error.message }] });
  }
};
exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findById({ _id: req.params.id });
    console.log(req);
    res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ error: [{ message: error.message }] });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    //valdation
    const validatorErr = validationResult(req);
    if (validatorErr?.errors?.length > 0) {
      return res.status(400).json({ errors: validatorErr.array() });
    }

    //update
    const updatedCategory = await Category.findOneAndUpdate(
      { _id: req.body.id },
      {
        // categoryName:req.body.categoryName,
        // description:req.body.description,
        ...req.body,
        status: "updated",
        updatedDate: Date.now(),
      },
      {
        new: true,
        runValidators: true,
      }
    );
    //res.status(200).send('Category updated')
    res.status(200).json(updatedCategory);
  } catch (err) {
    return res.status(500).json({ errors: [{ message: err.message }] });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findOneAndUpdate(
      { _id: req.params.id },
      { status: "deleted", deletedDate: Date.now() },
      { new: true }
    );
    res.status(200).json(deletedCategory);
    //res.status(200).send("Deleted Category")
    console.log(deletedCategory);
  } catch (err) {
    return res.status(500).json({ errors: [{ message: err.message }] });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({})
      .where("status", /[^deleted]/)
      
    // regex ifadesidir. status ?? deleted olanlar?? getirme
    res.status(200).json(categories);
  } catch (err) {
    return res.status(500).json({ errors: [{ message: err.message }] });
  }
};
