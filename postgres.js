const Client = require('pg').Client

const client = new Client({
    connectionString: 'postgres://pthgysajhzqkog:f07ce1bba7191c2037b0dcd45860123b6c64aa33132666e7589e78ecd0b2d05a@ec2-18-204-101-137.compute-1.amazonaws.com:5432/dapbta4beorpd4'
 || 'postgresql://localhost:5432/contacts_development',
})

module.exports = client;
