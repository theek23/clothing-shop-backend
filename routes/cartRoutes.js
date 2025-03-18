const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const { protect, customer } = require("../middleware/authMiddleware");

router.get("/", protect, customer, cartController.getCartByUser);  // Customers only
router.put("/", protect, customer, cartController.updateCart);  // Customers only
router.delete("/", protect, customer, cartController.deleteCart);  // Customers only

module.exports = router;
