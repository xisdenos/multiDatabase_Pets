import { ICrud } from "./interfaceCrud.js"

class PostgresDB extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('Item foi salvo em Postgres')
    }
}

export {
    PostgresDB
}