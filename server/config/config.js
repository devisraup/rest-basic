// PUERTO
process.env.PORT = process.env.PORT || 3000;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Token
process.env.SEED = process.env.SEED || 'secret-dev';
// 30dias
process.env.CAD_TOKEN = 1000 * 60 * 60 * 24 * 30;


// Base de datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// Client ID google:
process.env.CLIENT_ID = process.env.CLIENT_ID || '1080488399007-as831kvojna7k5rne18qjd5d9sorm4ce.apps.googleusercontent.com';