const { Sequelize, sequelize, Op } = require("../config/db");
const UserModel = require("../models/UserModel");
const list = async (req, res) => {

    try {
        // let result = { text: "sequelize I" };

        //  * Insert data into UserModel
        // let insertData = await UserModel.create({ name: 'code Imporve', email: "code@gmail.com", role_id: 1 })

        // * Update Data
        // const dataUpdate = await UserModel.update({ name: 'new Code 2' }, { where: { id: 2 } });

        // * Delete Data
        // const deletedData = await UserModel.destroy({ where: { id: 3 } })

        // * Bulk Insert & update

        // const bulk = await UserModel.bulkCreate([
        //     {
        //         id: 3,
        //         name: 'bulk1', email: 'XXXXXXXXXXXXXXX', role_id: 1
        //     },
        //     {
        //         name: '7', email: 'XXXXXXXXXXXXXXX', role_id: 1
        //     }

        // ], { updateOnDuplicate: ['name', 'email '] })

        // * Attributes

        let result = await UserModel.findAll({
            // attributes: ['name', 'email']
            attributes: {
                exclude: ['updated_at', 'created_at'],
                include: [
                    [sequelize.fn('CONCAT', sequelize.col('name'), '  Sing'), 'fullname']
                ]

            }
        });

        // * result

        const result1 = await UserModel.findAll({
            attributes: ['id', 'name', ['email', 'emailId'], [sequelize.literal('Max("created_at"'), 'latest_created_at']],
            where: {
                // role_id: 1,
                // name: 'bulk1'
                id: { [Op.lte]: 5 },
                email: { [Op.like]: '%@gmail.com' }
            },

            // logging: console.log
            group: ['name']
            ,
            order: [

                ['name', 'Desc']
            ],
            limit: 5, offset: 1,
        })

        res.status(200).json(result1);
    } catch (err) {
        console.log('err ', err);
        res.status(400).json(err);

    }
}

module.exports = {
    list
}