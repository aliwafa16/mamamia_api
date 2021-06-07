const database =  require ('../config/database');
const sequelize = require('sequelize');

const UserModel = database.define('tbl_user',{
    id_user : {
        type : sequelize.INTEGER,
        primaryKey : true
    },
    username : {
        type : sequelize.CHAR
    },
    full_name : {
        type : sequelize.CHAR
    },
    email_user : {
        type : sequelize.CHAR
    },
    password_user : {
        type : sequelize.CHAR
    },
    foto_user : {
        type : sequelize.CHAR
    },
    role_id : {
        type : sequelize.INTEGER
    },
    is_active : {
        type : sequelize.INTEGER
    }
},{
    createdAt : 'created_at',
    updatedAt : 'updated_at',
    tableName : 'tbl_user',
    sequelize,
    modelName : 'UserModel'
});

module.exports = UserModel;