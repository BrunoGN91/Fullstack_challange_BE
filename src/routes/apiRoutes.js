const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController")


  
router.get('/api', apiController.users);
router.post('/apiPost', apiController.setUsers);
router.post('/loginProcess', apiController.loginProcess);
router.post('/setNewValue', apiController.setNewValue);
router.post('/setOperationList', apiController.setOperationList)
router.post('/setNewBalance', apiController.setBalance)




module.exports = router