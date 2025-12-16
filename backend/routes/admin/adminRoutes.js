const express = require("express");
const { protect, admin } = require("../../middleware/authMiddleware");
const User = require("../../models/User");

const router = express.Router();

// @route GET /api/admin/users
// @desc get all users (Admin Only)
// @access Private/Admin
router.get("/", protect, admin, async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log("Error adminRoutes-15 /admin/users GET:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route POST /api/admin/users
// @desc add a new user (Admin Only)
// @access Private/Admin
router.post("/", protect, admin, async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exist" });

    user = new User({ name, email, password, role: role || "customer" });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.log("Error adminRoutes-35 /admin/users POST:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route PUT /api/admin/uses/:id
// @desc Update user info (Admin Only) - Name, email and role
// @acccess Private/Admin
router.put("/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.role = req.body.role || user.role;
    }
    const updatedUser = await user.save();
    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.log("Error adminRoutes-54 /admin/users/:id PUT:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route /api/admin/users/:id
// @desc Delete User (Admin Only)
// @access Private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await user.deleteOne();
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log("Error adminRoutes-69 /admin/users/:id DELETE:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
