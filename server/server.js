const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/db");

dotenv.config();

const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Auth routes
app.use("/chatApp/auth", require("./routes/auth.routes"));

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