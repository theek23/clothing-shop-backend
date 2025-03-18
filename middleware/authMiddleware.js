const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Protect Routes (Require Login)
exports.protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

// Admin Only Access
exports.admin = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(403).json({ message: "Access denied: Admins only" });
    }
};

// Customers Only Access (if needed)
exports.customer = (req, res, next) => {
    if (req.user && req.user.role === "customer") {
        next();
    } else {
        res.status(403).json({ message: "Access denied: Customers only" });
    }
};
