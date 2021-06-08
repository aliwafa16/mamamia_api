const database = require('../config/database');
const sequelize = require ('sequelize');

const KomentarModel = database.define('tbl_komentar', {
    id_komentar : {
        type : sequelize.INTEGER,
        primaryKey : true
    },
    id_resep : {
        type : sequelize.INTEGER
    },
    id_user : {
        type : sequelize.INTEGER
    },
    komentar : {
        type : sequelize.CHAR
    },
    rating : {
        type : sequelize.INTEGER
    },
    gambar : {
        type : sequelize.CHAR
    },
    tanggal_komentar : {
        type : sequelize.CHAR
    },
    is_active : {
        type : sequelize.INTEGER
    }
},{
    createdAt : 'created_at',
    updatedAt : 'updated_at',
    sequelize,
    tableName : 'tbl_komentar',
    modelName : 'KomentarModel'
});

module.exports = KomentarModel;