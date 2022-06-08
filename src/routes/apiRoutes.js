const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController")


  
router.get('/api', apiController.users);
router.post('/apiPost', apiController.setUsers);
router.post('/loginProcess', apiController.loginProcess);
router.get('/users', apiController.getAllUsers);
router.get('/users/:id', apiController.getUser);
router.post('/setNewValue', apiController.setNewValue);
router.post('/setOperationList', apiController.setOperationList)
router.post('/setNewBalance', apiController.setBalance)
router.put('/editInitialBalance', apiController.editInitialBalance)
router.get('/operationsList', apiController.operationsList)
router.get('/operationsList/:id', apiController.operation)
router.put('/operationsList/:id', apiController.deleteOperation)
router.delete('/operationsList/:id', apiController.deleteOperationBest)

router.get('/usersOperations/:id', apiController.usersOperations)
router.post('/updateOperation', apiController.updateOperation);









module.exports = router