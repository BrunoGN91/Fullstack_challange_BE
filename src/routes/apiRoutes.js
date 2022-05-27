const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController")


  
router.get('/api', apiController.users);
router.post('/apiPost', apiController.setUsers);
router.post('/loginProcess', apiController.loginProcess);
router.post('/setNewValue', apiController.setNewValue);
router.post('/setOperationList', apiController.setOperationList)
router.post('/setNewBalance', apiController.setBalance)
router.get('/operationsList', apiController.operationsList)
router.get('/operationsList/:id', apiController.operation)
router.delete('/operationsList/:id', apiController.deleteOperation)
router.get('/usersOperations/:id', apiController.usersOperations)








module.exports = router