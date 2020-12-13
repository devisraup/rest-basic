const jwt = require('jsonwebtoken');

// Verify Token
let verificaToken = (req, res, next) => {

    let token = req.get('Authorization');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: err
            });
        }

        req.usuario = decoded.usuario;
        next();
    });
};

// Verify AdminRole
let verificaAdminRole = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es admin'
            }
        });
    }
};

module.exports = {
    verificaToken,
    verificaAdminRole
}