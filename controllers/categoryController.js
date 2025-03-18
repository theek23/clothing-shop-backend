const categoryService = require("../services/categoryService");

exports.createCategory = async (req, res) => {
    const category = await categoryService.createCategory(req.body);
    res.status(201).json(category);
};

exports.getAllCategories = async (req, res) => {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
};

exports.getCategoryById = async (req, res) => {
    const category = await categoryService.getCategoryById(req.params.id);
    res.json(category);
};

exports.updateCategory = async (req, res) => {
    const updatedCategory = await categoryService.updateCategory(req.params.id, req.body);
    res.json(updatedCategory);
};

exports.deleteCategory = async (req, res) => {
    await categoryService.deleteCategory(req.params.id);
    res.json({ message: "Category deleted" });
};
