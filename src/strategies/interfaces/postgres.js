import { ICrud } from "./interfaceCrud.js"

class PostgresDB extends ICrud {
    constructor() {
        super()
        this._driver = null
        this._pets = null
        this._connect()
    }

    _connect() {
        this._driver = new Sequelize('pets', 'lucaspinto', '1234', {
            host: 'localhost',
            dialect: 'postgres',
            quoteIdentifiers: false,
            operatorAliases: false
        })
    }

    defineModel() {
        this._pets = driver.define('pets', {
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
    }

    async isConnected() {
        try{

            await this._driver.authenticate()
            return true
        } catch(err) {

            console.log('fail')
            return false
        }
    }


    create(item) {
        console.log('Item foi salvo em Postgres')
    }
}

export {
    PostgresDB
}