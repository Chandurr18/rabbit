const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// import Routes;
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
// to ensure our server is able to work with json data
app.use(express.json());
// to communicate with react server, enable cors origin requests
app.use(cors());

// to load env variables
dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to MondoDB 
connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to rabit api");
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
