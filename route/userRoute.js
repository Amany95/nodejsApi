const express = require('express');
const router = new express.Router();


const userController = require('../controller/userController.js');
const userMiddleware=require('../middleware/adminAuthMiddlware.js');


//================== Log in ===========================//

router.post('/login',userController.logIn);

//================== Log Out ===========================//

router.post('/logOut',userMiddleware,userController.logOut);


module.exports = router