const database = require('../config/database');
const sequelize = require ('sequelize');

const LangkahMemasakModel = database.define('tbl_langkah_memasak', {
    id_langkah_memasak : {
        type : sequelize.INTEGER,
        primaryKey : true
    },
    id_resep : {
        type : sequelize.INTEGER
    },
    langkah_masak : {
        type : sequelize.CHAR
    },
    is_active : {
        type : sequelize.INTEGER
    }
},{
    createdAt : 'created_at',
    updatedAt : 'updated_at',
    sequelize,
    tableName : 'tbl_langkah_memasak',
    modelName : 'LangkahMemasakModel'
});

module.exports = LangkahMemasakModel;