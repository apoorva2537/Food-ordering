const express = require("express");
const Pizza = require("./models/pizzaModel");
const app = express();
const db = require("./db.js");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port port ${port} `));
