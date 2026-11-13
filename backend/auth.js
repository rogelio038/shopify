const jwt = require("jsonwebtoken");

const SECRET_KEY = "clave_secreta_super_segura";

function generateToken(user) {
    return jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
        expiresIn: "2h",
    });
}

function verifyToken(token) {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
}

module.exports = { generateToken, verifyToken };
