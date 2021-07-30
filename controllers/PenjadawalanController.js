const PenjadwalanModel = require('../models/PenjadwalanModel');
const response = require('../helpers/respons-parser');
const UserModel = require('../models/UserModel');
const ResepModel = require('../models/ResepModel');

PenjadwalanModel.belongsTo(UserModel,{foreignKey:'id_user'});
PenjadwalanModel.belongsTo(ResepModel,{foreignKey:'id_resep'});
const Penjadwalan_Controller = {
    getPenjadwalan : async (req, res) => {
        try {
            const jadwal = await PenjadwalanModel.findAll({
                include : [{
                    model : UserModel,
                    attributes : ['id_user', 'username'],
                    required : false
                },
                {
                    model : ResepModel,
                    attributes : ['id_resep', 'nama_resep'],
                    required : false
                }
            ]
            });
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

            const jadwal = await PenjadwalanModel.findAll({
                include : [
                    {
                        model : UserModel,
                        attributes : ['id_user','full_name','username','email_user'],
                        required:false
                    },
                    {
                        model:ResepModel,
                        attributes: ['id_resep','nama_resep','kalori','asal_masakan','gambar_resep'],
                        required:false
                    }

                ],
                where:{
                    id_user : req.params.id,
                    is_active : 1
                }
            })
            response.success(res, {data:jadwal})
            // const user = await UserModel.findOne({
            //     attributes : ['full_name','username','email_user'],
            //     where : {
            //         id_user : req.params.id
                    
            //     }
            // })
            // const jadwal = await PenjadwalanModel.findAll({
            //     where : {
            //         id_user : req.params.id
            //     }
            // })
            // response.success(res, {data : {
            //     user, jadwal
            // }})
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
            response.success(res, { message: 'delete data success!' });
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
            await PenjadwalanModel.update(state, {
                where : {
                    id_penjadwal : req.params.id
                }
            })
            response.success(res, { message: 'update data success!' });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    }
}

module.exports = Penjadwalan_Controller;