module.exports = {
    schema: './src/database/schemas/index.ts',
    out: 'src/database/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        host: "localhost",
        port: "5432",
        user: "postgres",
        password: "SebMyr2212",
        database: "rappi420",
        ssl: false
    }
}