const express = require('express');
const Barang = require('../controllers/barangController');
const Barang_Masuk = require('../controllers/barangMasukController')

const router = express.Router();


router.get('/barang',Barang.getBarang);
router.get('/barang/:id',Barang.getBarangByID);
router.post('/barang',Barang.addBarang);
router.put('/barang/:id',Barang.updateBarang);
router.delete('/barang/:id', Barang.hapusBarang);

router.get('/barangmasuk',Barang_Masuk.getBarangMasuk);

module.exports = router;