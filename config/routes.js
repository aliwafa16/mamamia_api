const express = require('express');
const Barang = require('../controllers/barangController');
const Barang_Masuk = require('../controllers/barangMasukController')
const Resep = require('../controllers/ResepController');
const Bahan = require('../controllers/BahanController');
const jadwal = require('../controllers/PenjadawalanController')
const user = require('../controllers/UserController');

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

// ROUTE BAHAN
router.get('/bahan', Bahan.getBahan);
router.get('/bahan/:id', Bahan.getBahanByID);
router.get('/bahan/r/:id', Bahan.getBahanByResep);
router.post('/bahan', Bahan.addBahan);
router.delete('/bahan/:id', Bahan.deleteBahan);
router.put('/bahan/:id', Bahan.updateBahan);


// ROUTE PENJADWALAN
router.get('/jadwal', jadwal.getPenjadwalan);
router.get('/jadwal/:id', jadwal.getPendwalanByID);
router.get('/jadwal/u/:id', jadwal.getAllPenjadwalanByUser);
router.post('/jadwal', jadwal.addPenjadwalan);
router.put('/jadwal/:id', jadwal.updatePenjadwalan);
router.delete('/jadwal/:id', jadwal.deletePenjadwalan);


// ROUTE USER
router.get('/user', user.getAllUser);
router.get('/user/:id', user.getUserByID);
router.post('/user', user.addUser);
router.put('/user/:id', user.updateUser);
router.delete('/user/:id', user.deleteUser);

module.exports = router;