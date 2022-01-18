import { Sequelize } from 'sequelize'

const driver = new Sequelize('pets', 'lucaspinto', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    quoteIdentifiers: false,
    operatorAliases: false
})

async function main() {
    const Pets = driver.define('pets', {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING,
            required: true
        },
        raca: {
            type: Sequelize.STRING,
            required: true
        }
    }, {
        tableName: 'TB_PETS',
        freezeTableName: false,
        timestamps: false
    })

    await Pets.sync()


    const res = await Pets.findAll({raw: true})
    console.log(res)
}

main()