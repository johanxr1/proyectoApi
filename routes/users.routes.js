import { Router } from "express";
//import myjson from "../usuario.json" assert { type: "json" };

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.json({ name: "Johan", detalle: "Hola" });
});

// userRouter.get("/:id", (req, res) => {
//   var { id } = req.params;
//   res.json(Object.values(myjson).filter((item) => item.id === parseInt(id)));
// });

export default userRouter;
