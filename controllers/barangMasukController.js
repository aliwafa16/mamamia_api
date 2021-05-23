const Barang_Masuk = require ('../models/barangMasukModel');
const response = require ('../helpers/respons-parser');
const Barang = require ('../models/barangModel');

Barang_Masuk.belongsTo(Barang,{foreignKey:'id_barang'});

const Barang_Masuk_Controller = {
    getBarangMasuk : async (req, res) => {
        try {
            const barang_masuk = await Barang_Masuk.findAll({
                include : [{
                    model : Barang
                }]
            });
            response.success(res, { data : barang_masuk });
        }catch(err){
            console.log(err)
            response.error(res, { error: err.message });
        }
    }
}

module.exports = Barang_Masuk_Controller