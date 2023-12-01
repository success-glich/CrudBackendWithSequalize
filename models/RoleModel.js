const { Model, sequelize, DataTypes, Sequelize } = require("../config/db");


// const Op = Sequelize.Op;
class RoleModel extends Model {

}

RoleModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    ,
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }

}, {
    sequelize,
    timestamps: false,
    modelName: 'role',
    freezeTableName: true
});

module.exports = { RoleModel }