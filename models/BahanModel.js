const database = require('../config/database');
const sequelize = require ('sequelize');

const BahanModel = database.define('tbl_bahan', {
    id_bahan : {
        type : sequelize.INTEGER,
        primaryKey : true
    },
    id_resep : {
        type : sequelize.INTEGER,
    },
    bahan : {
        type : sequelize.CHAR
    },
    is_active : {
        type : sequelize.INTEGER
    }
},{
    createdAt : 'created_at',
    updatedAt : 'updated_at',
    tableName : 'tbl_bahan',
    sequelize,
    modelName : 'BahanModel'
});

module.exports = BahanModel;