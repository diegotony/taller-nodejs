const jwt = require('jsonwebtoken')

// Verificar token

let verificar_token = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, process.env.SEED, (err, result) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: {
                    msg: "Token no valido"
                }
            })
        }
        req.usuario = result.usuario
        next();
    })
}


module.exports = verificar_token