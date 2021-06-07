const database =  require ('../config/database');
const sequelize = require('sequelize');

const PenjadwalanModel = database.define('tbl_penjadwalan',{
    id_penjadwal : {
        type : sequelize.INTEGER,
        primaryKey : true
    },
    id_resep : {
        type : sequelize.INTEGER
    },
    id_user : {
        type : sequelize.INTEGER
    },
    catatan : {
        type : sequelize.INTEGER
    },
    for_date : {
        type : sequelize.DATE
    },
    is_active : {
        type : sequelize.INTEGER
    },

},{
    createdAt : 'created_at',
    updatedAt : 'updated_at',
    tableName : 'tbl_penjadwalan',
    sequelize,
    modelName : 'PenjadwalanModel'
});

module.exports = PenjadwalanModel;