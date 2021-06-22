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
    },
    signIn : async (req, res) => {
        var post = {
            email_user:req.body.email_user,
            password_user:req.body.password_user
        }

        var query = "SELECT * FROM ?? WHERE ??=? AND ??==?";
        var table = ["tbl_user", "email_user", md5[post.email_user], post.email_user];


        query = mysql.format(query, table);
        connection.query(query, function(error, rows){
            if(error){
                console.log(error);
            }else {
                if(rows.lenght==1){
                    var token = jwt.sign({rows}, config.secret, {
                        expiresIn:1444
                    });
                    id_user = rows[0].id_user;
                    var data = {
                        id_user : id_user,
                        akses_token : token,
                        ip_address : ip.address()
                    }

                    var query = "INSERT INTO ?? SET ?";
                    var table = ['tbl_akses_token'];

                    query = mysql.format(query,table);
                    connection.query(query, data, function (error, rows) {
                        if(error){
                            console.log(error);
                        }else {
                            response.success(res, {
                                message:'Token tergenerate !!!',
                                token : token,
                                currUser : data.id_user
                                })
                        }
                    });
                }else{
                    response.success(res, {message: 'Email atau password Salah'})
                }
            }
        })
        // try {
        //     const user = await UserModel.findOne({
        //         where : {
        //             [sequelize.Op.and]:[
        //                 {email_user:req.body.email_user},
        //                 {password_user:req.body.password_user}
        //             ]
        //         }
        //     })
        // }catch(err){

        // }
    }
    
}

module.exports = Registrasi_Controller;