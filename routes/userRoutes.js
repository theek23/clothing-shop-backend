const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { protect, admin } = require("../middleware/authMiddleware");

router.get("/", protect, admin, userController.getAllUsers);  // Admin only
router.get("/:id", protect, userController.getUserById);  // Logged-in users
router.put("/:id", protect, userController.updateUser);  // Logged-in users
router.delete("/:id", protect, admin, userController.deleteUser);  // Admin only

module.exports = router;
