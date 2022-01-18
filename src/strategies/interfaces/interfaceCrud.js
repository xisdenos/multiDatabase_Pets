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

export {
    ICrud
}