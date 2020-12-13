const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');
const app = express();


app.post('/login', (req, res) => {
    // getBody
    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {

        // Server Error
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }

        // Validate User
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario y Password incorrectos"
                }
            });
        }
        // Validate pass
        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario y Password incorrectos"
                }
            });
        }

        // Token 30 dias
        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, {
            expiresIn: process.env.CAD_TOKEN
        });

        // OK
        res.json({
            ok: true,
            usuario: usuarioDB,
            token: token
        });
    });
});


module.exports = app;