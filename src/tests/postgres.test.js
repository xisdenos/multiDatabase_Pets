import assert from 'assert'
import { PostgresDB } from "../strategies/interfaces/postgres.js";
import { ContextStrategy } from "../strategies/base/contextStrategy.js";


const context = new ContextStrategy(new PostgresDB())

describe('Postgres Strategy', function ()  {
    this.timeout(Infinity)
    it('PostgresSQL connection', async () => {
        const result = await context.isConnected()
        assert.equal(result, true)
    })
})