require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const userRoutes = require("./features/user/user.route");
const transactionRoute = require("./features/transaction/transaction.route");

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/transaction", transactionRoute);

app.listen(process.env.PORT, () => {
  console.log(`App listen to port ${process.env.PORT}`);
});
