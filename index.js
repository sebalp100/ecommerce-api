const express = require("express");
const app = express();
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth");

connectDb();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`Backend running on port ${port}`)
});
