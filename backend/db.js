
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);


const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
})

const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // reference to User model
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = mongoose.model("User",UserSchema);
const Account = mongoose.model("Account",accountSchema)

module.exports = {
    User,
    Account
};