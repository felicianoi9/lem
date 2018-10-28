const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/lemapi',{ useNewUrlParser: true });

requireDir('./src/models');

//Primeira rota Criando o banco de dados
app.use('/api', require("./src/routes"));

app.listen(3001);