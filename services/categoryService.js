const Category = require("../models/category");

class CategoryService {
    async createCategory(categoryData) {
        return await Category.create(categoryData);
    }

    async getCategoryById(id) {
        return await Category.findById(id);
    }

    async getAllCategories() {
        return await Category.find();
    }

    async updateCategory(id, updateData) {
        return await Category.findByIdAndUpdate(id, updateData, { new: true });
    }

    async deleteCategory(id) {
        return await Category.findByIdAndDelete(id);
    }
}

module.exports = new CategoryService();