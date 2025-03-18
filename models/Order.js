const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "OrderItem", required: true }],
    totalAmount: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ["pending", "shipped", "delivered", "cancelled"], 
        default: "pending"
    },
    paymentStatus: { type: String, enum: ["paid", "unpaid"], default: "unpaid" },
    address: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);
