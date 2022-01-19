import { ICrud } from "../interfaces/interfaceCrud.js"

class ContextStrategy extends ICrud {
    constructor(database){
        super()
        this._database = database
    }

    connect() {
        return this._database.connect()
    }
    isConnected() {
        return this._database.isConnected()
    }

    create(item) {
        return this._database.create(item)
    }
    update(id, item) {
        return this._database.update(id, item)
    }
    read(item) {
        return this._database.read(item)
    }
    delete(id) {
        return this._database.delete(id)
    }
}

export {
    ContextStrategy
}