const UserModel = require('../models/UserModel');
const response = require('../helpers/respons-parser');
const path = require('path');
const fs = require('fs');
const md5 = require('md5');

const User_Controller = {
    getAllUser : async(req, res) => {
        try {
            const user = await UserModel.findAll();
            response.success(res, {data:user})
        }catch(err){
            console.log(err);
            response.error(res, {error: err.message});
        }
    },
    getUserByID : async(req, res) => {
        try {
            const user = await UserModel.findOne({
                where : {
                    id_user : req.params.id
                }
            })
             response.success(res, {data:user})
        }catch(err){
            console.log(err);
            response.error(res, {error: err.message});
        }
    },
    addUser : async(req, res) => {
        try {
            let pass = md5(req.body.password_user);
            const data = {
                username : req.body.username,
                full_name : req.body.full_name,
                email_user : req.body.email_user,
                password_user : pass,
                foto_user : req.file.path,
                role_id : req.body.role_id,
                is_active : 1
            }
            await UserModel.create(data);
            response.success(res, {message : 'create data success !!'})
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    updateUser : async(req, res) => {
        try{
            await UserModel.update(req.body, {
                where : {
                    id_user : req.params.id
                }
            })
            response.success(res, {message:'update data success !!'})
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    updateStat : async (req, res)=>{
        try {
            const state = {
                is_active : req.body.is_active
            }
            await UserModel.update(state, {
                where : {
                    id_user : req.params.id
                }
            })
            response.success(res, { message: 'update data success!' });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    deleteUser : async(req, res)=>{
        try{
            await UserModel.destroy({
                where : {
                    id_user : req.params.id
                }
            })
            response.success(res, { message: 'delete data success!' });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    }
}

module.exports = User_Controller;