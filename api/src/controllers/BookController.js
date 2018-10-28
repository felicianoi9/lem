const mongoose = require('mongoose');
const Book = mongoose.model('Book');

module.exports = {
    async index( req, res ) {
        const { page = 1 } = req.query;
        const books = await Book.paginate({}, { page, limit: 5 });
        return res.json(books);
    },

    async show( req, res ) {
        const book = await Book.findById(req.params.id);
        return res.json(book);
    },

    async update( req, res ) {
        const book = await Book.findOneAndUpdate(req.params.id, req.body, { new: true });
        return res.json(book);
    },

    async store( req, res ) {
        const book = await Book.create(req.body);
        return res.json(book);
    },

    async destroy( req, res ) {
        await Book.findOneAndRemove(req.params.id);
        return res.send('Deletado com sucesso');
    },

};