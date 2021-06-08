const database = require('../config/database');
const sequelize = require ('sequelize');

const KomentarPostModel = database.define('tbl_komentar_post', {
    id_komentar_post_user : {
        type : sequelize.INTEGER,
        primaryKey : true
    },
    id_post_user : {
        type : sequelize.INTEGER
    },
    id_user : {
        type : sequelize.INTEGER
    },
    komentar : {
        type : sequelize.CHAR
    },
    rating : {
        type : sequelize.INTEGER
    },
    gambar : {
        type : sequelize.CHAR
    },
    is_active : {
        type : sequelize.INTEGER
    }
},{
    createdAt : 'created_at',
    updatedAt : 'updated_at',
    sequelize,
    tableName : 'tbl_komentar_post_user',
    modelName : 'KomentarPostModel'
});

module.exports = KomentarPostModel