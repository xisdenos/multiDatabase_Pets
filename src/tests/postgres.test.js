import assert from 'assert'
import { PostgresDB } from "../strategies/interfaces/postgres.js";
import { ContextStrategy } from "../strategies/base/contextStrategy.js";


const context = new ContextStrategy(new PostgresDB())
const MOCK_PET_CADASTRAR = {
    nome: 'lizeu',
    raca: 'kuvasz'
}

describe('Postgres Strategy', function ()  {
    this.timeout(Infinity)
    this.beforeAll(async function() {
        await context.connect()
    })
    
    
    it('PostgresSQL connection', async () => {
        const result = await context.isConnected()
        assert.equal(result, true)
    })

    it('cadastrar', async () => {
        const result = await context.create(MOCK_PET_CADASTRAR)
        delete result.id
        assert.deepEqual(result, MOCK_PET_CADASTRAR)
    })
})