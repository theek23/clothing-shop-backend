const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, cartController.getCartByUser);
router.put("/", protect, cartController.updateCart);
router.delete("/", protect, cartController.deleteCart);

module.exports = router;
