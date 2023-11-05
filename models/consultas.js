import { pool } from "../Connection/conexion.js";

/**
 * @description base Model for all querys
 * @property {pool} is for used to acces the data base
 */
export default class Model {
  //Get only one element
  getOne = async (table, data, callback) => {
    let sql = `SELECT * from ${table} WHERE identificador = ?`;
    pool.query(sql, [data], callback);
  };
  //Get all the data of a table
  getAll = async (table, callback) => {
    let sql = `SELECT * from ${table}`;
    pool.query(sql, callback);
  };
}
