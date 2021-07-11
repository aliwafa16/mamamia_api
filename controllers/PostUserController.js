const PostModel = require('../models/PostUserModel');
const UserModel = require('../models/UserModel');
const KomentarModel = require('../models/KomentarPostModel');
const response = require ('../helpers/respons-parser');
const path = require('path');

PostModel.belongsTo(UserModel,{foreignKey:'id_user'});
PostModel.hasMany(KomentarModel, {foreignKey:'id_post_user'});
KomentarModel.belongsTo(UserModel,{foreignKey:'id_user'});

const Post_Controller = {
    getPost : async (req, res) => {
        try{
            const post = await PostModel.findAll({
                include : [{
                    model : UserModel,
                    attributes : ['id_user', 'username', 'full_name']
                }]
            });
            response.success(res, {data:post})
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    getActivePost : async (req, res) => {
        try{
            const post = await PostModel.findAll({
                include : [{
                    model : UserModel,
                    attributes : ['id_user', 'username', 'full_name'],
                    model : KomentarModel,
                    attributes : ['id_user','komentar','rating']
                }],
                where : {
                    is_active : 1
                }
            })
            response.success(res, {data:post})
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    addPost : async (req, res) =>{
        try{
            const data = {
                id_user : req.body.id_user,
                gambar : req.file.path,
                deskripsi : req.body.deskripsi,
                tanggal_upload : req.body.tanggal_upload,
                is_active : req.body.is_active
            }
            await PostModel.create(data);
            response.success(res, { message: 'create data success!' });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    deletePost : async (req, res) => {
        try{
            await PostModel.destroy({
                where : {
                    id_post_user : req.params.id
                }
            })

            await KomentarModel.destroy({
                where : {
                    id_post_user : req.params.id
                }
            })
            response.success(res, { message: 'delete data success!' });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    },
    updatePost : async (req, res) => {
        try{
            const gambar = req.file.path
            if(gambar!=null){
                    const post = await PostModel.findOne({
                    where : {
                        id_post_user:req.params.id
                    }
                })
                deleteImageResep(post.gambar);
            }

            const data = {
                id_post_user : req.body.id_post_user,
                id_user : req.body.id_user,
                gambar : req.file.path,
                deskripsi : req.body.deskripsi,
                tanggal_upload : req.body.tanggal_upload,
                is_active : req.body.is_active
            }

            await PostModel.update(data, {
                where : {
                    id_post_user : req.params.id
                }
            })
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
            await PostModel.update(state, {
                where : {
                    id_post_user : req.params.id
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


module.exports = Post_Controller;