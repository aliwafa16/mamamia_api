const database = require('../config/database');
const sequelize = require('sequelize');
const md5 = require('md5');
const response = require('../helpers/respons-parser');
const jwt = require('jsonwebtoken');
const key = ('../config/secret');
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
                response.error(res, { error: 'Email Sudah digunakan !!' })
            }
        }catch(err){
            console.log(err);
            response.error(res, { error: err.message });
        }
    },
    signIn : async (req, res) => {
        const email_user = req.body.email_user;
        const password_user = req.body.password_user;
        const user = await UserModel.findOne({
            where : {
                email_user : email_user
            }
        });
        if(user){
            const password = await md5(password_user, user.password_user);
            if(password){
                const data = {
                    id : user.id_user
                }
                const token = await jwt.sign({data}, key);
                response.success(res, {data:token})
            }else{
                response.success(res, {message: 'Password Salah !!'})
            }
        }else{
            response.success(res, {message: 'Email Salah !!'})
        }
    }
}

module.exports = Registrasi_Controller;