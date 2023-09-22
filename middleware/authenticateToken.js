export default function authenticateToken(req, res, next) {
  var authHeader = req.headers["authorization"];
  return authHeader == 1234 ? next() : res.sendStatus(401);
}
