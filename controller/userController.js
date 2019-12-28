const express = require('express');
var mysql = require("../lib/mysql.js")
var config = require('../config.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const helperFunction = require('../lib/helperFunctionWorking.js')

// ====================== log in  ======================//
exports.logIn = async (req,res,next)=>{
    try {
        const userName = req.body.userName;
        const password = req.body.password;

        const adminData = await helperFunction.getThreeCol('admin_user', 'id', 'user_name', 'pass', 'user_name', userName);
        if (!adminData) {
            res.send('unable to login');
            throw new Error('unable to login no data');

        }
        console.log("data is " + adminData)

        const isMatch = await bcrypt.compare(password, adminData[0].pass);
        console.log(isMatch);
        if (!isMatch) {
            res.send('unable to login');
            throw new Error('unable to login ');

        }

        const token = await jwt.sign({
            user_name: adminData[0].user_name
        }, 'privateTokenKey');
        console.log(token)

        let promiseToken = await helperFunction.updateOneCol('admin_tokens', 'token', token, 'admin_id', adminData[0].id)

        req.admin = adminData[0];
        req.token = token;

        
        res.send({adminData,token});
        // res.render()

    }catch(e){
        res.status(400).send(e);
        console.log(e);
    }
}

// ====================== log out ======================//
 exports.logOut = async (req,res,next)=>{
    try{
        
        console.log('in logout fun');

        console.log(req.user[0].id);
        console.log(req.token)

        let promiseToken = await helperFunction.updateOneCol('admin_tokens', 'token', '', 'admin_id', req.user[0].id)

        // req.user.tokens = req.user.tokens.filter( (token) =>{
        //     return token.token !== req.token 

        // })
        // await req.user.save()
        res.send();
        
    }catch(e){
        res.status(500).send();
        console.log(e);
    }
}

