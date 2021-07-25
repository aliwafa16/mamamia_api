const express = require('express');
const Barang = require('../controllers/barangController');
const Barang_Masuk = require('../controllers/barangMasukController')
const Resep = require('../controllers/ResepController');
const Bahan = require('../controllers/BahanController');
const Masak = require('../controllers/LangkahMasakController');
const jadwal = require('../controllers/PenjadawalanController')
const user = require('../controllers/UserController');
const registrasi = require('../middleware/auth');
const post = require('../controllers/PostUserController')

const router = express.Router();


// router.get('/barang',Barang.getBarang);
// router.get('/barang/:id',Barang.getBarangByID);
// router.post('/barang',Barang.addBarang);
// router.put('/barang/:id',Barang.updateBarang);
// router.delete('/barang/:id', Barang.hapusBarang);

// router.get('/barangmasuk',Barang_Masuk.getBarangMasuk);

// ROUTE RESEP
router.get('/resep', Resep.getResep);                       //(ADMIN : Mengambil seluruh data master tabel resep)
router.get('/resep/s', Resep.getActiveResep);               //(User : Mengambil seluruh data resep aktif yang join dengan tabel bahan dan langkah memasak)
router.get('/resep/s/:id', Resep.getActiveResepByID);           //(User : Mengambil seluruh data resep aktif yang join dengan tabel bahan dan langkah memasak berdasarkan ID)
router.get('/resep/:id', Resep.getResepByID);               //(ADMIN : Mengambil seluruh data master tabel resep berdasarkan ID)
router.get('/resep/search/:term', Resep.searchResep)        //(ADMIN dan User : Mencari data resep sesuai nama resep)
router.post('/resep', Resep.addResep);                      //(ADMIN : Menambah data resep)
router.delete('/resep/:id', Resep.deleteResep);             //(ADMIN : Menghapus data resep)
router.delete('/resep/b/:id', Resep.deleteResepAndBahan);   //(ADMIN : Menghapus data resep sekaligus dengan bahan)
router.put('/resep/stat/:id', Resep.updateStat);            //(ADMIN : Update status data resep aktif atau tidak)
router.put('/resep/:id', Resep.updateResep);                //(ADMIN : Update data master tabel resep)

// ROUTE BAHAN
router.get('/bahan', Bahan.getBahan);                       //(ADMIN : Mengambil seluruh data master tabel bahan)
router.get('/bahan/:id', Bahan.getBahanByID);               //(ADMIN : Mengambil seluruh data master tabel bahan berdasarkan ID)
router.get('/bahan/r/:id', Bahan.getBahanByResep);
router.post('/bahan', Bahan.addBahan);
router.delete('/bahan/:id', Bahan.deleteBahan);
router.put('/bahan/:id', Bahan.updateBahan);
router.put('/bahan/stat/:id', Bahan.updateStat);

// ROUTE LANGKAH MASAK
router.get('/masak', Masak.getLangkahMasak);
router.get('/masak/:id', Masak.getLangkahMemasakByID);
router.get('/masak/r/:id', Masak.getLangkahMemasakByResep);
router.post('/masak', Masak.addLangkahMasak);
router.delete('/masak/:id', Masak.deleteLangkahMasak);
router.put('/masak/:id', Masak.updateLangkahMasak);
router.put('/masak/stat/:id', Masak.updateStat);



// ROUTE PENJADWALAN
router.get('/jadwal', jadwal.getPenjadwalan);
router.get('/jadwal/:id', jadwal.getPendwalanByID);
router.get('/jadwal/u/:id', jadwal.getAllPenjadwalanByUser);
router.post('/jadwal', jadwal.addPenjadwalan);
router.put('/jadwal/:id', jadwal.updatePenjadwalan);
router.delete('/jadwal/:id', jadwal.deletePenjadwalan);
router.put('/jadwal/stat/:id', jadwal.updateStat);


// ROUTE USER
router.get('/user', user.getAllUser);
router.get('/user/:id', user.getUserByID);
router.post('/user', user.addUser);
router.put('/user/:id', user.updateUser);
router.delete('/user/:id', user.deleteUser);
router.put('/user/stat/:id', user.updateStat);
router.get('/user/p/:id', user.getUserPost);

// ROUTE POST
router.get('/post', post.getPost);
router.get('/post/s/', post.getActivePost );
router.post('/post', post.addPost);
router.delete('/post/:id', post.deletePost);
router.put('/post/:id', post.updatePost);
router.put('/post/stat/:id', post.updateStat);

// ROUTE REGISTRASI
router.post('/sign-up', registrasi.signUp);
router.post('/sign-in', registrasi.signIn);

module.exports = router;