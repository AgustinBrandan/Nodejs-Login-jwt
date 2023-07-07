const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');


const app = express();

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos

// import routes

// route middlewares
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'Hola, Bienvenido'
    })
});

// import routes
const authRoutes = require('./routes/auth');


// URL de conexión a la base de datos MongoDB
const mongoURL = process.env.MONGO_URL;


// Conexión a la base de datos
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión a la base de datos establecida');
}).catch((error) => {
  console.error('Error al conectar a la base de datos:', error);
  process.exit(1); // Salir de la aplicación en caso de error de conexión
});

app.use(express.json());
// route middlewares
app.use('/api/users', authRoutes);
// import routes
const dashboadRoutes = require('./routes/dashboard');
const verifyToken = require('./routes/validate-token');

// route middlewares
app.use('/api/dashboard', verifyToken, dashboadRoutes);

// iniciar server
const PORT =  3000;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})