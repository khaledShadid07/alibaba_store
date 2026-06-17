const express = require('express');
const userController = require('../controllers/userControllers.js')
const router = express.Router()

router.get('/allUsers',userController.getAllUsers)
router.post('/register',userController.register)
router.post('/login',userController.logIn)

module.exports=router;
