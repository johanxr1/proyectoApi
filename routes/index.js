import { Router } from "express";
import usersRouter from "./users.routes.js";
import authoRouter from "./autho.routes.js";

/*Funcion para dirigir dependiente de la URL, añadiendo pre /api/test */
export default function routerApi(app) {
  const router = Router();
  app.use("/api/test", router);

  router.use("/users", usersRouter);
  router.use("/autho", authoRouter);
}
