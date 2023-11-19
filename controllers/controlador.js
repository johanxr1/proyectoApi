import { isNumeric } from "../middleware/utilities.js";
import Model from "../models/consultas.js";

export const DataController = {
  /**
   *
   * @description llamado de todos los elementos de la tabla
   * @param {tabla} req nombre de tabla traido por url.originalUrl
   * @returns status, objet(any)
   */
  getAll: (req, res) => {
    const tabla = req.originalUrl.trim().split("/");
    new Model().getAll(tabla[3], (err, results) => {
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
   * @description llamado de todos los elementos de la tabla
   * @param {tabla} req nombre de tabla traido por url.originalUrl
   * @returns status, objet(any)
   */
  getAllDetalled: (req, res) => {
    const tabla = req.originalUrl.trim().split("/");
    new Model().getAllDetalled(tabla[3], (err, results) => {
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
   * @param {tabla} req nombre de tabla traido por url.originalUrl
   * @param {id} req params.id identificador, numerico
   * @returns status, message(String), response(objet:json)
   *
   */
  getOne: (req, res) => {
    //const table = "alimentos";
    const id = req.params.id;
    const tabla = req.originalUrl.trim().split("/");
    //console.log(tabla[3]);
    if (isNumeric(id)) {
      new Model().getOne(tabla[3], id, (err, results) => {
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
