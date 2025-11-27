'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WasteItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WasteItem.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    basePrice: DataTypes.FLOAT,
    location: DataTypes.STRING,
    status: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    biddingEndDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'WasteItem',
  });
  return WasteItem;
};