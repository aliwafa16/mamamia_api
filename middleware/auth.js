const database = require('../config/database');
const sequelize = require('sequelize');
const md5 = require('js-md5');
const response = require('../helpers/respons-parser');
const jwt = require('jsonwebtoken');
const key = ('../config/secret');
const UserModel = require('../models/UserModel');
const ip = require('ip');
const bcrypt = require('bcrypt');
const e = require('express');
const sendEmail = require('../helpers/sendemail');

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
                    if(user.is_active==1){
                        if((md5(password_user))==user.password_user){
                            const data = {
                                id : user.id_user
                            }
                            const token = await jwt.sign({data}, key);
                            response.success(res, {data:{token:token,id_user:user.id_user,role_id:user.role_id,username:user.username}})
                        }else{
                            response.error(res, {error: 'Password Salah !!'})
                        }
                    }else{
                        response.error(res, {error: 'User tidak aktif !!'})
                    }
                }else{
                    response.error(res, {error: 'Email user tidak ditemukan !!'})
                }


                // if(user){
                //     if(user.is_active==1){
                //             if(md5(password_user)==user.password_user){
                //             const data = {
                //                 id : user.id_user
                //             }
                //             const token = await jwt.sign({data}, key);
                //             response.success(res, {data:{token:token,id_user:user.id_user,role_id:user.role_id,username:user.username}})
                //         }else{
                //             response.error(res, {error: 'Password Salah !!'})
                //         }
                //     }else{
                //         response.error(res, {error: 'User tidak aktif !!'})
                //     }
                // }else{
                //     response.error(res, {error: 'Email user tidak ditemukan !!'})
                // }
        }catch(err){
            console.log(err);
            response.error(res, { error: err.message });
        }
        
    },
    forgotPassword : async(req, res) => {
        const email = req.body.email

        const user = await UserModel.findOne({
            where : {
                email_user : email
            }
        })

        if(user){
            const data = {
                                id : user.id_user
                            }
             const token = await jwt.sign({data}, key);

             const templateEmail = {
                 from : "MAMAMIA PLANNER TEAM",
                 to : email,
                 subject : "Link reset password",
                 html : `<p>Silahkan klik link dibawah untuk mereset password akun anda </p> <p>http://localhost/mamamiaplanner/resetpassword?email=${email}&token=${token}</p>`
             }
             console.log(templateEmail)
             sendEmail.kirimEmail(templateEmail)
             response.success(res, {message:'Link reset password berhasil dikirim !!'})
        }else{
            response.error(res, {error: 'Email user tidak ditemukan !!'})
        }
    },

    resetPassword : async(req, res) =>{
        try{
            const email = req.body.email_user;
            const password_user = {
                password_user : req.body.password_user
            }
            const password = await UserModel.update(password_user, {
                where : {
                    email_user : email
                }
            })
            console.log('berhasil')
            response.success(res, { message: 'update data success!' });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    }
}

module.exports = Registrasi_Controller;