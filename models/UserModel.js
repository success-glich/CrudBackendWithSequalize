const dbConfig = require("../config/db.js");

const Model = dbConfig.Model;
const sequelize = dbConfig.sequelize;
const DataTypes = dbConfig.DataTypes;
const Op = dbConfig.Sequelize.Op;

class UserModel extends Model { }

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'users',
    freezeTableName: true
});

module.exports = UserModel;
