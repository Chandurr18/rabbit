const express = require("express");
const Order = require("../../models/Order");
const { protect, admin } = require("../../middleware/authMiddleware");

const router = express.Router();

// @route GET /api/admin/orders
// @desc Get all orders (Admin Only)
// @access Private/Admin
router.get("/", protect, admin, async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "name email");
    res.json(orders);
  } catch (error) {
    console.log("Error productOrderRoutes-15 /api/admin/orders GET:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route Put /api/admin/orders/:id
// @desc Update order status
// @access Private/Admin
router.put("/:id", protect, admin, async (req, res) => {
  const { status } = req.body;
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.status = status || order.status;
      order.isDelivered = status === "Delivered" ? true : order.isDelivered;
      order.deliveredAt =
        status === "Delivered" ? Date.now() : order.deliveredAt;
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.log(
      "Error productOrderRoutes-34 /api/admin/orders/:id PUT:",
      error
    );
    res.status(500).json({ message: "Server Error" });
  }
});

// @route DELETE /api/admin/order/:id
// @desc Delete an order
// @access Private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      await order.deleteOne();
      res.json({ message: "Order deleted successfully" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.log(
      "Error productOrderRoutes-61 /api/admin/orders/:id DELETE:",
      error
    );
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
