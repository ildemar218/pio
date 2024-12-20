/*Conectar a la base de datos*/ 

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/redsocial', {
  usenewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Conectado a la base de datos'))
  .catch((error) => console.error("No se pudo conectar a la base de datos",error));