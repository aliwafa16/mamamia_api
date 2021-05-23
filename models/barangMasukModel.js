const database = require('../config/database');
const sequelize = require('sequelize');

const {DataType} = sequelize;

const barangMasuk_Model = database.define('barang_masuk',{
    id_barang_masuk : {
        type : sequelize.INTEGER,
        primaryKey : true
    },
    kode_barang_masuk : {
        type : sequelize.CHAR
    },
    id_barang : {
        type : sequelize.INTEGER,
    },
    jumlah_barang_masuk : {
        type : sequelize.INTEGER,
    },
    tanggal_barang_masuk : {
        type : sequelize.DATE,
    },
    id_tipe_barang : {
        type : sequelize.INTEGER
    },
    harga_barang_masuk : {
        type : sequelize.INTEGER
    }
},{
    createdAt : 'created_at',
    updatedAt : 'updated_at',
    tableName : 'barang_masuk',
    sequelize,
    modelName : 'Barang Masuk'
})

module.exports = barangMasuk_Model