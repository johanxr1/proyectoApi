import { Router } from "express";
import usersRouter from "./users.routes.js";
import authoRouter from "./autho.routes.js";
import { DataController } from "../controllers/controlador.js";
import Authentications from "../middleware/authenticateToken.js";

const { authenticateToken, createAuthenticateToken } = Authentications;

/*Funcion para dirigir dependiente de la URL, añadiendo pre /api/test */
export default function routerApi(app) {
  const router = Router();
  app.use("/api/test", router);

  router.use("/users", usersRouter);
  router.use("/autho", authoRouter);
  /**
   * @description ruta para todos los alimentos, ruta libre
   */
  router.use("/alimentos/detallada", DataController.getAlimentos);
  router.use("/alimentos/:id", DataController.getOne);
  router.use("/alimentos", DataController.getAll);
  /**
   * @description ruta para todos las ciudades, ruta libre
   */
  router.use("/ciudades/:id", DataController.getOne);
  router.use("/ciudades", DataController.getAll);
}
