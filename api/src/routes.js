const express = require('express');
const routes = express.Router();

const BookController = require('./controllers/BookController');

routes.get('/books', BookController.index);
routes.get('/books/:id', BookController.show);
routes.put('/books/:id', BookController.update);
routes.delete('/books/:id', BookController.destroy);
routes.post('/books', BookController.store);
module.exports = routes;