require("dotenv").config();
const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");
const { JWT_SECRET } = require("./config");
const jwt =require("jsonwebtoken");

const app =express();
app.use(express.json());
app.use(cors());
app.use("/api/v1",rootRouter);


app.listen(3000);