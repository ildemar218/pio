const express = require('express')
const app = express()
const port = 3030
const path = require('path')

const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
require('./config/db');

app.use(express.static(path.join(__dirname, 'public')));

//Configurar middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.set ('view engine', 'ejs');

//Configurar rutas
app.use("/",userRoute);

//Puerto de escucha
app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
})



