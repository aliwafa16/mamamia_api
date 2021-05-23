const database = require ('../config/database');
const sequelize = require('sequelize');

const {DataType} = sequelize;

const barang_Model = database.define('barang',{
    id_barang : {
        type : sequelize.INTEGER,
        primaryKey : true
    },
    kode_barang : {
        type : sequelize.CHAR
    },
    nama_barang : {
        type : sequelize.CHAR
    },
    stok_barang : {
        type : sequelize.INTEGER
    },
    harga_barang : {
        type : sequelize.INTEGER
    }
},{
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'barang',
    sequelize,
    modelName: 'barang'
});

module.exports = barang_Model;