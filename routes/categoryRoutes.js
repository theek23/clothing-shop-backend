const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const { protect, admin } = require("../middleware/authMiddleware");

router.post("/", protect, admin, categoryController.createCategory);  // Admin only
router.get("/", categoryController.getAllCategories);  // Public
router.get("/:id", categoryController.getCategoryById);  // Public
router.put("/:id", protect, admin, categoryController.updateCategory);  // Admin only
router.delete("/:id", protect, admin, categoryController.deleteCategory);  // Admin only

module.exports = router;
