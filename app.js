// Import module express
const express = require('express');

const multer = require('multer');

const bodyParser = require('body-parser');

const path = require('path');

// Import database
const database = require('./config/database');

// Import route
const router = require('./config/routes');

// inisiasi express
const app = express();

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});

const fileStorage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null,'images');
    },
    filename:(req, file, cb) => {
        cb(null, Date.now().toString()+'-'+file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype=='image/png'||file.mimetype=='image/jpg'||file.mimetype=='image/jpeg'){
        cb(null, true);
    }else{
        cb(null, false);
    }
}
app.use('/images', express.static(path.join(__dirname,'images')));
app.use(multer({storage:fileStorage, fileFilter:fileFilter}).single('gambar_resep'));

// const fileStorage = multer.diskStorage({
//     destination : (req, file, cb) => {
//         cb(null, 'mamamia_api/images/resep/');
//     },
//     filename : (req, file, cb) => {
//         cb(null, new Date().toString()+'-'+file.originalname);
//     }
// });

// const Filter = (req, file, cb)=>{
//     if(file.mimetype == '*.png' || file.mimetype == '*.jpg' || file.mimetype == '*.jpeg'){
//         cb(null, true);
//     }else{
//         cb(null, false);
//     }
// }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));

app.use(router);

app.listen(3000, () => {
    console.log(`Server started on port`);
});