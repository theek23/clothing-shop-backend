const paymentService = require("../services/paymentService");

exports.createPayment = async (req, res) => {
    const payment = await paymentService.createPayment(req.body);
    res.status(201).json(payment);
};

exports.getPaymentById = async (req, res) => {
    const payment = await paymentService.getPaymentById(req.params.id);
    res.json(payment);
};
