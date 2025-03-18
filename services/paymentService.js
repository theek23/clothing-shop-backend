const Payment = require("../models/Payment");

class PaymentService {
    async createPayment(paymentData) {
        return await Payment.create(paymentData);
    }

    async getPaymentById(id) {
        return await Payment.findById(id).populate("user").populate("order");
    }

    async getAllPayments() {
        return await Payment.find().populate("user");
    }

    async updatePayment(id, updateData) {
        return await Payment.findByIdAndUpdate(id, updateData, { new: true });
    }

    async deletePayment(id) {
        return await Payment.findByIdAndDelete(id);
    }
}

module.exports = new PaymentService();
