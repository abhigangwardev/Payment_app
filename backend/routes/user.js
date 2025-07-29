const express = require("express");
const zod =require("zod");
const { User, Account } = require("../db");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");
const router = express.Router();
const jwt = require("jsonwebtoken")

const signupBody =zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string().min(6)
})


router.post("/signup",async (req,res)=>{
    const { success } =signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const existingUser = await User.findOne({
        username: req.body.username
    })
    if(existingUser){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    const userId = user._id;

    /// ---- Create new account ---- 

    await Account.create({
        userId,
        balance: Math.round(1+ Math.random() * 10000)/100
    })

    /// ----- ------

    const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})


const signinBody =zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
})

router.post("/signin",async (req,res) => {
    const { success } =signinBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Error while logging in"
        })
    }
    const existingUser = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })
    if(!existingUser){
        return res.status(411).json({
            message: "Error while logging in"
        })
    }
    const userId = existingUser._id;
    const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.json({
        token: token
    })
})

const updateBody = zod.object({
    password: zod.string().min(6).optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})

router.put("/",authMiddleware,async (req,res) => {
    const { success } = updateBody.safeParse();
    if(!success){
        return res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body,{
        _id: req.userId
    })

    res.json({
        message: "Updated successfully"
    })
})


router.get("/bulk",authMiddleware,async (req,res) => {
    const filter = req.query.filter || "";
    const userId = req.userId;

    const users =await User.find({
        $or: [{
            firstName: {
                "$regex": filter,
                "$options": "i"
            }
        },{
            lastName: {
                "$regex": filter,
                "$options": "i"
            }
        }]
    })

    res.json({
        users: users.filter(user => {
            return user._id != userId;
        })
        .map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})


module.exports = router;