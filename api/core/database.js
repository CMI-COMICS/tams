import mysql from "mysql2/promise";

console.log('HOST', process.env.DB_HOST);
console.log('USER', process.env.DB_USER);
console.log('PASS', process.env.DB_PASS);
const connection = await mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10, // max simultaneous connections
  queueLimit: 0,
  localInfile: true,
});

export { connection };

// const masterConnection = await mysql.createConnection({
//   host: process.env.MASTER_DB_HOST,
//   user: process.env.MASTER_DB_USER,
//   password: process.env.MASTER_DB_PASS,
//   database: process.env.MASTER_DB_NAME,
//   port: process.env.MASTER_DB_PORT || 3306
// });

// const slaveConnection = await mysql.createConnection({
//   host: process.env.SLAVE_DB_HOST,
//   user: process.env.SLAVE_DB_USER,
//   password: process.env.SLAVE_DB_PASS,
//   database: process.env.SLAVE_DB_NAME,
//   port: process.env.SLAVE_DB_PORT || 3306
// });


// export { masterConnection, slaveConnection };