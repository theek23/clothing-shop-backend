const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
    paymentMethod: { type: String, enum: ["credit_card", "paypal", "cash_on_delivery"], required: true },
    status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
    transactionId: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Payment", PaymentSchema);
