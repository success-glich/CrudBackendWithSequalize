const dbConfig = require("../config/db.js");

const Model = dbConfig.Model;
const sequelize = dbConfig.sequelize;
const DataTypes = dbConfig.DataTypes;
const Op = dbConfig.Sequelize.Op;
const { RoleModel } = require("./RoleModel.js");
const { PhotoModel } = require("./PhotoModel.js");
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

UserModel.belongsTo(RoleModel, {
    foreignKey: 'role_id',
    targetKey: 'id',
    // as: 'rl'
    as: 'rl'
});
//user one to many relationship
UserModel.hasMany(PhotoModel, {
    foreignKey: 'user_id',
    targetKey: 'id',
    as: 'photo'
});

UserModel.list = () => {
    return new Promise(async (resolve, reject) => {

        try {

            let data = await UserModel.findAll({

                attributes: ["name", "email", [sequelize.col("rl.name"), "role_name"]],

                include: [{
                    model: RoleModel,
                    as: 'rl',
                    attributes: ["name"],

                }],
                logging: console.log
            });
            resolve(data);
        } catch (err) {
            console.log("list Errors:", err);
            reject(err);
        }
    })
}


module.exports = UserModel;
