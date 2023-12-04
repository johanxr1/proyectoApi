import express, { json } from "express";
import routerApi from "./routes/index.js";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Index api");
});

routerApi(app);

app.get("*", (req, res) => {
  res.status(404).json({ Error: "Pagina no existe" });
});

app.listen(PORT, () => {
  console.log(`Escuchando en puerto ${PORT}`);
});
