const { DataTypes } = require('sequelize')
const { db } = require("./database")

  let Pet = db.define("pet", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.STRING,
    discount: DataTypes.BOOLEAN
  })

module.exports = {Pet}