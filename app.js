import express, { json } from "express";
import routerApi from "./routes/index.js";

const app = express();
app.use(json());
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ resp: "Pagina raíz API" });
});

routerApi(app);

app.get("*", (req, res) => {
  res.status(404).json({ Error: "Pagina no existe" });
});

app.listen(PORT, () => {
  console.log(`Escuchando en puerto ${PORT}`);
});
