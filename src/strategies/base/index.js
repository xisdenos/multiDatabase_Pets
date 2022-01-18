class NotImplementedException extends Error {
    constructor() {
        super('Not Implemented Exception')
    }
}

class ICrud {
    

    create() {
        throw new NotImplementedException()
    }
    
    read() {
        throw new NotImplementedException()
    }

    update() {
        throw new NotImplementedException()
    }

    delete() {
        throw new NotImplementedException()
    }
    isConnected() {
        throw new NotImplementedException()
    }
}

class MongoDB extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('Item foi salvo em MongoDB')
    }
}

class Postgres extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('Item foi salvo em Postgres')
    }
}


export {
    ICrud
}