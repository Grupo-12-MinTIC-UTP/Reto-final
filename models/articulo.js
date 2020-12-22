'use strict';
const {
  Model, ForeignKeyConstraintError
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Articulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Categoria, { foreignKey: 'categoriaid', as: 'categoria' });
      // define association here
    }
  };
  Articulo.init({
    codigo: DataTypes.STRING,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    estado: DataTypes.INTEGER,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Articulo',
  });
  return Articulo;
};