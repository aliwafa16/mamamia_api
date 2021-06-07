const UserModel = require('../models/UserModel');
const response = require('../helpers/respons-parser');

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
        }catch(err){
            console.log(err);
            response.error(res, {error: err.message});
        }
    },
    addUser : async(req, res) => {
        try {
            await UserModel.create(req.body);
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