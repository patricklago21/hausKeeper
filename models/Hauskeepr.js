const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our Hauskeepr model
class Hauskeepr extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }

    // Get the Hauskeepr rating
    static getRating(body) {
        return Hauskeepr.findOne({
            where: { id: body.id },
            attributes: [
                [
                    sequelize.literal('SELECT AVG(stars) FROM review WHERE review.hauskeepr_id = hauskeepr.id'),
                    'rating'
                ]
            ]
        })
    }
}

// create fields/columns for Hauskeepr model
Hauskeepr.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 32]
            }
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                isAlphanumeric: true
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                isAlphanumeric: true
            }
        },
        date_of_birth: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        address_line_1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address_line_2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip_code: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profession_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'profession',
                key: 'id'
            }
        },
        hourly_rate: {
            type: DataTypes.DECIMAL(0,2),
            allowNull: false
        }
    },
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },

            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'hauskeepr'
    }
);

module.exports = Hauskeepr;
