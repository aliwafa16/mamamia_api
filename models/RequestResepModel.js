const database = require('../config/database');
const sequelize = require ('sequelize');

const RequestResepModel = database.define('tbl_request_resep', {
    id_request_resep : {
        type : sequelize.INTEGER,
        primaryKey : true
    },
    nama_request_resep : {
        type : sequelize.CHAR
    },
    pesan : {
        type : sequelize.TEXT
    },
    id_user : {
        type : sequelize.INTEGER
    },
    status : {
        type : sequelize.INTEGER
    },
    tanggal_request : {
        type : sequelize.CHAR
    }
},
{
    createdAt : 'created_at',
    updatedAt : 'updated_at',
    sequelize,
    tableName : 'tbl_request_resep',
    modelName : 'RequestResepModel'
})

module.exports = RequestResepModel