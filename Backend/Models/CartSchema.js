const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link to User
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, // Link to Product
            quantity: { type: Number, required: true, default: 1 }
        }
    ],
    totalPrice: { type: Number, required: true, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Cart", CartSchema);
