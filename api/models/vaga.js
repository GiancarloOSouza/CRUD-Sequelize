'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vaga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vaga.hasOne(models.Veiculo, {
        foreignKey: 'vagaVeiculo_id'
      })
      Vaga.hasOne(models.Ticket, {
        foreignKey: 'vagaTicket_id'
      })
    }
  }
  Vaga.init({
    setor: DataTypes.STRING,
    disponivel: DataTypes.BOOLEAN,
    numero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vaga',
  });
  return Vaga;
};