import { pool } from "../connection/conexion.js";

/**
 * @description base Model for all querys
 * @property {pool} is for used to acces the data base
 */
export default class Model {
  /**
   *
   * @description Get only one element
   * @param {*} table tabla a consultar
   * @param {*} data retorno de data
   * @param {*} callback retorno de callback
   */
  getOne = async (table, data, callback) => {
    let sql = `SELECT * from ${table} WHERE identificador = ?`;
    pool.query(sql, [data], callback);
  };
  //Get all the data of a table
  getAll = async (table, callback) => {
    let sql = `SELECT * from ${table}`;
    pool.query(sql, callback);
  };
  //Get all the data of a table with fuente_nombre and grupo_nombre
  getAllDetalled = async (table, callback) => {
    let sql = `SELECT alimentos.*, f.nombre AS fuente_nombre, g.nombre AS grupo_nombre FROM alimentos INNER JOIN fuentes as f on f.id = alimentos.fuente INNER JOIN grupos as g ON g.id = alimentos.grupo ORDER BY alimentos.id ASC`;
    pool.query(sql, callback);
  };
}
