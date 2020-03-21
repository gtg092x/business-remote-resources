// @ts-ignore
const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PORT = 5432,
} = process.env

module.exports = {
  "type": "postgres",
  "database": POSTGRES_DB,
  "host": POSTGRES_HOST,
  "port": POSTGRES_PORT,
  "username": POSTGRES_USER,
  "password": POSTGRES_PASSWORD,
  "entities": ["./src/models/*.ts"],
  "migrations": ["./migrations/*.ts"],
  "synchronize": false,
  "logging": true,
  "cli": {
    "migrationsDir": "migrations",
    "entitiesDir": ["./src/models"]
  }
}