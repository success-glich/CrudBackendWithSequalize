const { Model, sequelize, DataTypes, Sequelize } = require("../config/db");


// const Op = Sequelize.Op;

class PhotoModel extends Model {

}

PhotoModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    ,
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,

    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }

}, {
    sequelize,
    timestamps: false,
    modelName: 'photo',
    freezeTableName: true
});


module.exports = { PhotoModel }