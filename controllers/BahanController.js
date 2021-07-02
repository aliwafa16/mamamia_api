const BahanModel = require('../models/BahanModel');
const response = require ('../helpers/respons-parser');
const ResepModel = require ('../models/ResepModel');

BahanModel.belongsTo(ResepModel,{foreignKey:'id_resep'})

const Bahan_Controller = {
    getBahan : async (req, res) => {
        try {
            const bahan = await BahanModel.findAll({
                include : [{
                    model : ResepModel,
                    attributes : ['nama_resep']
                }]
            });
            response.success(res, {data:bahan});
        }catch(err){
            console.log(err);
            response.err(res, {error : err.message});
        }
    },
    getBahanByID : async (req, res) => {
        try {
            const bahan = await BahanModel.findOne({
                where : {
                    id_bahan : req.params.id
                }
            });
            response.success(res, {data:bahan});
        }catch(err){
            console.log(err);
            response.error(res, {error:err.message})
        }
    },
    getBahanByResep : async (req, res) => {
        try {
            const resep = await ResepModel.findOne({
                attributes : ['nama_resep'],
                where : {
                    id_resep : req.params.id
                }
            })
            const bahan = await BahanModel.findAll({
                attributes : ['id_bahan','bahan'],
                where : {
                    id_resep : req.params.id
                }
            })
            response.success(res, {data:{
                resep, bahan
            }});
        }catch(err){
            console.log(err)
            response.error(res,{error:err.message});
        }
    },
    addBahan : async(req, res) => {
        try {
            await BahanModel.create(req.body);
            response.success(res, {message:'create data success !!'})
        }catch(err){
            console.log(err)
            response.error(res, {error: err.message});
        }
    },
    updateBahan : async (req, res) => {
        try {
            await BahanModel.update(req.body, {
                where : {
                    id_bahan: req.params.id
                }
            })
            response.success(res, {message:'Update data success !!'})
        }
        catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    deleteBahan : async (req, res) => {
        try {
            await BahanModel.destroy({
                where : {
                    id_bahan : req.params.id
                }
            })
            response.success(res, { message: 'delete data success!' });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    }
}

module.exports = Bahan_Controller;