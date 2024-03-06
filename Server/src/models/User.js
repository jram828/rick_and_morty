const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define(
     "User",
     {
       id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
       },
       password: { type: DataTypes.STRING },
       email: {
         type: DataTypes.STRING,
         allowNull: false,
       },
     },
     { timestamps: false }
   );
};
