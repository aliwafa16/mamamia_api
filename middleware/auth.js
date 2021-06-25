const database = require('../config/database');
const sequelize = require('sequelize');
const md5 = require('js-md5');
const response = require('../helpers/respons-parser');
const jwt = require('jsonwebtoken');
const key = ('../config/secret');
const UserModel = require('../models/UserModel');
const ip = require('ip');
const bcrypt = require('bcrypt');

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

        try{
            const email_user = req.body.email_user;
            const password_user = req.body.password_user;

                console.log(email_user);
                const user = await UserModel.findOne({
                    where : {
                        email_user : email_user
                    }
                });
                if(user){
                    if(md5(password_user)==user.password_user){
                        const data = {
                            id : user.id_user
                        }
                        const token = await jwt.sign({data}, key);
                        response.success(res, {data:{token:token,id_user:user.id_user,role_id:user.role_id,username:user.username}})
                    }else{
                        response.error(res, {error: 'Password Salah !!'})
                    }
                }else{
                    response.error(res, {error: 'Email user tidak ditemukan !!'})
                }
        }catch(err){
            console.log(err);
            response.error(res, { error: err.message });
        }
        
    }
}

module.exports = Registrasi_Controller;