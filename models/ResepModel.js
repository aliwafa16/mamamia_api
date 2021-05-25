const database =  require ('../config/database');
const sequelize = require('sequelize');

const ResepModel = database.define('tbl_resep',{
    id_resep : {
        type : sequelize.INTEGER,
        primaryKey : true
    },
    nama_resep : {
        type : sequelize.CHAR
    },
    deskripsi_resep : {
        type : sequelize.TEXT
    },
    gambar_resep : {
        type : sequelize.CHAR
    },
    link_youtube : {
        type : sequelize.CHAR
    },
    bahan : {
        type : sequelize.TEXT
    },
    langkah_memasak : {
        type : sequelize.TEXT
    },
    kalori : {
        type : sequelize.INTEGER
    },
    is_active : {
        type : sequelize.INTEGER
    }
},{
    createdAt : 'created_at',
    updatedAt : 'updated_at',
    tableName : 'tbl_resep',
    sequelize,
    modelName : 'ResepModel'
});

module.exports = ResepModel;