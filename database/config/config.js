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

/*
    "username": "root",
    "password": null ,
    "database": 'node_db' ,
    "host": "127.0.0.1",
    "dialect": "mysql"
*/