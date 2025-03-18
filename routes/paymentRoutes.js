const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, paymentController.createPayment);
router.get("/:id", protect, paymentController.getPaymentById);

module.exports = router;
