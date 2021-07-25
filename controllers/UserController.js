const UserModel = require('../models/UserModel');
const response = require('../helpers/respons-parser');
const PostModel = require('../models/PostUserModel');
const path = require('path');
const fs = require('fs');
const md5 = require('md5');

UserModel.hasMany(PostModel,{foreignKey:'id_user'});

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

            const gambar = req.file.path
            const pass = md5(req.body.password_user);

            if(gambar){
                const User = await UserModel.findOne({
                where : {
                    id_user:req.params.id
                }
            })
            deleteImageResep(User.foto_user);
            }

            const data = {
                username : req.body.username,
                full_name : req.body.full_name,
                email_user : req.body.email_user,
                password_user : pass,
                gambar : req.file.path,
                role_id : req.body.role_id,
                is_active : 1
            }
            
   
            await UserModel.update(data, {
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
    getUserPost : async (req, res) => {
        try{
            const user = await UserModel.findOne({
                include : [{
                    model : PostModel,
                    where : {
                        is_active : 1
                    },
                    required : false
                }],
                where : {
                    id_user: req.params.id
                }
            })
            response.success(res, {data:user})
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
                const User = await UserModel.findOne({
                where : {
                    id_user:req.params.id
                }
            })
            deleteImageResep(User.foto_user);
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

const deleteImageResep = (filePath) => {
    console.log('filePath', filePath);
    console.log('dir name :', __dirname);
    imagePath = path.join(__dirname,'..',filePath);
    fs.unlink(imagePath, err => console.log(err));
}


module.exports = User_Controller;