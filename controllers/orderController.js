const orderService = require("../services/orderService");

exports.createOrder = async (req, res) => {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
};

exports.getAllOrders = async (req, res) => {
    const orders = await orderService.getAllOrders();
    res.json(orders);
};

exports.getOrderById = async (req, res) => {
    const order = await orderService.getOrderById(req.params.id);
    res.json(order);
};

exports.updateOrder = async (req, res) => {
    const updatedOrder = await orderService.updateOrder(req.params.id, req.body);
    res.json(updatedOrder);
};

exports.deleteOrder = async (req, res) => {
    await orderService.deleteOrder(req.params.id);
    res.json({ message: "Order deleted" });
};
