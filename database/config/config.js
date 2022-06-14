module.exports = {
  "development": {
    "username": process.env.PORT_DB ,
    "password": process.env.PASS_DB ,
    "database": process.env.NAME_DB ,
    "host": process.env.USER_DB ,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.PORT_DB ,
    "password": process.env.PASS_DB ,
    "database": process.env.NAME_DB ,
    "host": process.env.USER_DB ,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.PORT_DB ,
    "password": process.env.PASS_DB ,
    "database": process.env.NAME_DB ,
    "host": process.env.USER_DB ,
    "dialect": "mysql"
  }
}
