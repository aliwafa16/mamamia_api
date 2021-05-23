const Barang = require('../models/barangModel');
const response = require('../helpers/respons-parser')
// const { Op } = require("sequelize");
const Barang_controller = {
    getBarang : async (req, res) => {
        try {
            const barang = await Barang.findAll();
            response.success(res, { data: barang });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });

        }
    },
    getBarangByID : async (req, res) => {
        try {
            const barang =  await Barang.findOne({
                where : {
                    id_barang: req.params.id
                }
            })
            response.success(res, { data: barang });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    addBarang : async (req, res) => {
        try {
            await Barang.create(req.body);
            response.success(res, { message: 'create data success!' });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    updateBarang : async (req, res) => {
        try {
            await Barang.update(req.body,{
                where : {
                    id_barang:req.params.id
                }
            });
            response.success(res, { message: 'update data success!' });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    hapusBarang : async (req, res) => {
        try {
            await Barang.destroy({
                where : {
                    id_barang:req.params.id
                }
            });
            response.success(res, { message: 'delete data success!' });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    }
}

module.exports = Barang_controller;