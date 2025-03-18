const cartService = require("../services/cartService");

exports.getCartByUser = async (req, res) => {
    const cart = await cartService.getCartByUser(req.user.id);
    res.json(cart);
};

exports.updateCart = async (req, res) => {
    const updatedCart = await cartService.updateCart(req.user.id, req.body);
    res.json(updatedCart);
};

exports.deleteCart = async (req, res) => {
    await cartService.deleteCart(req.user.id);
    res.json({ message: "Cart cleared" });
};
