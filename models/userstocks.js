'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Userstocks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsToMany(Stocks, { through: Userstocks });
      Stocks.belongsToMany(Users, { through: Userstocks });
    }
  }
  Userstocks.init(
    {
      userId: DataTypes.INTEGER,
      stockId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Userstocks',
    }
  );
  return Userstocks;
};
