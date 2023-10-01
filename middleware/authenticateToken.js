import "dotenv/config.js";
import jwt from "jsonwebtoken";

const secretOrKey = process.env.JWT_SECRET;

function authenticateToken(req, res, next) {
  let authHeader = req.headers["authorization"];

  // invalid token - synchronous
  try {
    jwt.verify(authHeader, secretOrKey);
    return next();
  } catch (err) {
    return res.status(404).json({ Error: err });
  }

  //return authHeader == 1234 ? next() : res.sendStatus(401);
}

function createAuthenticateToken(data) {
  var token = jwt.sign(
    {
      data: data || "Usuario",
    },
    secretOrKey,
    { expiresIn: "1h" }
  );
  return token;
}

export default { authenticateToken, createAuthenticateToken };
