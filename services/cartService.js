const Cart = require("../models/Cart");

class CartService {
    async createCart(cartData) {
        return await Cart.create(cartData);
    }

    async getCartByUser(userId) {
        return await Cart.findOne({ user: userId }).populate("items.product");
    }

    async updateCart(userId, updateData) {
        return await Cart.findOneAndUpdate({ user: userId }, updateData, { new: true });
    }

    async deleteCart(userId) {
        return await Cart.findOneAndDelete({ user: userId });
    }
}

module.exports = new CartService();
