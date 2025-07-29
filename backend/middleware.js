const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token= authHeader.split(" ")[1];

    const decode = jwt.verify(token,JWT_SECRET);
    try{
        req.userId = decode.userId;
        next()
    }catch(err){
        return res.status(403).json({});
    }
}

module.exports = {
    authMiddleware
}