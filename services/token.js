var jwt = require('jsonwebtoken');
const models = require('../models');
async function checkToken(token) {
    let __id = null;
    try {
        const { _id } = await jwt.decode(token);
        __id = _id;
    } catch (e) {
        return false;
    }
    const user = await models.Usuario.findOne({ where: { id: __id, estado: 1 } });
    if (user) {
        const token = jwt.sign({ _id: __id }, 'secretKeyToGenerateToken', { expiresIn: '1d' });
        return { token, rol: user.rol };
    } else {
        return false;
    }
}
module.exports = {
    //generar el token
    encode: async (_id, rol) => {
        const token = jwt.sign({ _id: _id, rol: rol }, 'secretKeyToGenerateToken', { expiresIn: '1d' });
        return token;
    },
    //permite decodificar el token
    decode: async (token) => {
        try {
            const { _id } = await jwt.verify(token, 'secretKeyToGenerateToken');
            const user = await models.Usuario.findOne({ where: { _id, estado: 1 } });
            if (user) {
                return user;
            } else {
                return false;
            }
        } catch (e) {
            const newToken = await checkToken(token);
            return newToken;
        }
    }
}