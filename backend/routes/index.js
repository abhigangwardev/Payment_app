const express = require("express")
const userRouter = require("./user")
const accountRouter = require("./accounts");
const router = express.Router();

router.use("/user",userRouter)

router.use("/accounts",accountRouter)


module.exports = router;


// /api/v1/user
// /api/v1/accounts