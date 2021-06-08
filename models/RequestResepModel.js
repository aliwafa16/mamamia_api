const database = require('../config/database');
const sequelize = require ('sequelize');

const RequestResepModel = database.define('tbl_request_resep', {
    id_request_resep : {
        type : sequelize.INTEGER,
        primaryKey : true
    },
    nama_request_resep : {
        type : sequelize.CHAR
    }
})