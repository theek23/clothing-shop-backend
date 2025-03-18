const productService = require("../services/productService");

exports.createProduct = async (req, res) => {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
};

exports.getAllProducts = async (req, res) => {
    const products = await productService.getAllProducts();
    res.json(products);
};

exports.getProductById = async (req, res) => {
    const product = await productService.getProductById(req.params.id);
    res.json(product);
};

exports.updateProduct = async (req, res) => {
    const updatedProduct = await productService.updateProduct(req.params.id, req.body);
    res.json(updatedProduct);
};

exports.deleteProduct = async (req, res) => {
    await productService.deleteProduct(req.params.id);
    res.json({ message: "Product deleted" });
};
