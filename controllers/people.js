const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');

router.get('/https://pern-test0987654321.herokuapp.com/', (req, res) => {
    postgres.query('SELECT * FROM people ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
    });
});

router.post('/https://pern-test0987654321.herokuapp.com/', (req, res) => {
    postgres.query(`INSERT INTO people (name, age) VALUES ('${req.body.name}', ${req.body.age})`, (err, results) => {
        postgres.query('SELECT * FROM people ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

router.delete('/https://pern-test0987654321.herokuapp.com/:id', (req, res) => {
    postgres.query(`DELETE FROM people WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM people ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

router.put('/https://pern-test0987654321.herokuapp.com/:id', (req, res) => {
    postgres.query(`UPDATE people SET name = '${req.body.name}', AGE = ${req.body.age} WHERE id = ${req.params.id}`, (err, results) => {
        postgres.query('SELECT * FROM people ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

module.exports = router;
