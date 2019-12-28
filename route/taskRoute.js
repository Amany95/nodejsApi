const express = require('express');
var mysql = require('mysql');

const router = new express.Router();


const taskController = require('../controller/taskController.js');
//  const userMiddleware=require('../middleware/adminAuthMiddlware.js');


//================== get all ===========================//

router.get('/getAll',taskController.getAll);

//================== add task ===========================//
router.post('/addTask',taskController.addTask);

//================== get Task by id ===========================//
router.get('/:id',taskController.getTask);

//================== get Task by id ===========================//
router.put('/:id',taskController.updateTask);

//================== delete Task ===========================//
router.delete('/:id',taskController.deleteTask);



module.exports = router