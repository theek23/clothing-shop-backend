const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { protect, admin, customer } = require("../middleware/authMiddleware");

router.post("/", protect, customer, orderController.createOrder);  // Customers only
router.get("/", protect, admin, orderController.getAllOrders);  // Admin only
router.get("/:id", protect, orderController.getOrderById);  // Admin or owner of the order
router.put("/:id", protect, admin, orderController.updateOrder);  // Admin only
router.delete("/:id", protect, admin, orderController.deleteOrder);  // Admin only

module.exports = router;
