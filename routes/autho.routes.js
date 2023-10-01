import { Router } from "express";
import Authentications from "../middleware/authenticateToken.js";

const { authenticateToken, createAuthenticateToken } = Authentications;
const authoRouter = Router();

/*Prueba general de / */
authoRouter.get("/", authenticateToken, (req, res) => {
  var body = req.body;
  res.json(body);
});

/*Login del sistema */
authoRouter.get("/login", (req, res) => {
  var body = req.body;
  res.json({ token: createAuthenticateToken("Johan") });
});

export default authoRouter;
