const Product = require("../models/Product");

class ProductService {
    async createProduct(productData) {
        return await Product.create(productData);
    }

    async getProductById(id) {
        return await Product.findById(id).populate("category");
    }

    async getAllProducts() {
        return await Product.find().populate("category");
    }

    async updateProduct(id, updateData) {
        return await Product.findByIdAndUpdate(id, updateData, { new: true });
    }

    async deleteProduct(id) {
        return await Product.findByIdAndDelete(id);
    }
}

module.exports = new ProductService();
