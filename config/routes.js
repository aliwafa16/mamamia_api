const express = require('express');
const Barang = require('../controllers/barangController');
const Barang_Masuk = require('../controllers/barangMasukController')
const Resep = require('../controllers/ResepController');

const router = express.Router();


// router.get('/barang',Barang.getBarang);
// router.get('/barang/:id',Barang.getBarangByID);
// router.post('/barang',Barang.addBarang);
// router.put('/barang/:id',Barang.updateBarang);
// router.delete('/barang/:id', Barang.hapusBarang);

// router.get('/barangmasuk',Barang_Masuk.getBarangMasuk);

// ROUTE RESEP
router.get('/resep', Resep.getResep);
router.get('/resep/s', Resep.getStructuredResep);
router.get('/resep/:id', Resep.getResepByID);
router.get('/resep/search/:term', Resep.searchResep)
router.post('/resep', Resep.addResep);
router.delete('/resep/:id', Resep.deleteResep);
router.put('/resep/:id', Resep.updateResep);

module.exports = router;