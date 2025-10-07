import { DatabaseConfig } from "@adonisjs/lucid/types/database"

const databaseConfig: DatabaseConfig = {
  connection: 'sqlite',

  connections: {
    sqlite: {
      client: 'sqlite3',
      connection: {
        filename: './database.sqlite',
      },
      useNullAsDefault: true,
    },
  },
}

export default databaseConfig
