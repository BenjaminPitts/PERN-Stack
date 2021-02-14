const Client = require('pg').Client

const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/quiz_backend_development',
})
console.log(process.env.DATABASE_URL);

module.exports = client;
