const ResepModel = require ('../models/ResepModel');
const BahanModel = require('../models/BahanModel');
const response = require ('../helpers/respons-parser');
const sequelize = require('../config/database');

const { Op } = require("sequelize");

ResepModel.hasMany(BahanModel,{foreignKey:'id_resep'});

const Resep_Controller = {
    getResep :  async (req, res) => {
         try {
            const resep = await ResepModel.findAll();
            response.success(res, { data: resep });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    getStructuredResep : async (req, res) => {
        try {
            const resep = await ResepModel.findAll({
                include : [{
                    model : BahanModel,
                    attributes : ['bahan']
                }]
            })
            response.success(res, {data:resep});
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });

        }
    },
    getResepByID : async (req, res) => {
        try {
            const resep = await ResepModel.findAll({
                where : {
                    id_resep : req.params.id
                }
            })
                response.success(res, {data:resep})
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    searchResep : async (req,res) => {
        try {
            const resep = await ResepModel.findAll({
                where : {
                    [Op.substring] : {nama_resep : req.params.term}
                }
            })
                response.success(res, {data:resep})
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    addResep : async (req, res) => {
        try {
            await ResepModel.create(req.body);
            response.success(res, { message: 'create data success!' });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    deleteResep : async (req, res) => {
        try {
            await ResepModel.destroy({
                where : {
                    id_resep:req.params.id
                }
            });
            response.success(res, { message: 'delete data success!' });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    updateResep : async (req, res) => {
        try {
            await ResepModel.update(req.body,{
                where : {
                    id_resep:req.params.id
                }
            });
            response.success(res, { message: 'update data success!' });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    }
}

module.exports = Resep_Controller;