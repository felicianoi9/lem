const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const BookSchema = new mongoose.Schema({
    isbn:{
        type: String,
        required: false,        
    },
    titulo:{
        type: String,
        required: true,
    },
    edicao:{
        type: String,
        required: true,
    },
    anoedicao:{
        type: String,
        required: true,
    },
    tipodesuporte:{
        type: String,
        required: true,
    },
    paginas:{
        type: String,
        required: true,
    },
    editor:{
        type: String,
        required: true,
    },
    participantes:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
}); 

BookSchema.plugin(mongoosePaginate);
mongoose.model('Book', BookSchema);