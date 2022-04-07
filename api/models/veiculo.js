'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculo extends Model {
    
    static associate(models) {
      
      Veiculo.belongsTo(models.Vaga,{
        foreignKey: 'vagaVeiculo_id'
      })

      Veiculo.belongsTo(models.Pessoas, {
        foreignKey: 'donoVeiculo_id'
      })
    }
  }
  Veiculo.init({
    placa: DataTypes.STRING,
    tipo: DataTypes.STRING,
    cor: DataTypes.STRING,
    modelo: DataTypes.STRING,
    fabricante: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'Veiculo',
  });
  return Veiculo;
};