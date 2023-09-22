import { Router } from "express";
import authenticateToken from "../middleware/authenticateToken.js";
import jwt from "jsonwebtoken";

var token = jwt.sign({ foo: "bar" }, "shhhhh");

const authoRouter = Router();

/*Prueba general de / */
authoRouter.get("/", authenticateToken, (req, res) => {
  var body = req.body;
  res.json(body);
});

/*Login del sistema */
authoRouter.get("/login", (req, res) => {
  var body = req.body;
  res.json(token);
});

export default authoRouter;
