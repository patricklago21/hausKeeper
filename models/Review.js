const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Review model
class Review extends Model {
}

// create fields/columns for Review model
Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'client',
                key: 'id'
            }
        },
        hauskeepr_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'hauskeepr',
                key: 'id'
            }
        },
        review: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stars: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 5
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'review'
    }
);

module.exports = Review;
