const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Profession model
class Profession extends Model {
}

// create fields/columns for Profession model
Profession.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        profession_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'profession'
    }
);

module.exports = Profession;
