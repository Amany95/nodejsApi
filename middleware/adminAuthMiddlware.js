const jwt = require('jsonwebtoken');
const helperFunction = require('../lib/helperFunctionWorking.js')
var mysql = require("../lib/mysql.js")
var config = require('../config.js')




const auth = async (req,res,next)=>{
    try{
        console.log('in auth');
        const token = req.header('Authorization').replace('Bearer ', '' );
        console.log(token)
        const decoded = jwt.verify(token,'privateTokenKey'); // == return username ==  //
        console.log(decoded);


        const user = await helperFunction.getTwoCol('admin_user', 'id', 'user_name', 'user_name', decoded.user_name);
        
        if(!user){
            // throw new Error('plz,login');
            throw new Error('plz,login');      
        }

        req.user = user ;
        req.token = token ;
        next();
        
    }catch (error){
        console.log(error);
        res.status(401).send({ 'error' : 'please log in '});
    }
    
}
module.exports = auth