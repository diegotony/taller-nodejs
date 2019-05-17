const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let userschema = new Schema({
    name: {
        type: String,
        required: [true, "El nombre es Requerido"]
    },
    lastName: {
        type: String,
        required: [true, "El apellido es Requerido"]

    },
    email: {
        type: String,
        required: [true, "El email es Requerido"]
    },
    userName: {
        type: String,
        required: [true, "El nombre es Requerido"]
    },
    password: {
        type: String,
        required: [true, "El nombre es Requerido"]
    },
    age: {
        type: Number
    },
    rol: {
        type: Schema.Types.ObjectId,
        ref: 'Rol',
        required: [true, "El nombre es Requerido"]
    },
    state: {
        type: Boolean,
        default: true
    }

});

userschema.methods.toJSON = function () {
    let user = this
    let user_object = user.toObject()
    delete user_object.password
    return user_object
};

// userschema.plugin(uniqueValidator, {
//     message: `{PATH} debe ser unico`
// });


module.exports = mongoose.model('User', userschema);