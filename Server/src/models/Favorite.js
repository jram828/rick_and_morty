const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define(
     "Favorite",
     {
       id: {
         type: DataTypes.INTEGER,
           primaryKey: true,
         allowNull:false
       },
       name: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,
       },
       species: { type: DataTypes.STRING,  allowNull: false },
        gender: {
           type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
        defaultValue:"Alive"},
       status: {
         type: DataTypes.STRING,
         allowNull: false,
       },
     },
     { timestamps: false }
   );
};
