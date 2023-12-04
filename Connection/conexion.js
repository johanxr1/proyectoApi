import mysql from "mysql2";

const HOST = process.env.HOST || "localhost";
const USERDB = process.env.USERDB || "root";
const PASSWORD = process.env.PASSWORD || "";
const DATABASE = process.env.DATABASE || "alimentosdb";

// Create the connection pool. The pool-specific settings are the defaults
export const pool = mysql.createPool({
  host: HOST,
  user: USERDB, //nutrqwpv_alimentosuser ESTE usuario solo puede hacer SELECT
  database: DATABASE, // nutrqwpv_alimentosdb
  password: PASSWORD, //.r^}L-jHp#h5
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});
