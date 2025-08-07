require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoutes = require("./features/user/user.route");
const transactionRoute = require("./features/transaction/transaction.route");
const budgetingRoutes = require("./features/budgeting/budgeting.route");
const goalsRouters = require("./features/goals/goals.route");

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/user", userRoutes);
app.use("/api/transaction", transactionRoute);
app.use("/api/budgeting", budgetingRoutes);
app.use("/api/goals", goalsRouters);

app.listen(process.env.PORT, () => {
  console.log(`App listen to port ${process.env.PORT}`);
});
