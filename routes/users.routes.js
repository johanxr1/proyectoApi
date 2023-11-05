import { Router } from "express";
//import myjson from "../usuario.json" assert { type: "json" };

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.json({ name: "Johan", detalle: "Hola" });
});

export default userRouter;
