module.exports = {
  "development": {
    "username": process.env.PORT_DB || "root",
    "password": process.env.PASS_DB || null,
    "database": process.env.NAME_DB || "node_db",
    "host": process.env.USER_DB || "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.PORT_DB || "root",
    "password": process.env.PASS_DB || null,
    "database": process.env.NAME_DB || "node_db",
    "host": process.env.USER_DB || "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.PORT_DB || "root",
    "password": process.env.PASS_DB || null,
    "database": process.env.NAME_DB || "node_db",
    "host": process.env.USER_DB || "127.0.0.1",
    "dialect": "mysql"
  }
}
