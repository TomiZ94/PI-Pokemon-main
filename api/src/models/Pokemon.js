const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,                          //allownull en false no permite que este vacio el campo
      unique: true,     
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,      
    },
    str: {
      type: DataTypes.INTEGER,
      allowNull: false,      
    },
    def: {
      type: DataTypes.INTEGER,
      allowNull: false,      
    },
    spd: {
      type: DataTypes.INTEGER,
      allowNull: false,      
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,      
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,      
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,  
      allowNull: false,    
      defaultValue: true
    }
  });
};