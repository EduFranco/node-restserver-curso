//====================
// Puerto
//====================
process.env.PORT = process.env.PORT || 3000;


//====================
// Entorno
//====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//====================
// Base de Datos
//====================
let urlBD;
if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD = 'mongodb+srv://eduardo:Lalo353075502247@cluster0-y3juj.mongodb.net/cafe';
}
process.env.URLBD = urlBD;