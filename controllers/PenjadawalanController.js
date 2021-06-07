const PenjadwalanModel = require('../models/PenjadwalanModel');
const response = require('../helpers/respons-parser');
const UserModel = require('../models/UserModel')

const Penjadwalan_Controller = {
    getPenjadwalan : async (req, res) => {
        try {
            const jadwal = await PenjadwalanModel.findAll();
            response.success(res, {data : jadwal})
        }catch(err){
            console.log(err);
            response.error(res, {error: err.message});
        }
    },
    getPendwalanByID : async (req, res) => {
        try {
            const jadwal = await PenjadwalanModel.findOne({
                where : {
                    id_penjadwal : req.params.id
                }
            })
            response.success(res, {data:jadwal})
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    getAllPenjadwalanByUser : async (req, res) => {
        try {
            const user = await UserModel.findOne({
                attributes : ['full_name','username','email_user'],
                where : {
                    id_user : req.params.id
                    
                }
            })
            const jadwal = await PenjadwalanModel.findAll({
                where : {
                    id_user : req.params.id
                }
            })
            response.success(res, {data : {
                user, jadwal
            }})
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    updatePenjadwalan : async (req, res) => {
        try {
            await PenjadwalanModel.update(req.body, {
                where : {
                    id_penjadwal : req.params.id
                }
            })
            response.success(res, {message:'Update data success !!'})
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    addPenjadwalan : async (req, res) => {
        try {
            await PenjadwalanModel.create(req.body);
            response.success(res, {message : 'create data success !!'})
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    deletePenjadwalan : async (req, res) => {
        try {
            await PenjadwalanModel.destroy({
                where : {
                    id_penjadwal : req.params.id
                }
            })
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message }); 
        }
    }
}

module.exports = Penjadwalan_Controller;