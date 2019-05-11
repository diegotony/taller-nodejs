// 
// PORT
// 
process.env.PORT = process.env.PORT || 3000;

// Envioroment
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// BD

let urlDB;
if (process.env.NODE_ENV == 'dev') {
    urlDB = 'mongodb://localhost:27017/sga'

} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;