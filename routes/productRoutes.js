const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");

router.post("/", protect, admin, productController.createProduct);  // Admin only
router.get("/", productController.getAllProducts);  // Public
router.get("/:id", productController.getProductById);  // Public
router.put("/:id", protect, admin, productController.updateProduct);  // Admin only
router.delete("/:id", protect, admin, productController.deleteProduct);  // Admin only

module.exports = router;
