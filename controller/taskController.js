const express = require('express');
var mysql = require("../lib/mysql.js")
var config = require('../config.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const helperFunction = require('../lib/helperFunctionWorking.js')


// ====================== all tasks  ======================//
exports.getAll = async (req,res)=>{
    let tasks = await helperFunction.selectAllColWithoutCondition('tasks')
    res.send(tasks)

}

// ====================== add task======================//
exports.addTask = async (req,res)=>{
    let title=req.body.title;
    let description=req.body.description;
    let status=req.body.status;
    let group=req.body.group;
    let created_at= req.body.created_at;

    let addTask = await helperFunction.insertFiveCol('tasks','title','description','status','group','created_at',title,description,status,group,created_at);
    let tasks = await helperFunction.selectAllColWithoutCondition('tasks')


    res.send(tasks)
}

// ====================== get task by id======================//
exports.getTask = async (req,res)=>{
    let taskId=req.params.id; 
    let getTask = await helperFunction.selectAllCol('tasks','id',taskId)

    res.send(getTask)
}

// ====================== update task by id======================//
exports.updateTask = async (req,res)=>{
    let taskId=req.params.id;
    let title=req.body.title;
    let description=req.body.description;
    let status=req.body.status;
    let group=req.body.group;
    let created_at= req.body.created_at;
    let updateTask = await helperFunction.updateFiveCol('tasks','title','description','status','group','created_at',title,description,status,group,created_at,'id',taskId)
    let tasks = await helperFunction.selectAllColWithoutCondition('tasks')

    res.send(tasks)
}

// ====================== delete task ======================//
 exports.deleteTask = async (req,res)=>{
    let taskId=req.params.id; 
    let deleteTask = await helperFunction.deleteRow('tasks','id',taskId)
    let tasks = await helperFunction.selectAllColWithoutCondition('tasks')

    res.send(tasks)
}

