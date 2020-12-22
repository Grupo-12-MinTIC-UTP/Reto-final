const models = require('../models');

const add = async (req, res, next) => {
    try {
        const reg = await models.Categoria.create(req.body);
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};

const query = async (req, res, next) => {
    try {
        const reg = await models.Categoria.findOne({ where: { id: req.query._id } });
        if (!reg) {
            res.status(404).send({
                message: 'El registro no existe'
            });
        } else {
            res.status(200).json(reg);
        }
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};

const list =  async (req, res, next) => {
    try {
        const reg = await models.Categoria.findAll();
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};

const remove = async (req, res, next) => {
    try {
        const reg = await models.Categoria.destroy({
            where: {
                _id:
                    req.body._id
            }
        });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e)
    }
};
const update = async (req, res, next) => {
    try {

        const reg = await models.Categoria.update({ nombre: req.body.nombre, descripcion: req.body.descripcion }, { where: { id: req.body.id } });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};

const activate = async (req, res, next) => {
    try {
        console.log(req.body._id);
        const reg = await models.Categoria.update({ estado: 1 }, { where: { id: req.body.id } });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};

const deactivate = async (req, res, next) => {
    try {
        const reg = await models.Categoria.update({ estado: 0 }, { where: { id: req.body.id } });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
}


module.exports = {
    add,
    query,
    list,
    update,
    remove,
    activate,
    deactivate
}