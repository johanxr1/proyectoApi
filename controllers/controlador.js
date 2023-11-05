import { isNumeric } from "../middleware/utilities.js";
import Model from "../models/consultas.js";

export const DataController = {
  /**
   *
   * @description llamado de todos los elementos de la tabla
   * @param {table} req tabla a la que se le hara el select, traera todo.
   * @returns status, objet(any)
   */
  getAll: (req, res) => {
    const table = "alimentos_base";

    new Model().getAll(table, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (results && results.length > 0) {
          res.status(200).send(results);
        } else {
          res.status(200).send(results);
        }
      }
    });
  },
  /**
   *
   * @description Get only one elemento by id
   * @param {table} req nombre de tabla, buscar como proporcionarla
   * @param {id} req params.id identificador, numerico
   * @returns status, message(String), response(objet:json)
   *
   */
  getOne: (req, res) => {
    const table = "alimentos_base";
    const id = req.params.id;
    if (isNumeric(id)) {
      new Model().getOne(table, id, (err, results) => {
        if (err) {
          res.status(500).send(err);
        } else {
          if (results && results.length > 0) {
            res.status(200).json(results);
          } else {
            res.status(200).send("Tabla no encontrada");
          }
        }
      });
    } else {
      res.status(400).send("Identificador tiene que ser numero");
    }
  },
};
