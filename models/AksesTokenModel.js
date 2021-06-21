const database = require('../config/database');
const sequelize = require('sequelize');

const AksesTokenModel = database.define('tbl_akses_token', {
    id_akses_token : {
        type : sequelize.INTEGER,
        primaryKey : true
    },
    id_usr : {
        type : sequelize.INTEGER
    },
    akses_token : {
        type : sequelize.TEXT
    },
    ip_address : {
        type : sequelize.INTEGER
    }
},
{
    createdAt : 'created_at',
    updatedAt : 'updated_at',
    tableName : 'tbl_akses_token',
    sequelize,
    modelName : 'AksesTokenModel'
 });

 module.exports = AksesTokenModel;