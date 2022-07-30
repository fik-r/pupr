module.exports = require("knex")({
  client: "mysql2",
  debug: false,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    connectTimeout: 300000,
    application_name: "pupr-fun-ride-nextjs",
  },
  pool: { min: 0, max: 10 },
});
