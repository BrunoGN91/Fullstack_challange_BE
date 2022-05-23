const fs = require("fs");
const path = require("path");
const usersJosn = fs.readFileSync((path.resolve(__dirname,"../database/users.json")))
const usersDb = JSON.parse(usersJosn);
const db = require("../../database/models")


module.exports = {
    users: (req, res) => {
      res.json(usersDb)
    },
    setUsers: async (req, res) => {
      try {
        let data = await JSON.parse(Object.keys(req.body)[0]);
        let newUser = await db.User.create({
          email: data.email,
        password: data.password,
        balance: data.balance
        })
       
        return newUser
      } catch (error) {
        return new Error()
      }
    },
    loginProcess: async (req, res) => {
      try {
        let user = await JSON.parse(Object.keys(req.body)[0]);
        console.log(user);
        let findUser = await db.User.findOne({
          where: {
            email: user.email,
            password: user.password
          }
        })
    
        res.send(findUser)
       
      } catch (error) {
        console.log("error");
      }
    },
    setNewValue: async (req, res) => {
      try {
        let value = await JSON.parse(Object.keys(req.body)[0]);
        let newValue = await db.Operation.create({
          description: value.description,
          total: value.value,
          users_fk: value.users_fk
        });
        
        return newValue
      } catch (error) {
       
      }
    },
    setOperationList: async (req, res) => {
      try {
        let value = await JSON.parse(Object.keys(req.body)[0]);

        let findOperations = await db.Operation.findAll({
          where : {
            users_fk: value
          }
        })
        console.log(findOperations);
        res.send(findOperations)
      } catch (error) {
        const newError = new Error();
        console.log(newError);
      }
    }
}