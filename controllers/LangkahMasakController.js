const MasakModel = require('../models/LangkahMemasakModel');
const response = require('../helpers/respons-parser');
const ResepModel = require('../models/ResepModel');
const LangkahMemasakModel = require('../models/LangkahMemasakModel');

const LangkahMasak_Controller = {
    getLangkahMasak : async (req, res) => {
        try {
            const langkahMasak = await MasakModel.findAll();
            response.success(res, {data:langkahMasak});
        }catch(err){
            console.log(err);
            response.err(res, {error : err.message});
        }
    },
    getLangkahMemasakByID : async (req, res) => {
        try {
            const langkahMasak = await MasakModel.findOne({
                where : {
                    id_langkah_masak : req.params.id
                }
            })
            response.success(res, {data:langkahMasak});
        }catch(err){
            console.log(err);
            response.err(res, {error : err.message});
        }
    },
    getLangkahMemasakByResep : async (req, res) => {
        try {
            const resep = await ResepModel.findOne({
            attributes : ['nama_resep'],
            where : {
                id_resep : req.params.id
            }
        })

        const langkahMasak = await MasakModel.findAll({
            attributes : ['id_langkah_masak', 'langkah_masak'],
            where : {
                id_resep : req.params.id
            }
        })
         response.success(res, {data:{
                resep, langkahMasak
            }});
        }catch(err){
            console.log(err)
            response.error(res,{error:err.message});
        }
        
    },
    addLangkahMasak : async (req, res) => {
        try{
            await LangkahMemasakModel.create(req.body);
            response.success(res, {message:'create data success !!'})
        }catch(err){
            console.log(err)
            response.error(res, {error: err.message});
        }
    },
    updateLangkahMasak : async (req, res) => {
        try {
            await LangkahMemasakModel.update(req.body, {
                where : {
                    id_langkah_masak : req.params.id
                }
            })
            response.success(res, {message:'Update data success !!'})
        }catch(err){
            console.log(err)
            response.error(res, {error: err.message});
        }
    },
    deleteLangkahMasak : async (req, res) => {
        try {
            await LangkahMemasakModel.destroy({
                where : {
                    id_langkah_masak : req.params.id
                }
            })
            response.success(res, { message: 'delete data success!' });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    }
}

module.exports = LangkahMasak_Controller;