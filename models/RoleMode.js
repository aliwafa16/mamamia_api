const database = require('../config/database');
const sequelize = require('sequelize');

const RoleModel = database.define('tbl_role',{
    id_role : {
        type : sequelize.INTEGER,
        primaryKey : true
    },
    nama_role : {
        type : sequelize.CHAR
    },
    is_active : {
        type : sequelize.INTEGER
    }
},{
    createdAt : 'created_at',
    updatedAt : 'updated_at',
    tableName : 'tbl_role',
    sequelize,
    modelName : 'RoleModel'
});

module.exports = RoleModel;