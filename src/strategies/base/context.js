import { ICrud } from ".";

class ContextStrategy extends ICrud {
    constructior(database){
        this._database = database
    }

    isConnected() {
        return this._database.isConnected()
    }
    create() {
        return this._database.create()
    }
    update() {
        return this._database.update()
    }
    read() {
        return this._database.read()
    }
    delete() {
        return this._database.delete()
    }
}