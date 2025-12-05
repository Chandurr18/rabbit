const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const products = require("./data/products");

dotenv.config();

// connect to mongodb
mongoose.connect(process.env.MONGO_URI);

// Function to seed database
const seedData = async () => {
  try {
    // Clear existing data;
    await Product.deleteMany();
    await User.deleteMany();

    // Create a default admin User
    const createdUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });

    // Assign default user ID to each product
    const userId = createdUser._id;

    const sampleProducts = products.map((product) => {
        return {...product, user : userId};
    });

    // Insert the products into the database
    await Product.insertMany(sampleProducts);
    console.log("Product data seeded successfully");
    process.exit();
  } catch (error) {
    console.log("Error seeder:",error);
    process.exit(1);
  }
};


// call the seedData();
seedData();
