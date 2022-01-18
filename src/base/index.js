import { ContextStrategy } from "../strategies/base/contextStrategy.js"
import { MongoDB } from "../strategies/interfaces/mongodb.js"
import { PostgresDB } from "../strategies/interfaces/postgres.js"

const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create()

const contextPostgres = new ContextStrategy(new PostgresDB())
contextPostgres.create()