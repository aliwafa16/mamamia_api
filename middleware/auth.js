const database = require('../config/database');
const sequelize = require('sequelize');
const md5 = require('md5');
const response = require('../helpers/respons-parser');
const jwt = require('jsonwebtoken');
const config = ('../config/secret');
const UserModel = require('../models/UserModel');
const ip = require('ip');


const Registrasi_Controller = {
    signUp : async (req, res) => {
        try {
            const user = await UserModel.findOne({
                where : {
                    email_user : req.body.email_user
                }
            })

            if(user==null){
                await UserModel.create(req.body);
                response.success(res, {message:'create data success !!'})
            }else{
                response.success(res, {message: 'Email sudah digunakan'})
            }
        }catch(err){
            console.log(err);
            response.error(res, { error: err.message });
        }
    }
    
}

module.exports = Registrasi_Controller;