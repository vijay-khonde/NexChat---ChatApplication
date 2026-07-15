const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/db");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/Users.routes");

const app = express();

app.use(express.json());
const cors = require("cors");
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Home route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Auth routes
app.use("/chatApp/auth", authRoutes);
console.log("User routes loaded");
app.use("/chatApp/users", userRoutes);
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

startServer();