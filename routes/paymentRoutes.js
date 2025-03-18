const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");
const { protect, customer } = require("../middleware/authMiddleware");

router.post("/", protect, customer, paymentController.createPayment);  // Customers only
router.get("/:id", protect, paymentController.getPaymentById);  // Logged-in users

module.exports = router;
