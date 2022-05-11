
const mongoose = require("mongoose");

const EsquemaAutor = new mongoose.Schema({

    nombre: {
        type: String,
        required: [true, "Nombre es obligatorio"],
        minlength: [3, "Nombre debe tener minimo 3 caracteres"],
        unique: [true, "El nombre ya está en uso"]
    }
}, { timestamps: true, versionKey: false }
)

const Autor = mongoose.model("autores", EsquemaAutor);

module.exports = Autor;