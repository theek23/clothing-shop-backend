const Order = require("../models/Order");

class OrderService {
    async createOrder(orderData) {
        return await Order.create(orderData);
    }

    async getOrderById(id) {
        return await Order.findById(id).populate("user").populate("items");
    }

    async getAllOrders() {
        return await Order.find().populate("user");
    }

    async updateOrder(id, updateData) {
        return await Order.findByIdAndUpdate(id, updateData, { new: true });
    }

    async deleteOrder(id) {
        return await Order.findByIdAndDelete(id);
    }
}

module.exports = new OrderService();
