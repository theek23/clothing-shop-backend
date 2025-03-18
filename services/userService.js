const User = require("../models/User");

class UserService {
    async createUser(userData) {
        return await User.create(userData);
    }

    async getUserById(id) {
        return await User.findById(id).select("-password");
    }

    async getUserByEmail(email) {
        return await User.findOne({ email });
    }

    async getAllUsers() {
        return await User.find().select("-password");
    }

    async updateUser(id, updateData) {
        return await User.findByIdAndUpdate(id, updateData, { new: true });
    }

    async deleteUser(id) {
        return await User.findByIdAndDelete(id);
    }
}

module.exports = new UserService();
