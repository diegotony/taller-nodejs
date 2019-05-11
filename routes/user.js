const express = require("express");
const app = express();
const User = require('../models/user');

// app.get("/usuario", (req, res) => {
//     res.json({
//         ok: true,
//         msg: "All ok"
//     });
// });



app.post("/user", (req, res) => {
    let body = req.body;
    let userGuardar = new User({
        nombre: body.nombre,
        apellido: body.apellido,
        edad: body.edad
    });

    userGuardar.save((err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                error: err
            });

        }
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                error: err
            });
        }
        res.status(200).json({
            ok: true,
            data: usuarioDB
        })
    });
});
module.exports = app;