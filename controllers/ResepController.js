const ResepModel = require ('../models/ResepModel');
const BahanModel = require('../models/BahanModel');
const MasakModel = require('../models/LangkahMemasakModel');
const response = require ('../helpers/respons-parser');
const sequelize = require('../config/database');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const { Op } = require("sequelize");

ResepModel.hasMany(BahanModel,{foreignKey:'id_resep', as : 'tbl_bahans'});
ResepModel.hasMany(MasakModel,{foreignKey:'id_resep', as : 'tbl_langkah_masaks'});



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
    getActiveResep : async (req, res) => {
        try {
            const resep = await ResepModel.findAll({
                include : [{
                    model : BahanModel, as : 'tbl_bahans',
                    attributes : ['bahan'],
                    where : {
                        is_active : 1
                    }
                },
                {
                    model : MasakModel, as : 'tbl_langkah_masaks',
                    attributes : ['langkah_masak'],
                    where : {
                        is_active : 1
                    }
                }],
                where : {
                    is_active : 1
                }
            })
            response.success(res, {data:resep});
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });

        }
    },
    getActiveResepByID : async (req, res) => {
        try {
            const resep = await ResepModel.findAll({
                include : [{
                    model : BahanModel, as : 'tbl_bahans',
                    attributes : ['bahan'],
                    where : {
                        is_active : 1
                    }
                },
                {
                    model : MasakModel, as : 'tbl_langkah_masaks',
                    attributes : ['langkah_masak'],
                    where : {
                        is_active : 1
                    }
                }],
                where : {
                    id_resep : req.params.id
                }
            })
            response.success(res, {data:resep});
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });

        }
    },
    getResepByID : async (req, res) => {
        try {
            const resep = await ResepModel.findOne({
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
                    nama_resep : {[Op.like]: `%${req.params.term}%`}
                },
                attributes : ['nama_resep', 'id_resep']
            })
            if(resep!=null){
                response.success(res, {data:resep})
            }else{
                response.error(res, { error: err.message });
            } 
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    addResep : async (req, res) => {
        try {
            const data = {
                nama_resep : req.body.nama_resep,
                deskripsi_resep : req.body.deskripsi_resep,
                gambar_resep : req.file.path,
                link_youtube : req.body.link_youtube,
                bahan : req.body.bahan,
                langkah_memasak : req.body.langkah_memasak,
                kalori : req.body.kalori,
                is_active : 1
            }
            await ResepModel.create(data);
            response.success(res, { message: 'create data success!' });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    deleteResepAndBahan : async (req, res) => {
        try {
            await ResepModel.destroy({
                 where : {
                    id_resep:req.params.id
                }
            })
            await BahanModel.destroy({
                where : {
                    id_resep:req.params.id
                }
            })
            response.success(res, { message: 'delete data success!' });

        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    deleteResep : async (req, res) => {
        try {

            const Resep = await ResepModel.findOne({
                where : {
                    id_resep:req.params.id
                }
            })
            deleteImageResep(Resep.gambar_resep);
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
            const gambar = req.file.path
            if(gambar!=null){
                const Resep = await ResepModel.findOne({
                where : {
                    id_resep:req.params.id
                }
            })
            deleteImageResep(Resep.gambar_resep);
            }
             const data = {
                id_resep : req.body.id_resep,
                nama_resep : req.body.nama_resep,
                deskripsi_resep : req.body.deskripsi_resep,
                gambar_resep : req.file.path,
                link_youtube : req.body.link_youtube,
                bahan : req.body.bahan,
                langkah_memasak : req.body.langkah_memasak,
                kalori : req.body.kalori,
                is_active : req.body.is_active 
            }

            await ResepModel.update(data,{
                where : {
                    id_resep:req.params.id
                }
            });
            response.success(res, { message: 'update data success!' });
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
            await ResepModel.update(state, {
                where : {
                    id_resep : req.params.id
                }
            })
            response.success(res, { message: 'update data success!' });
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


module.exports = Resep_Controller;