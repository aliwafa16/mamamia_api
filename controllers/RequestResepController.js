const RequestModel = require('../models/RequestResepModel')
const response = require('../helpers/respons-parser');
const UserModel = require('../models/UserModel');

RequestModel.belongsTo(UserModel,{foreignKey:'id_user'});

const Request_Controller = {
    getAllRequest : async (req, res)=>{
        try {
            const request = await RequestModel.findAll({
                include : [{
                    model : UserModel,
                    attributes : ['id_user', 'username', 'full_name', 'email_user'],
                    required : false
                }
            ]
            });
            response.success(res, {data : request})
        }catch(err){
            console.log(err);
            response.error(res, {error: err.message});
        }
    },
    sendRequest : async (req, res) => {
      try {
            await RequestModel.create(req.body);
            response.success(res, {message : 'create data success !!'})
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    }
}

module.exports = Request_Controller;