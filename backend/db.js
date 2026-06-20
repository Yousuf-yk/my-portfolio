import pg from "pg";
const {Pool} = pg;

const db = new Pool({
    user:process.env.DB_USER,
    host:process.end.DB_HOST,
    database:process.end.DB_NAME,
    password:process.end.DB_PASSWORD,
    port:process.end.DB_PORT,
});

export default db;