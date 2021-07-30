const database = require('../config/database');
const sequelize = require ('sequelize');

const PostUserModel = database.define('tbl_post_user',{
    id_post_user : {
        type : sequelize.INTEGER,
        primaryKey : true
    },
    id_user : {
        type : sequelize.INTEGER
    },
    gambar : {
        type : sequelize.CHAR
    },
    headline : {
        type : sequelize.CHAR
    },
    deskripsi : {
        type : sequelize.CHAR
    },
    tanggal_upload : {
        type : sequelize.DATE
    },
    is_active : {
        type : sequelize.INTEGER
    }
},{
    createdAt : 'created_at',
    updatedAt : 'updated_at',
    sequelize,
    tableName : 'tbl_post_user',
    modelName : 'PostUserModel'
})

module.exports = PostUserModel;