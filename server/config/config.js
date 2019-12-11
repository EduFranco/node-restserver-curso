// ======================
//  Puerto
// ======================
process.env.PORT = process.env.PORT || 3000;


// ======================
//  Entorno
// ======================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ======================
//  Vencimiento del Token
// ======================
//  60 segundos
//  60 minutos
//  24 horas
//  30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// ======================
//  SEED de autenticación
// ======================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


// ======================
//  Base de Datos
// ======================
let urlBD;
if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD = process.env.MONGO_URI;
}
process.env.URLBD = urlBD;

// ======================
//  Google Client ID
// ======================
process.env.CLIENT_ID = process.env.CLIENT_ID || '966266566933-hmdfh0tenrf292kb9976499n6qu0n76g.apps.googleusercontent.com';