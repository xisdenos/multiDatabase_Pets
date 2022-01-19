import { ICrud } from "./interfaceCrud.js"
import { Sequelize } from 'sequelize'

class PostgresDB extends ICrud {
    constructor() {
        super()
        this._driver = null
        this._pets = null
    }

    connect() {
        this._driver = new Sequelize('pets', 'lucaspinto', '1234', {
            host: 'localhost',
            dialect: 'postgres',
            quoteIdentifiers: false,
            operatorAliases: false
        })
        this.defineModel()
    }

    async defineModel() {
        this._pets = this._driver.define('pets', {
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
    
        await this._pets.sync()
    }

    async isConnected() {
        try{
            await this._driver.authenticate()
            return true
        }
         catch(error) {
            console.log('fail')
            return false
        }
    }


    async create(item) {
        const { dataValues } = await this._pets.create(item)
        return dataValues
    }
}


export {
    PostgresDB
}