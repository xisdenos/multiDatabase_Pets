import { ICrud } from "./interfaceCrud.js"

class MongoDB extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('Item foi salvo em MongoDB')
    }
}

export {
    MongoDB
}