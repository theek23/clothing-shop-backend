const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { protect, admin } = require("../middleware/authMiddleware");

router.post("/", protect, orderController.createOrder);
router.get("/", protect, admin, orderController.getAllOrders);
router.get("/:id", protect, orderController.getOrderById);
router.put("/:id", protect, admin, orderController.updateOrder);
router.delete("/:id", protect, admin, orderController.deleteOrder);

module.exports = router;
