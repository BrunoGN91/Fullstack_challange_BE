const fs = require("fs");
const path = require("path");
const usersJosn = fs.readFileSync((path.resolve(__dirname,"../database/users.json")))
const usersDb = JSON.parse(usersJosn);
const db = require("../../database/models");
const bcrypt = require('bcryptjs');
const { resolve } = require("path");


module.exports = {
    users: (req, res) => {
      res.json(usersDb)
    },
    setUsers: async (req, res) => {
      try {
        let data = await JSON.parse(Object.keys(req.body)[0]);
        let newUser = await db.User.create({
          email: data.email,
        password: bcrypt.hashSync(data.password, 10),
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
        let findUser = await db.User.findOne({
          where: {
            email: user.email
          }
        })
        if(findUser) {
          
          let comparePasswords = await bcrypt.compareSync(user.password, findUser.dataValues.password)
         
          if(comparePasswords) {
            
            res.send(findUser)
          }
        }
      } catch (error) {
        console.log("Login process error");
      }
    },
    setBalance: async (req, res) => {
      try {
       let value = await JSON.parse(Object.keys(req.body)[0]);
       let newValue = await db.User.update({
        balance: value.total
       },{
         where: {
           id: value.id
         }
       })
       let user = await db.User.findOne({
         where: {
           id: value.id
         }
       })
       res.send(user)
       return newValue
      } catch (error) {
        
      }
    }
    ,
    setNewValue: async (req, res) => {
      try {
        const value = await JSON.parse(Object.keys(req.body)[0]);
        
          let newValue = await db.Operation.create({
            description: value.description,
            total: value.value,
            category: value.category,
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
            users_fk: Number(value)
          }
        })
        res.send(findOperations)
      } catch (error) {
        const newError = new Error();
        console.log(newError);
      }
    },
    operationsList: (req, res) => {
      db.Operation.findAll().then(data => res.json(data))
    },
    operation: (req, res) => {
      db.Operation.findOne({
        where: {
          id: req.params.id
        }
      }).then(data => {
        res.json(data)
      })
    },
    deleteOperation: async (req, res) => {
      let value = await JSON.parse(Object.keys(req.body)[0]);
     
       let operationToDelete = await db.Operation.findOne({
          where: {
            id: req.params.id
          }
        })
        if(operationToDelete !== null) {
          operationToDelete.destroy()
         
        } else {
          return;
        }
    },
    usersOperations: (req, res) => {
      db.Operation.findAll({
        where: {
          users_fk: req.params.id
        }
      }).then(data => {
        res.json(data)
      })
    },
    updateOperation: async (req, res) => {
        try {
          let value = await JSON.parse(Object.keys(req.body)[0]);
         
          let updatedOperation = await db.Operation.update({
              name: value.name,
              description: value.description,
              total: value.value,
              category: value.category,
              users_fk: value.users_fk
          }, {where: {
            id: value.id
          }})

          return updatedOperation
        } catch (error) {
          console.log("error");
        }
    },
    getAllUsers: async (req, res) => {
        try {
          const allUsers = await db.User.findAll()
          res.json(allUsers)
        } catch (error) {
          
        }
    },
    getUser: async (req, res) => {
      const user = await db.User.findOne({
        where: {
          id: req.params.id
        }
      })
      
      res.json(user)
    },
    editInitialBalance: async (req, res) => {
      try {
        let value = await JSON.parse(Object.keys(req.body)[0]);
        let updateBalance = await db.User.update({
          balance: value.newBalance
        }, {
          where: {
            id: value.user
          }
        })
        return updateBalance
      } catch (error) {
        
      }
    }
}